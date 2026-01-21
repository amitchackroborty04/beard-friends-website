"use client";
import React from "react";
import Image from "next/image";

function Download() {
  return (
    <div className="bg-[#0E0E0F] py-16 md:px-4">
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
              <button>
                <Image
                  src="/images/button1.png"
                  alt="Google Play"
                  width={1000}
                  height={1000}
                  className="h-[72px] w-[215px] object-cover"
                />
              </button>


              {/* App Store */}
              <button>
                <Image
                  src="/images/button2.png"
                  alt="Google Play"
                  width={1000}
                  height={1000}
                  className="h-[72px] w-[215px] object-cover"
                />
              </button>
            </div>
          </div>

          {/* Mobile Mockup Section */}
          <div className="flex justify-center lg:justify-end bgw">
            <div className="relative">
              <Image src="/images/downloadimage.png" width={500} height={500} alt="iamge" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Download;
