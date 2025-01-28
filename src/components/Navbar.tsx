"use client"
import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import Link from "next/link";
import Image from "next/image";
import ProfilePicture from "../../public/images/ProfilePicture.jpg";
import GuruJiPic1 from "../../public/images/GuruJiPic1.png";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [toggle, setToggle] = useState<boolean>(false);

  const controlNavBar = useCallback(() => {
    if (window.scrollY > lastScrollY) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", controlNavBar);
    return () => {
      window.removeEventListener("scroll", controlNavBar);
    };
  }, [controlNavBar]);

  const menuVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
  };

  const navbarVariants = {
    hidden: { y: "-100%" },
    visible: { y: 0 },
  };

  return (
    <div className="relative">
      {/* Navbar for larger screens */}
      <motion.div
        className={`fixed top-0 left-0 w-full bg-opacity-80 backdrop-blur-md z-50 sm:block hidden`}
        initial="hidden"
        animate={showNavbar ? "visible" : "hidden"}
        variants={navbarVariants}
        transition={{ duration: 0.3 }}
      >
        <div className="max-w-10xl mx-auto px-6 py-2 flex items-center justify-between h-30">
          <Link href="/about">
            <Image
              src={ProfilePicture}
              alt="Profile Picture"
              width={64}
              height={64}
              className="rounded-full cursor-pointer pl-4 w-[100px] h-[80px]"
            />
          </Link>
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
                  <HoveredLink href="/products/specialty">Our Specialty</HoveredLink>
                </div>
              </MenuItem>
            </Link>
            <Link href={"/appointments"}>
              <MenuItem setActive={setActive} active={active} item="Appointments" />
            </Link>
          </Menu>
          <Image
            src={GuruJiPic1}
            alt="Guru Ji"
            width={64}
            height={64}
            className="rounded-full pr-4 w-[120px] h-[120px]"
          />
        </div>
      </motion.div>

      {/* Toggle button for small screens */}
      <div className="z-40 fixed top-0 left-0 w-full md:hidden flex bg-gradient-to-br from-yellow-400 to-orange-500 justify-between items-center px-4 py-2">
        <Link href="/about">
          <Image
            src={ProfilePicture}
            alt="Profile Picture"
            width={64}
            height={64}
            className="rounded-full md:hidden cursor-pointer pl-4 w-[80px] h-[60px]"
          />
        </Link>

        <button
          onClick={() => setToggle(!toggle)}
          className=" z-10 top-4 right-4 md:hidden bg-orange-500 border-none shadow-md text-white px-4 py-2 rounded"
        >
          Menu
        </button>
      </div>

      {/* Navbar for small screens */}
      {toggle && (
        <motion.div
          className="fixed top-0 right-0 w-[300px] h-full bg-white rounded-sm shadow-md flex flex-col p-4 md:hidden z-50"
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ type: "spring", stiffness: 50 }}
        >
          <h1
            onClick={() => setToggle(!toggle)}
            className="absolute text-orange-600 top-4 right-4 text-2xl cursor-pointer"
          >
            X
          </h1>
          <div className="flex flex-col space-y-8 text-2xl mt-12">
            <Link onClick={() => setToggle(!toggle)} href="/">
              <MenuItem setActive={setActive} active={active} item="Home" />
            </Link>
            <Link onClick={() => setToggle(!toggle)} href="/courses">
              <MenuItem setActive={setActive} active={active} item="Services" />
            </Link>
            <Link onClick={() => setToggle(!toggle)} href="/products">
              <MenuItem setActive={setActive} active={active} item="Products" />
            </Link>
            <Link onClick={() => setToggle(!toggle)} href="/appointments">
              <MenuItem setActive={setActive} active={active} item="Appointments" />
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default Navbar;
