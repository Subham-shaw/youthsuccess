"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white flex items-center justify-center px-6">
      <div className="max-w-2xl text-center space-y-8">
        
        {/* Logo */}
        {/* <div className="flex justify-center">
          <Image
            src="/logo.jpeg" // replace with your logo
            alt="Youthsuccess"
            width={200}
            height={200}
            className="rounded-2xl"
          />
        </div> */}

        {/* 404 Text */}
        <h1 className="text-7xl md:text-9xl font-extrabold tracking-tight text-emerald-500">
          404
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold">
          Page Not Found
        </h2>

        <p className="text-neutral-400 max-w-md mx-auto">
          The page you’re looking for doesn’t exist or may have been moved.
          Let’s get you back on track.
        </p>

        {/* Actions */}
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-black hover:bg-emerald-400 transition"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-700 px-6 py-3 text-sm font-semibold hover:bg-neutral-900 transition"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}
