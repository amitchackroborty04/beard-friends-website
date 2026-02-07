


'use client'

import React, { useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import ContestantCard from '@/components/common/ContestantCard'
import { ContestApiResponse } from './type'

// ── Circular Progress (unchanged) ───────────────────────────────────────
interface CircularProgressProps {
  value: number
  total: number
  label: string
}

function CircularProgress({ value, total, label }: CircularProgressProps) {
  const radius = 40
  const circumference = 2 * Math.PI * radius
  const progress = Math.min((value / total) * 100, 100)
  const strokeDashoffset = circumference - (progress / 100) * circumference

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r={radius} stroke="#1f2937" strokeWidth="8" fill="none" />
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="url(#gradient-timer)"
            strokeWidth="8"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            style={{ transition: 'stroke-dashoffset 1s ease-in-out' }}
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="gradient-timer" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-white">
            {value}
          </span>
          <span className="text-[8px] sm:text-[10px] uppercase text-gray-400 font-medium">
            {label}
          </span>
        </div>
      </div>
    </div>
  )
}

// ── Skeleton ──────────────────────────────────────────────────────────────
function SkeletonContestantCard() {
  return (
    <div className="relative overflow-hidden rounded-2xl h-72 sm:h-80 md:h-96 bg-[#1a1a1e] animate-pulse">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />
      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-gray-700" />
            <div className="space-y-2">
              <div className="h-6 w-28 bg-gray-700 rounded" />
              <div className="h-5 w-20 bg-gray-600 rounded" />
            </div>
          </div>
          <div className="h-14 w-14 rounded-full bg-gray-700" />
        </div>
      </div>
    </div>
  )
}

// ── Main Component ────────────────────────────────────────────────────────
export default function ContestVotingApp() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 })

  const { data, isLoading } = useQuery<ContestApiResponse>({
    queryKey: ['current-contest'],
    queryFn: async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contest/web-current`, { cache: 'no-store' })
      if (!res.ok) throw new Error('Failed')
      return res.json()
    },
  })

  // Usually only one contest group in "current"
  const currentGroup = data?.data?.[0]
  const contest = currentGroup?.contest
  const participants = (currentGroup?.participants || []).sort((a, b) => b.votes - a.votes)

  // Countdown from real endDate
  useEffect(() => {
    if (!contest?.endDate) return

    const end = new Date(contest.endDate).getTime()

    const tick = () => {
      const diff = end - Date.now()
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0 })
        return
      }
      const days    = Math.floor(diff / 86400000)
      const hours   = Math.floor((diff % 86400000) / 3600000)
      const minutes = Math.floor((diff % 3600000) / 60000)
      setTimeLeft({ days, hours, minutes })
    }

    tick()
    const id = setInterval(tick, 60000)
    return () => clearInterval(id)
  }, [contest?.endDate])

  const isEmpty = !data?.success || !currentGroup || participants.length === 0

  return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-6 md:p-10">
      <div className="container mx-auto border-t border-white/20 py-10 md:py-14">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-center lg:text-left">
                Contest Ends In
              </h1>
              {contest && (
                <p className="mt-3 text-gray-400 text-center lg:text-left text-lg">
                  {contest.title}
                </p>
              )}
            </div>

            <div className="flex items-center justify-center gap-5 sm:gap-7 md:gap-10">
              <CircularProgress value={timeLeft.days}    total={7}  label="Days" />
              <CircularProgress value={timeLeft.hours}   total={24} label="Hours" />
              <CircularProgress value={timeLeft.minutes} total={60} label="Mins" />
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {isLoading ? (
            Array(6).fill(0).map((_, i) => <SkeletonContestantCard key={i} />)
          ) : isEmpty ? (
            <div className="col-span-full py-20 text-center text-gray-400 text-xl">
              No active contest or participants yet
            </div>
          ) : (
            participants.map((p) => (
              <ContestantCard
                key={p._id}
                id={p._id}
                name={p?.user?.name}
                imageUrl={p?.photo?.url}
                votes={p?.votes}
                // optional extras you can pass if your card supports them:
                // frame={p.frame}
                // description={p.description}
              />
            ))
          )}
        </div>
      </div>
    </div>
  )
}