



"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function Navbar() {
  return (
    <nav className="sticky top-0 left-0 right-0 z-50 bg-[#1C1C1E]/95 backdrop-blur-md border-b border-white/5 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo3.png"
              alt="Logo"
              width={100}
              height={100}
              className="w-16 sm:w-[83px] h-16 sm:h-[83px] object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-10">
            <NavLink href="/about">About</NavLink>
            <NavLink href="/beard-contest">Beard Contest</NavLink>
            {/* <NavLink href="/shops">Barber Shops</NavLink> */}
            {/* <NavLink href="/shop">Online Shop</NavLink> */}
            <NavLink href="/contact">Contact</NavLink>
          </div>

          {/* Right side – Mobile Hamburger + Desktop Button */}
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Desktop Download App Button */}
            <div className="hidden lg:block">
              <Button
                asChild
                className="bg-[#BA5EEF] hover:bg-[#BA5EEF]/90 text-white h-11 sm:h-14 px-5 sm:px-8 text-base sm:text-xl font-semibold rounded-xl transition-all"
              >
                <Link href="/comming-soon">Download App</Link>
              </Button>
            </div>

            {/* Mobile Menu Trigger */}
            <Sheet>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="!h-7 !w-7" />
                </Button>
              </SheetTrigger>

              <SheetContent 
                side="right" 
                className="w-[85%] sm:w-[400px] bg-[#1C1C1E] border-l border-white/10 p-0"
              >
                <div className="flex flex-col h-full">
                  {/* Logo in mobile menu */}
                  <div className="p-6 border-b border-white/10">
                    <Link href="/" className="flex items-center">
                      <Image
                        src="/images/logo3.png"
                        alt="Logo"
                        width={80}
                        height={80}
                        className="w-14 h-14 object-contain"
                      />
                    </Link>
                  </div>

                  {/* Navigation Links – will close sheet on click */}
                  <nav className="flex flex-col flex-1 p-6 gap-2 text-base">
                    <MobileNavLink href="/about">About</MobileNavLink>
                    <MobileNavLink href="/beard-contest">Beard Contest</MobileNavLink>
                    <MobileNavLink href="#shops">Barber Shops</MobileNavLink>
                    <MobileNavLink href="#shop">Online Shop</MobileNavLink>
                    <MobileNavLink href="/contact">Contact</MobileNavLink>
                  </nav>

                  {/* Download App button at bottom */}
                  <div className="p-6 border-t border-white/10 mt-auto">
                    <Button
                      asChild
                      className="w-full bg-[#BA5EEF] hover:bg-[#BA5EEF]/90 h-14 text-lg font-semibold rounded-xl"
                    >
                      <Link href="/comming-soon">Download App</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Desktop nav link
function NavLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "text-white/90 hover:text-white text-sm xl:text-base font-medium transition-colors",
        className
      )}
    >
      {children}
    </Link>
  );
}

// Mobile nav link – closes sheet on click
function MobileNavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <SheetClose asChild>
      <Link
        href={href}
        className="block py-4 px-2 text-lg font-medium text-white/90 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
      >
        {children}
      </Link>
    </SheetClose>
  );
}

export default Navbar;