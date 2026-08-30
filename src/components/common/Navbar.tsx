"use client";

import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/config/site";
import { MobileDrawer } from "./MobileDrawer";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          /* CHANGE 1: ওরিজিনাল সাইটের হালকা গ্রে/অফ-হোয়াইট ব্যাকগ্রাউন্ড ট্রাই করতে পারেন (bg-[#f3f3f5] বা bg-white) */
          isScrolled ? "bg-white/95 shadow-sm backdrop-blur-md" : "bg-[#f4f4f6]"
        )}
      >
        <nav
          /* CHANGE 2: হেডার হাইট h-16 থেকে বাড়িয়ে h-20 করা হয়েছে যেন উপাদানগুলো ফ্রিলি শ্বাস নিতে পারে */
          className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 lg:px-8"
          aria-label="Main navigation"
        >
          {/* Logo Section */}
          <Link
            href="/"
            className="flex items-center gap-2.5"
            aria-label="Study Hanker - Home"
          >
            <Image
              src="/logos.png"
              alt="Study Hanker"
              width={100}
              height={100}
              className="h-11 w-auto  object-contain"
              priority
              quality={100}
            />
            <div className="hidden sm:flex items-center gap-1.5 text-xl font-black tracking-tight lg:text-[22px]">
              <span className="rounded-lg bg-[#322384] px-2.5 py-1 text-white uppercase leading-none">
                STUDY
              </span>
              <span className="text-[#322384] uppercase leading-none">HANKER</span>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden items-center gap-6 lg:flex xl:gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative py-2 text-base font-semibold transition-all whitespace-nowrap",
                    isActive
                      ? "text-[#5848b8]"
                      : "text-[#5848b8]/90 hover:text-[#322384]"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 h-[3px] w-full rounded-full bg-[#5848b8]" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            {/* CHANGE 7: বাটন শেপ pill-rounded (rounded-full), বড় ফন্ট ও অরিজিনাল পার্পল শেড ব্যবহার করা হয়েছে */}
            <Link
              href="/#assessment"
              className="inline-flex items-center justify-center rounded-2xl bg-[#6246ea] px-6 py-3 text-base font-bold text-white shadow-sm transition-all hover:bg-[#5238d6] hover:shadow-md active:scale-95 whitespace-nowrap"
            >
              Free Consultation
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="flex h-11 w-11 items-center justify-center rounded-lg text-gray-700 transition-colors hover:bg-gray-200/60 lg:hidden"
            aria-label="Open menu"
            aria-expanded={isDrawerOpen}
          >
            <Menu className="h-7 w-7" />
          </button>
        </nav>
      </header>

      <MobileDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </>
  );
}