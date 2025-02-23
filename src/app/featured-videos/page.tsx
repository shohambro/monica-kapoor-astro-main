'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Philosopher, Open_Sans } from 'next/font/google';

const philosopher = Philosopher({
  subsets: ['latin'],
  weight: ['700'],
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400'],
});

function FeaturedVideosPage() {
  const videos = [
    { link: 'https://www.youtube.com/shorts/YJoNemyS8hI', title: 'Strengthen your long distance relationship with these remedies 🕉️✨' },
    { link: 'https://www.youtube.com/shorts/LJhNRbHWIY0', title: 'Long Distance - Part 2' },
    { link: 'https://www.youtube.com/shorts/Uleg3AZ_vok', title: 'Nazar Kaise Utare?' },
    { link: 'https://www.youtube.com/shorts/kftiPzfBn_g', title: 'Nazar - Part 2' },
    { link: 'https://www.youtube.com/shorts/ZDUd3U576QI', title: 'हर हर महादेव 🙌🕉 (Part-1)' },
    { link: 'https://www.youtube.com/shorts/AhIxXrLpvyU', title: 'Har Har Mahadev 🕉️✨ (Part-2)' },
    { link: 'https://www.youtube.com/shorts/o2s_iOFjUPw', title: 'How to boost your energy levels?' },
    { link: 'https://www.youtube.com/shorts/kqnpyq79E0A', title: '🚀 2025: Manifest Your Inner Warrior 💪' },
    { link: 'https://www.youtube.com/shorts/2oEGa9n2QX0', title: 'Unstoppable: The Power of Self-Confidence' },
    { link: 'https://www.youtube.com/shorts/cQt2XvF6N4E', title: 'Key to Succesful Relationships' },
    { link: 'https://www.youtube.com/shorts/igKYLPthrG8', title: 'Unlock Your Financial Freedom with Astrological Remedies 🌟' },
    { link: 'https://www.youtube.com/shorts/63mmhI05qKg', title: 'Astrological Insights for Starting a Successful Business 🌟' },
    { link: 'https://www.youtube.com/shorts/cCbiv_aD76E', title: 'The Power of Listening: A Cure for Todays Problems' },
    { link: 'https://www.youtube.com/shorts/L_YFM8N2K-A', title: 'When Life Feels Heavy: Finding Strength to Move Forward 🌟' },
    { link: 'https://www.youtube.com/shorts/YmwnS6Xyk7U', title: 'It is Never Too Late to Start Fresh 🌟' },
    { link: 'https://www.youtube.com/shorts/eG3OrPOkd1Q', title: 'Your Astrological Edge in the Share Market 🌟' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 to-orange-500 py-12 pt-36">
      <h1 className={`${philosopher.className} text-lg md:text-6xl text-center font-bold mb-20 text-[#6a1818]`}>
        Featured Videos and Clips
      </h1>
{/* Top Card */}
<div className="flex justify-center mb-12">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden w-full max-w-xl transform hover:scale-105 transition-all duration-300">
          <Image
            src="/images/Podcast1.jpg" // Replace this with the actual image path
            alt="Owner's Channel"
            width={960}
            height={400}
            className="w-full h-76 object-cover"
          />
          <div className="p-4 text-center">
            <h2
              className={`${philosopher.className} text-3xl font-bold text-gray-800 dark:text-white mb-4`}
            >
              Heal with Mother Universe - Monica Kapoor
            </h2>
            <p
              className={`${openSans.className} text-gray-600 dark:text-gray-300 text-sm mb-6`}
            >
              Explore transformative healing videos and life-changing clips by Monica Kapoor.
            </p>
            <Link href="https://www.youtube.com/@healwithmotheruniverse">
              <button className="py-2 px-6 bg-orange-500 hover:bg-red-600 text-white font-semibold rounded-lg transition duration-300">
                Follow on YouTube
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-6 mb-12">
  {/* Card 1 */}
  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden w-full max-w-md transform hover:scale-105 transition-all duration-300">
    <Image
      src="/images/YT8.jpg"
      alt="Featured Video 1"
      width={720}
      height={400}
      className="w-full h-64 object-cover"
    />
    <div className="p-6 text-center">
      <h2 className={`${philosopher.className} text-3xl font-bold text-gray-800 dark:text-white mb-4`}>
        Secrets for 2025 Success | Manifest Money, Love Marriage & Growth in 2025 | Manifest With Bijay
      </h2>
      <Link href="https://www.youtube.com/watch?v=JZf7OEhYltg">
        <button className="py-2 px-6 bg-orange-500 hover:bg-red-600 text-white font-semibold rounded-lg transition duration-300">
          Watch on YouTube
        </button>
      </Link>
    </div>
  </div>

  {/* Card 2 */}
  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden w-full max-w-md transform hover:scale-105 transition-all duration-300">
    <Image
      src="/images/PodcastH2H.png" 
      alt="Featured Video 2"
      width={720}
      height={400}
      className="w-full h-64 object-cover"
    />
    <div className="p-6 text-center">
      <h2 className={`${philosopher.className} text-3xl font-bold text-gray-800 dark:text-white mb-4`}>
        🌟 Astrology and Numerology : All Secrets Revealed Ft Monica Kapoor | H2H Conversations
      </h2>
      <Link href="https://www.youtube.com/watch?v=7922yuQ2GTY">
        <button className="py-2 px-6 bg-orange-500 hover:bg-red-600 text-white font-semibold rounded-lg transition duration-300">
          Watch on YouTube
        </button>
      </Link>
    </div>
  </div>

  {/* Card 3 */}
  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden w-full max-w-md transform hover:scale-105 transition-all duration-300">
    <Image
      src="/images/Podcast3.jpg" 
      alt="Featured Video 2"
      width={720}
      height={400}
      className="w-full h-64 object-cover"
    />
    <div className="p-6 text-center">
      <h2 className={`${philosopher.className} text-3xl font-bold text-gray-800 dark:text-white mb-4`}>
      MIND-BLOWING Mahashivratri Secrets Revealed | Full Puja Method & Remedies
      </h2>
      <Link href="https://www.youtube.com/watch?v=q_EP-7H_5yE">
        <button className="py-2 px-6 bg-orange-500 hover:bg-red-600 text-white font-semibold rounded-lg transition duration-300">
          Watch on YouTube
        </button>
      </Link>
    </div>
  </div>
</div>

      

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-8">
        {videos.map((video, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 flex flex-col"
          >
            <Image
              src="/images/AS1.jpg"
              alt={video.title}
              width={320}
              height={200}
              className="w-full h-48 object-cover rounded-t-2xl"
            />
            <div className="p-6 flex-grow">
              <h2 className={`${philosopher.className} text-xl font-bold text-gray-800 dark:text-white mb-4`}>
                {video.title}
              </h2>
            </div>
            <Link href={video.link}>
              <button className="w-full py-2 bg-orange-500 hover:bg-red-600 text-white font-semibold rounded-b-2xl">
                Watch on YouTube
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedVideosPage;
