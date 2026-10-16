// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// Agar globals.css hai toh theek, nahi toh is line ko hata dena
import "./globals.css"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RKT Exports",
  description: "Your Partner in Global Trade",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Yeh Script Tailwind ko direct browser mein inject kar degi bina kisi setup ke */}
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}