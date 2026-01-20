"use client";
import React from "react";
import Image from "next/image";

function Download() {
  return (
    <div className="bg-[#0E0E0F] py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="space-y-6" >
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Download Our Mobile Application
            </h2>

            <p className="text-gray-300 text-base leading-relaxed">
              Your voice matters! Register on our app to vote for your favorite
              candidate and join a community that values your opinion. Don&aps;t
              miss this chance to make an impact — download the app and register
              now!
            </p>

            {/* App Store Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              {/* Google Play */}
              <a
                href="#"
                className="flex items-center gap-3 bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-lg transition-colors border border-gray-700"
              >
                <Image
                  src="/images/google-play.png"
                  alt="Google Play"
                  width={32}
                  height={32}
                />
                <div className="text-left">
                  <p className="text-xs text-gray-400">Get it on</p>
                  <p className="text-sm font-semibold">Google Play</p>
                </div>
              </a>

              {/* App Store */}
              <a
                href="#"
                className="flex items-center gap-3 bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-lg transition-colors border border-gray-700"
              >
                <Image
                  src="/images/app-store.png"
                  alt="App Store"
                  width={32}
                  height={32}
                />
                <div className="text-left">
                  <p className="text-xs text-gray-400">Download on the</p>
                  <p className="text-sm font-semibold">App Store</p>
                </div>
              </a>
            </div>
          </div>

          {/* Mobile Mockup Section */}
          <div className="flex justify-center lg:justify-end bgw">
            <div className="relative">
              <Image src="/images/downloadimage.png" width={500} height={500} alt="iamge"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Download;
