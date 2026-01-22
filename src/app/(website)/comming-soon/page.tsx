'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ComingSoon() {
  return (
    <main className="h-screen bg-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl text-center">

        {/* Badge */}
        <span className="inline-flex items-center justify-center mb-5 rounded-full bg-[#BA5EEF]/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-[#BA5EEF]">
           Launching Soon
        </span>

        {/* Heading */}
        <h1 className="font-extrabold tracking-tight text-gray-900 text-3xl sm:text-4xl md:text-5xl">
          Something
          <span className="block mt-2 bg-gradient-to-r from-[#BA5EEF] to-purple-400 bg-clip-text text-transparent">
            Amazing is Coming
          </span>
        </h1>

        {/* Description */}
        <p className="mt-5 sm:mt-6 text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
          We’re building something special for you.
          Be the first to know when we launch.
        </p>

       <div className='mt-10'>
        <Link href="/">          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#BA5EEF] px-6 py-3 text-sm sm:text-base font-semibold text-white transition hover:bg-[#a44be6] active:scale-95"
          >
            GO Home 
            <ArrowRight size={16} />
          </button>
          </Link>
 
       </div>

        {/* Footer */}
        <p className="mt-10 sm:mt-12 text-xs sm:text-sm text-gray-400">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </main>
  );
}
