"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/config/site";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

function useFocusTrap(isOpen: boolean, onClose: () => void) {
  useEffect(() => {
    if (!isOpen) return;

    const drawer = document.querySelector('[data-slot="mobile-drawer"]');
    if (!drawer) return;

    const focusable = drawer.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    const handleTab = (e: globalThis.KeyboardEvent) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };

    const handleEscape = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    first?.focus();
    window.addEventListener("keydown", handleTab);
    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleTab);
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);
}

export function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  const pathname = usePathname();
  useFocusTrap(isOpen, onClose);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          data-slot="mobile-drawer"
          className="fixed inset-0 z-[100] lg:hidden"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-xl"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="flex h-16 items-center justify-between border-b px-4">
              <span className="text-lg font-bold text-[var(--color-deep-navy)]">
                Menu
              </span>
              <button
                onClick={onClose}
                className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-gray-100"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="flex flex-col p-4" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className={`rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                    pathname === link.href
                      ? "bg-[var(--color-royal-blue-50)] text-[var(--color-royal-blue)]"
                      : "text-[var(--color-deep-navy-800)] hover:bg-gray-50"
                  }`}
                  aria-current={pathname === link.href ? "page" : undefined}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/#assessment"
                onClick={onClose}
                className="mt-4 inline-flex items-center justify-center rounded-lg bg-[var(--color-royal-blue)] px-5 py-3 text-base font-semibold text-white"
              >
                Free Assessment
              </Link>
            </nav>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
