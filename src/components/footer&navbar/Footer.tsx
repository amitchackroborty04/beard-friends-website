'use client'

import React from "react"

import { useState } from 'react'
import Image from 'next/image'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [fullName, setFullName] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Newsletter signup:', { fullName, email })
    setFullName('')
    setEmail('')
  }

  return (
    <footer className="bg-black border-t border-gray-900 pt-12 pb-3 md:px-8 md:pt-20 z-50">
      <div className="mx-auto container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand Section */}
          <div className="col-span-1">
            <div className="flex flex-col items-start mb-6">
              <div className="w-20 h-20 md:w-24 md:h-24 relative mb-4">
                <Image
                  src="/images/logo3.png"
                  alt="Beard Friends Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#FFFFFF]">Beard Friends</h3>
            </div>
            <p className="text-[#FFFFFF] text-sm md:text-base leading-relaxed mb-4 text-justify" >
              Lorem ipsum dolor sit amet consectetur. Faucibus bibendum 
              sit diam ut sed lobortis aliquam. Vel lorem tempor elementum 
              mauris tristique odio. In mattis mauris vel.
            </p>
          </div>

          {/* Pages Section */}
          <div className="col-span-1">
            <h4 className="text-lg md:text-xl font-bold mb-6 text-white">Pages</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-[#BA5EEF] hover:text-purple-300 text-sm md:text-base transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-[#BA5EEF] hover:text-purple-300 text-sm md:text-base transition">
                  Beard Contest
                </a>
              </li>
              <li>
                <a href="#" className="text-[#BA5EEF] hover:text-purple-300 text-sm md:text-base transition">
                  Barbershops
                </a>
              </li>
              <li>
                <a href="#" className="text-[#BA5EEF] hover:text-purple-300 text-sm md:text-base transition">
                  Online Shop
                </a>
              </li>
              <li>
                <a href="#" className="text-[#BA5EEF] hover:text-purple-300 text-sm md:text-base transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div className="col-span-1">
            <h4 className="text-lg md:text-xl font-bold mb-6 text-[#FFFFFF]">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-[#BA5EEF] hover:text-purple-300 text-sm md:text-base transition">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-[#BA5EEF] hover:text-purple-300 text-sm md:text-base transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-[#BA5EEF] hover:text-purple-300 text-sm md:text-base transition">
                  Imprint
                </a>
              </li>
              <li>
                <a href="#" className="text-[#BA5EEF] hover:text-purple-300 text-sm md:text-base transition">
                  Cancellation policy
                </a>
              </li>
              <li>
                <a href="#" className="text-[#BA5EEF] hover:text-purple-300 text-sm md:text-base transition">
                  Delivery
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="col-span-1">
            <h4 className="text-lg md:text-xl font-bold mb-6 text-white">Subscribe to Our News Letter</h4>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg placeholder-gray-500 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg placeholder-gray-500 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                required
              />
              <div className="flex justify-end">
              <button
                type="submit"
                className=" bg-[#BA5EEF] hover:bg-purple-600 text-white font-semibold w-[102px] py-3 px-4 rounded-lg text-sm md:text-base transition"
              >
                Submit
              </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-900 pt-8 md:pt-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white text-xs md:text-base font-bold text-center md:text-left">
            By Subscribing to our news Letter your data will be processed according to our{' '}
            <a href="#" className="text-[#BA5EEF] hover:text-purple-300 transition">
              Privacy Policy
            </a>
          </p>
          <p className="text-gray-400 text-xs md:text-sm text-center md:text-right">
            All rights reserved 2023 © Bartfreunde
          </p>
        </div>
      </div>
    </footer>
  )
}
