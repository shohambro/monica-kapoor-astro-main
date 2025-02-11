'use client';
import { useState } from "react"; // Import useState for managing modal state
import Link from "next/link";
import { Philosopher, Open_Sans } from "next/font/google";
import { cn } from "@/utils/cn";
import Modal from "@/components/Modal"; // Import the Modal component
// import Copyright from "../../public/images/Copyright.png";

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
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

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
                <Link href="/courses" className="hover:text-white hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white hover:underline">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/appointments" className="hover:text-white hover:underline">
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
      <a href="mailto:mkapoor369@gmail.com" className="hover:text-white hover:underline">
        mkapoor369@gmail.com
      </a>
    </li>
    <li>
      Phone:{" "}
      <a href="tel:+919873113829" className="hover:text-white hover:underline">
        +91 98731 13829
      </a>
    </li>
    <li>Delhi, India</li>
  </ul>
</div>

        </div>
        <div className="mt-12 text-center">
          <h3 className={cn("text-xl font-semibold mb-4", headingFont.className)}>Follow Me</h3>
          <div className="flex justify-center space-x-6">
            <a href="https://www.facebook.com/muaonica?mibextid=ZbWKwL" className="text-[#6a1818] hover:text-white hover:underline">Facebook</a>
            <a href="https://www.linkedin.com/in/kapoor-m-95a9b2143?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-[#6a1818] hover:text-white hover:underline">LinkedIn</a>
            <a href="https://youtube.com/@healwithmotheruniverse?si=aQVygQBEdGe06DqY" className="text-[#6a1818] hover:text-white hover:underline">YouTube</a>
            <a href="https://www.instagram.com/divinemonica369/profilecard/?igsh=OHV6NjBvMGhua2I3" className="text-[#6a1818] hover:text-white hover:underline">Instagram</a>
          </div>
        </div>
        <div className="mt-4 text-center border-t border-neutral-300 pt-6">
  <p
    className={cn("text-sm hover:text-white hover:underline lg:text-lg", paragraphFont.className)}
    onClick={handleModalOpen}
    style={{ cursor: "pointer" }}
  >
    © {new Date().getFullYear()} Divine Monica. All rights reserved.
  </p>
  <p className={cn("text-sm lg:text-lg", paragraphFont.className)}>
    Developed By -{" "}
    <a 
      href="https://www.linkedin.com/in/shoham-brojobasi-9526b6201/" 
      className="hover:text-white hover:underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      Shoham Brojobasi
    </a>{" "}
    and{" "}
    <a 
      href="https://www.linkedin.com/in/saksham-kumar-b930b2220/" 
      className="hover:text-white hover:underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      Saksham Kumar
    </a>
  </p>
</div>
      </div>

      {/* Modal component */}
      <Modal isOpen={isModalOpen} image={'/images/Copyright.png'} onClose={handleModalClose} title="Copyright Notice" description="The content of this website, including the text, images, graphics, audio, and all related elements, is the exclusive property of Monica Kapoor and is protected under applicable copyright laws. Unauthorized use, reproduction, or distribution of this content, in whole or in part, without prior written permission from Monica Kapoor, is strictly prohibited and may result in legal action. This website is intended solely for informational and entertainment purposes. All rights are reserved by Monica Kapoor. Use of this website's content for commercial purposes or any other unauthorized use is strictly prohibited. For inquiries or permissions, please contact: Monica Kapoor divineblessingsladyoffortune@gmail.com" />
    </footer>
  );
}

export default Footer;
