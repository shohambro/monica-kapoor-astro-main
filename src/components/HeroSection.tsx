import Link from "next/link";
import Image from "next/image";
import ProfilePicture from "../../public/images/ProfilePicture.jpg";
import HeroBack2 from "../../public/images/HeroBack2.jpg";
import GuruJi from "../../public/images/GuruJiPic.jpg";

function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col px-12 pr-44 md:flex-row items-center justify-between relative overflow-hidden mx-auto py-10 md:py-0">
      {/* Background Image */}
      <div className="absolute inset-0 z-[1]">
        <Image
          src={HeroBack2}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      {/* GuruJi Image */}
      <div className="absolute right-10 top-2 z-[1000]">
        <Image
          src={GuruJi}
          alt="Guru Ji"
          height={120}
          className="rounded-full"
          quality={100}
        />
      </div>

      {/* Profile Picture */}
      <div className="absolute left-10 top-5 z-[1000] rounded-full border-2">
        <Image
          src={ProfilePicture}
          alt="Profile Picture"
          height={60}
          width={80}
          quality={100}
        />
      </div>

      {/* Translucent Mask */}
      <div className="absolute inset-0 z-[2] bg-black opacity-60"></div>

      {/* Content Section */}
      <div className="p-4 relative z-10 w-full md:w-1/2 text-left">
        <h1 className="mt-20 md:mt-20 text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-white">
          Monica Kapoor
        </h1>
        <p className="mt-8 font-normal text-center text-nowrap text-base md:text-lg text-[white] max-w-lg">
          Tarot | Numerology | Psychic Expert | Emotional Psychology Expert |
          Life Coach
        </p>
        <p className="mt-4 font-normal text-center text-nowrap text-base md:text-sm text-[white] max-w-lg">
          Monica Kapoor is a life coach specializing in Tarot Reading,
          Numerology, and spiritual guidance.
          <br /> With deep intuitive insights and profound spiritual knowledge,
          she empowers individuals
          <br /> to overcome challenges, find clarity, and embrace success in
          love, career, and life.
          <br /> Her compassionate approach inspires confidence and motivation
          for a brighter, abundant future.
        </p>
        <p className="mt-4 font-normal text-center text-nowrap text-base md:text-sm text-[white] max-w-lg">
          Book a transformation session with Monica Kapoor and begin your
          journey with an empty jar.
          <br />
          Fill it with divine guidance and positive moments,
          and watch as life unfolds into the amazing miracles you have always
          dreamed of.
        </p>
        <div className="mt-6">
          <Link href={"/about"}>
            <button className="text-sm w-auto px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white hover:text-green-300 font-semibold rounded-lg transition duration-300">
              About Me
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
