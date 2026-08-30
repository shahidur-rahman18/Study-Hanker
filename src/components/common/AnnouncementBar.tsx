"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Flame } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem("announcement-dismissed");
    if (!dismissed) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem("announcement-dismissed", "true");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative overflow-hidden bg-[var(--color-deep-navy)] text-white"
          role="banner"
          aria-label="Announcement"
        >
          <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2.5 text-sm">
            <Flame className="h-4 w-4 shrink-0 text-[var(--color-golden-amber)]" />
            <p className="text-center">
              <span className="font-medium">South Korea September 2026 Intake</span>{" "}
              Applications Open!{" "}
              <Link
                href="/#assessment"
                className="font-semibold text-[var(--color-golden-amber)] underline underline-offset-2 hover:text-[var(--color-golden-amber-600)]"
              >
                Apply Now
              </Link>
            </p>
            <button
              onClick={handleDismiss}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 transition-colors hover:bg-white/10"
              aria-label="Dismiss announcement"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
