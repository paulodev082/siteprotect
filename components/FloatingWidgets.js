"use client";
import Link from "next/link";
import { Instagram, MessageCircle } from "lucide-react";

export default function FloatingWidgets() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end gap-4 z-50">
      {/* Instagram flutuante */}
      <Link
        href="https://www.instagram.com/protect.tecnologia?igsh=MXJjZ3RzcTZ2NWJ6dQ=="
        target="_blank"
        rel="noopener noreferrer"
        className="bg-pink-500 hover:bg-pink-600 text-white px-3 py-2 rounded-full shadow-lg flex items-center text-sm font-medium"
      >
        <Instagram size={18} className="mr-2" />
        Instagram
      </Link>
    </div>
  );
}
