"use client";

import { useState, useEffect, useRef } from "react";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/config/site";
import { MobileDrawer } from "./MobileDrawer";
import { AnimatedLogo } from "./animated-logo";

type NavState = "hero" | "hidden" | "visible";

export function Navbar() {
  const [navState, setNavState] = useState<NavState>("hero");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const pathname = usePathname();

  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      requestAnimationFrame(() => {
        const currentY = window.scrollY;
        const prevY = lastScrollY.current;
        const delta = currentY - prevY;
        const heroThreshold = 80;

        // 1. At the very top of hero → transparent, visible over video
        if (currentY < heroThreshold) {
          setNavState("hero");
        }
        // 2. Past hero + scrolling down → hide with hero
        else if (delta > 8) {
          setNavState("hidden");
        }
        // 3. Past hero + scrolling up → white fixed slide-down
        else if (delta < -8) {
          setNavState("visible");
        }

        lastScrollY.current = currentY;
        ticking.current = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isVisible = navState === "visible";
  const isHidden = navState === "hidden";
  const isHero = navState === "hero";

  return (
    <>
      <header
        className={cn(
          "fixed left-0 right-0 top-0 z-50 w-full",
          "transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          // Position transform
          isVisible || isHero
            ? "translate-y-0"
            : "-translate-y-full",
          // Opacity
          isHidden ? "opacity-0" : "opacity-100",
          // Background
          isVisible
            ? "bg-white/95 shadow-[0_1px_3px_rgba(0,0,0,0.08),0_4px_12px_rgba(0,0,0,0.04)] backdrop-blur-md"
            : "bg-transparent"
        )}
      >
        <nav
          className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 lg:px-8"
          aria-label="Main navigation"
        >
          <AnimatedLogo />

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
                    isHero
                      ? "text-white hover:text-white/80"
                      : isActive
                        ? "text-[#5848b8]"
                        : "text-[#5848b8]/90 hover:text-[#322384]"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                  {isActive && !isHero && (
                    <span className="absolute bottom-0 left-0 h-[3px] w-full rounded-full bg-[#5848b8]" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/#assessment"
              className={cn(
                "inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-bold whitespace-nowrap transition-all active:scale-95",
                isHero
                  ? "bg-white text-[#322384] hover:bg-white/90 shadow-md"
                  : "bg-[#6246ea] text-white shadow-sm hover:bg-[#5238d6] hover:shadow-md"
              )}
            >
              Free Consultation
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setIsDrawerOpen(true)}
            className={cn(
              "flex h-11 w-11 items-center justify-center rounded-lg transition-colors lg:hidden",
              isHero
                ? "text-white hover:bg-white/15"
                : "text-gray-700 hover:bg-gray-200/60"
            )}
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