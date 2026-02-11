"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-700 text-neutral-300">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Logo + Address */}
        <div className="space-y-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              src="/logo.jpeg" // replace with your logo
              alt="Youthsuccess"
              width={200}
              height={200}
              className="rounded-2xl"
            />
            {/* <span className="text-xl font-semibold text-white"> */}
              {/* Youthsuccess */}
            {/* </span> */}
          </div>

          {/* Address */}
          <p className="text-xs leading-relaxed text-neutral-400">
            Youthsuccess Ecommerce Pvt. Ltd.<br />
            Sitesh Nagar, Lalgola<br />
            Murshidabad - 742151 <br />
            West Bengal, India
          </p>

          {/* Contact */}
          <div className="text-sm space-y-1">
            <p className="my-5">
              Phone:{" "}
            <br />
              <a href="tel:+917047354422" className="hover:text-green-500 mr-2">
                +91 70473 54422
              </a>
              <br />
              <a href="tel:+919831706745" className="hover:text-green-500">
                +91 98317 06745
              </a>
            </p>
            <p className="my-5">
              Toll-Free Number:{" "}
            <br />
              <a href="tel:1800-212-0152" className="hover:text-green-500 mr-2">
                1800-212-0152
              </a>
            </p>
            <p>
              Email:{" "}
              <br />
              <a
                href="mailto:success01021986@gmail.com"
                className="hover:text-green-500 mr-2"
              >
                success01021986@gmail.com
              </a>
              <br />
              <a
                href="mailto:successcompany732@gmail.com"
                className="hover:text-green-500"
              >
                successcompany732@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Page Links */}
        <div className="md:pt-10">
          <h4 className="text-white font-semibold mb-4">Page Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-green-500">
                Home
              </Link>
            </li>
            <li>
              <Link href="/#services" className="hover:text-green-500">
                Services
              </Link>
            </li>
            <li>
              <Link href="/#about" className="hover:text-green-500">
                About
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="hover:text-green-500">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-green-500">
                Gallery
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal Links */}
        <div className="md:pt-10">
          <h4 className="text-white font-semibold mb-4">Legals</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/legal" className="hover:text-green-500">
                Legal
              </Link>
            </li>
            {/* <li>
              <Link href="/terms" className="hover:text-green-500">
                Terms of Service
              </Link>
            </li> */}
          </ul>
        </div>

        {/* Empty / Optional Column */}
        <div className="hidden md:block" />
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col items-center center gap-3 text-xs md:text-sm text-neutral-400">
          <p>
            © {new Date().getFullYear()} Youthsuccess Ecommerce Pvt. Ltd.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
