"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export function AnimatedLogo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2.5"
      aria-label="Study Hanker - Home"
    >
     {/* Horizontally Spinning Icon Container */}
      <div className="[perspective:1000px] flex items-center justify-center shrink-0">
        <motion.div
          animate={{
            rotateY: 360,
          }}
          transition={{
            duration: 5, // ঘূর্ণনের গতি (কমালে দ্রুত ঘুরবে, বাড়ালে ধীর হবে)
            repeat: Infinity,
            ease: "linear", // মসৃণ লুপের জন্য linear ব্যবহার করা হয়েছে
          }}
          className="flex items-center justify-center"
        >
        <Image
          src="/logo.png"
          alt="Study Hanker"
          width={100}
          height={100}
          className="h-18 w-auto object-contain"
          priority
          quality={100}
        />
      </motion.div>
      </div>

      {/* Brand Name Text */}
      <div className="hidden sm:flex items-center gap-1.5 text-xl font-black tracking-tight lg:text-[22px]">
        <span className="rounded-lg bg-[#322384] px-2.5 py-1 text-white uppercase leading-none">
          STUDY
        </span>
        <span className="text-[#322384] uppercase leading-none">HANKER</span>
      </div>
    </Link>
  );
}