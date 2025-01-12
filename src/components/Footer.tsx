"use client";
import Link from "next/link";

function Footer() {
  return (
    <footer className="py-12 bg-gradient-to-br from-yellow-400 to-orange-500 text-[#6a1818]">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Me Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About Me</h3>
            <p className="text-sm">
              Monica Kapoor is a spiritual guide specializing in Tarot Reading, Numerology, and Divine Guidance. With profound intuition and energy alignment, she empowers individuals to gain clarity in life, overcome obstacles, and embrace happiness and success. Through her readings, she connects deeply with divine energies to offer actionable insights and motivational guidance for a fulfilling life.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="text-sm space-y-2">
              <li>
                <Link href="/about" className=" hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className=" hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/products" className=" hover:text-white">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className=" hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p className="text-sm">
              For inquiries, appointments, or more information, reach out at:
            </p>
            <ul className="mt-4 text-sm space-y-2">
              <li>
                Email:{" "}
                <a
                  href="mailto:divineblessingsladyoffortune@gmail.com"
                  className=" hover:text-white"
                >
                  divineblessingsladyoffortune@gmail.com
                </a>
              </li>
              <li>Delhi, India</li>
            </ul>
          </div>
        </div>

        {/* Follow Me Section */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.facebook.com/muaonica?mibextid=ZbWKwL"
              className="text-[#6a1818] hover:text-white"
              aria-label="Facebook"
            >
              Facebook
            </a>
            <a
              href="https://www.linkedin.com/in/kapoor-m-95a9b2143?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="text-[#6a1818] hover:text-white"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href="https://youtube.com/@healwithmotheruniverse?si=aQVygQBEdGe06DqY"
              className="text-[#6a1818] hover:text-white"
              aria-label="YouTube"
            >
              YouTube
            </a>
            <a
              href="https://www.instagram.com/divinemonica369/profilecard/?igsh=OHV6NjBvMGhua2I3"
              className="text-[#6a1818] hover:text-white"
              aria-label="Instagram"
            >
              Instagram
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 text-center bg-white border-t border-neutral-300 pt-6">
          <p className="text-sm">
            © {new Date().getFullYear()} Monica Kapoor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
