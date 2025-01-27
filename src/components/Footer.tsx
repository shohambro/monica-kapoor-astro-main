"use client";
import Link from "next/link";

import { Philosopher, Open_Sans } from "next/font/google";
import { cn } from "@/utils/cn";

const headingFont = Philosopher({
  subsets: ["latin"],
  weight: ["700"],
});

const paragraphFont = Open_Sans({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
});

function Footer() {
  return (
    <footer className="py-12 bg-gradient-to-br from-yellow-400 to-orange-500 text-[#6a1818]">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className={cn("text-xl font-semibold mb-4", headingFont.className)}>Quick Links</h3>
            <ul className="text-sm space-y-2">
              <li>
                <Link href="/about" className="hover:text-white hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white hover:underline">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className={cn("text-xl font-semibold mb-4", headingFont.className)}>Contact</h3>
            <p className={cn(paragraphFont.className)}>
              For inquiries, appointments, or more information,<br /> reach out at:
            </p>
            <ul className="mt-4 text-sm space-y-2">
              <li>
                Email:{" "}
                <a href="mailto:divineblessingsladyoffortune@gmail.com" className="hover:text-white hover:underline">
                  divineblessingsladyoffortune@gmail.com
                </a>
              </li>
              <li>Delhi, India</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 text-center">
          <h3 className={cn("text-xl font-semibold mb-4", headingFont.className)}>Follow Me</h3>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-[#6a1818] hover:text-white hover:underline">Facebook</a>
            <a href="#" className="text-[#6a1818] hover:text-white hover:underline">LinkedIn</a>
            <a href="#" className="text-[#6a1818] hover:text-white hover:underline">YouTube</a>
            <a href="#" className="text-[#6a1818] hover:text-white hover:underline">Instagram</a>
          </div>
        </div>
        <div className="mt-4 text-center border-t border-neutral-300 pt-6">
          <p className={cn("text-sm lg:text-lg", paragraphFont.className)}>
            © {new Date().getFullYear()} Monica Kapoor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
