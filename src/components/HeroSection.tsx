import Link from "next/link";
import Image from "next/image";
import ProfilePicture from "../../public/images/ProfilePicture.jpg";
import MainHeroBack from "../../public/images/MainHeroBack.jpg";
import GuruJi from "../../public/images/GuruJiPic.jpg";
import HeroSmallBack from "../../public/images/HeroSmallBack.jpg";

import { Philosopher, Open_Sans, Montserrat } from "next/font/google";
import { cn } from "@/utils/cn";

// Define fonts
const headingFont = Philosopher({
  subsets: ["latin"],
  weight: ["700"],
});

const subheadingFont = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
});

const paragraphFont = Open_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

function HeroSection() {
  return (
    <>
      {/* Mobile View */}
      <div className="block md:hidden h-auto w-full relative overflow-hidden bg-black text-center pt-20">
        {/* Background Image */}
        <Image
          src={HeroSmallBack}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute inset-0 z-[1]"
        />
        {/* Translucent Mask */}
        <div className="absolute inset-0 bg-black opacity-50 z-[2]" />
        {/* Content */}
        <div className="relative z-10 px-6 py-12">
          <h1
            className={cn(
              "text-3xl font-bold text-yellow-400 mb-4",
              headingFont.className
            )}
          >
            Monica Kapoor
          </h1>
          <p
            className={cn(
              "text-base text-yellow-400 font-semibold mb-6",
              subheadingFont.className
            )}
          >
            Tarot | Numerology | Psychic Expert | Emotional Psychology Expert |
            Life Coach
          </p>
          <p
            className={cn(
              "text-sm text-white font-normal mb-4",
              paragraphFont.className
            )}
          >
            Monica Kapoor is a life coach specializing in Tarot Reading,
            Numerology, and spiritual guidance. With deep intuitive insights
            and profound spiritual knowledge, she empowers individuals to
            overcome challenges, find clarity, and embrace success in love,
            career, and life.
          </p>
          <p
            className={cn(
              "text-sm text-white font-normal mb-4",
              paragraphFont.className
            )}
          >
            Book a transformation session with Monica Kapoor and begin your
            journey with an empty jar. Fill it with divine guidance and positive
            moments, and watch as life unfolds into the amazing miracles you
            have always dreamed of.
          </p>
          <Link href={"/about"}>
            <button className="text-sm px-6 py-3 bg-orange-500 hover:bg-white text-white hover:text-green-300 font-semibold rounded-lg transition duration-300">
              About Me
            </button>
          </Link>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex h-auto md:h-[50rem] w-full rounded-md flex-col px-12 pr-44 md:flex-row items-center justify-between relative overflow-hidden mx-auto py-10 md:py-0">
        {/* Background Image */}
        <div className="absolute inset-0 z-[1]">
          <Image
            src={MainHeroBack}
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>

        {/* Translucent Mask */}
        <div className="absolute inset-0 z-[2] bg-black opacity-50"></div>

        {/* Content Section */}
        <div className="p-4 relative z-10 w-full md:w-1/2 text-left">
          {/* Heading */}
          <h1
            className={cn(
              "mt-20 md:mt-20 text-5xl md:text-7xl text-nowrap font-bold text-yellow-400",
              headingFont.className
            )}
          >
            Monica Kapoor
          </h1>

          {/* Subheading */}
          <p
            className={cn(
              "mt-8 font-bold text-center text-nowrap text-base md:text-lg text-yellow-400 max-w-lg",
              subheadingFont.className
            )}
          >
            Tarot | Numerology | Psychic Expert | Emotional Psychology Expert |
            Life Coach
          </p>

          {/* Paragraph */}
          <p
            className={cn(
              "mt-4 font-normal text-start text-nowrap text-base md:text-sm text-white max-w-lg",
              paragraphFont.className
            )}
          >
            Monica Kapoor is a life coach specializing in Tarot Reading,
            Numerology, and spiritual guidance.
            <br /> With deep intuitive insights and profound spiritual
            knowledge, she empowers individuals
            <br /> to overcome challenges, find clarity, and embrace success in
            love, career, and life.
          </p>
          <p
            className={cn(
              "mt-4 font-normal text-start text-nowrap text-base md:text-sm text-white max-w-lg",
              paragraphFont.className
            )}
          >
            Book a transformation session with Monica Kapoor and begin your
            journey with an empty jar.
            <br />
            Fill it with divine guidance and positive moments, and watch as
            life unfolds into the <br /> amazing miracles you have always
            dreamed of.
          </p>

          {/* Button */}
          <div className="mt-6">
            <Link href={"/about"}>
              <button className="text-sm w-auto px-6 py-3 bg-orange-500 hover:bg-white text-white hover:text-green-300 font-semibold rounded-lg transition duration-300">
                About Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;