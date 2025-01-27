"use client";

import React, { useState, useEffect } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import Link from "next/link";
import Image from "next/image";
import ProfilePicture from "../../public/images/ProfilePicture.jpg";
import GuruJi from "../../public/images/GuruJiPic.jpg";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavBar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavBar);
    }
    return () => {
      window.removeEventListener("scroll", controlNavBar);
    };
  });

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-opacity-80 backdrop-blur-md z-50 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between h-20">
        {/* Profile Picture on the left */}
        <Link href="/about">
          <Image
            src={ProfilePicture}
            alt="Profile Picture"
            width={64}
            height={64}
            className="rounded-full cursor-pointer pl-4"
          />
        </Link>

        {/* Navbar Menu in the center */}
        <Menu setActive={setActive} className="flex space-x-8">
          <Link href={"/"}>
            <MenuItem setActive={setActive} active={active} item="Home" />
          </Link>
          <Link href={"/courses"}>
            <MenuItem setActive={setActive} active={active} item="Services">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/courses">All Services</HoveredLink>
                <HoveredLink href="/courses">Numerology</HoveredLink>
                <HoveredLink href="/courses">Tarot Reading</HoveredLink>
                <HoveredLink href="/courses">Psychic Reading</HoveredLink>
              </div>
            </MenuItem>
          </Link>
          <Link href={"/products"}>
            <MenuItem setActive={setActive} active={active} item="Products">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/products/stones">Stones</HoveredLink>
                <HoveredLink href="/products/bracelets">Bracelets</HoveredLink>
                <HoveredLink href="/products/yantras">Yantras</HoveredLink>
              </div>
            </MenuItem>
          </Link>
          <Link href={"/appointments"}>
            <MenuItem setActive={setActive} active={active} item="Appointments" />
          </Link>
        </Menu>

        {/* Guru Ji Image on the right */}
        <Image
          src={GuruJi}
          alt="Guru Ji"
          width={64}
          height={64}
          className="rounded-full pr-4"
        />
      </div>
    </div>
  );
}

export default Navbar;
