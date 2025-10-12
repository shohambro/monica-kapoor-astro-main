"use client";

import { useState } from "react";
import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import Photos from "@/components/Photos";
import MusicSchoolTestimonials from "@/components/TestimonialCards";
import WhyChooseUs from "@/components/WhyChooseUs";
import TarotModal from "@/components/TarotModal";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleRegister = () => {
    console.log("User clicked register - redirect to registration page or form");
    setShowModal(false);
  };

  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <MusicSchoolTestimonials />
      <Photos />
      <Instructors />
      <Footer />
      {/* <TarotModal 
        onClose={handleModalClose}
        onRegister={handleRegister}
      /> */}
    </main>
  );
}