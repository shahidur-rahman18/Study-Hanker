import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Study Hanker — Study Abroad Consultancy for Bangladeshi Students",
  description:
    "Your trusted partner for studying abroad. Get free profile assessment, university matching, scholarship guidance, and visa support for South Korea, UK, USA, Germany and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
