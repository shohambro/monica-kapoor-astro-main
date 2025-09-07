import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';
import Image from 'next/image';
import MandalaLogo from "../../public/images/MandalaLogo.png";

interface TarotModalProps {
  onClose?: () => void;
  onRegister?: () => void;
}

const TarotModal: React.FC<TarotModalProps> = ({ onClose, onRegister }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenShown, setHasBeenShown] = useState(false);
  const [currentTagline, setCurrentTagline] = useState(0);
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 59, seconds: 59 });
  const [studentCount] = useState(Math.floor(Math.random() * 50) + 100);

  const taglines = [
    "Unlock the Mysteries of Tarot with Divine Guidance",
    "Transform Your Spiritual Journey Through Sacred Tarot Wisdom",
    "Discover Your Path with Ancient Tarot Knowledge"
  ];

  useEffect(() => {
    if (hasBeenShown) return;

    const delay = 2000;
    const timer = setTimeout(() => {
      if (!hasBeenShown) {
        setIsVisible(true);
        setHasBeenShown(true);
      }
    }, delay);

    // Exit intent detection
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasBeenShown) {
        setIsVisible(true);
        setHasBeenShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasBeenShown]);

  // Rotate taglines every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [taglines.length]);

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleClose = useCallback(() => {
    setIsVisible(false);
    onClose?.();
  }, [onClose]);

  const handleRegister = useCallback(() => {
    onRegister?.();
    handleClose();
  }, [onRegister, handleClose]);

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998]"
        onClick={handleClose}
        style={{ animation: 'fadeIn 0.3s ease-out' }}
      />
      
      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-[9999] p-4">
        <div 
          className="relative w-full max-w-lg md:w-[90%] lg:w-[500px] bg-gradient-to-br from-[#FFF8F0] via-white to-[#FFF8F0] rounded-2xl shadow-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
          style={{ animation: 'slideUp 0.4s ease-out' }}
        >
          {/* Subtle watermark background */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="w-full h-full bg-gradient-to-br from-purple-100 to-blue-100"></div>
          </div>
          
          {/* Animated sparkles */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="sparkle sparkle-1"></div>
            <div className="sparkle sparkle-2"></div>
            <div className="sparkle sparkle-3"></div>
            <div className="sparkle sparkle-4"></div>
          </div>

          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors z-10"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>

          {/* Content */}
          <div className="relative p-8 md:p-10 text-center">
            {/* Mandala Logo with glow */}
            <div className="mb-6 relative inline-block">
              <div 
                className="absolute inset-0 blur-xl"
                style={{ 
                  background: 'radial-gradient(circle, rgba(255, 215, 0, 0.3), transparent)',
                  animation: 'pulse 2s ease-in-out infinite'
                }}
              ></div>
              <div 
                className="w-24 h-24 md:w-28 md:h-28 mx-auto relative z-10 rounded-full flex items-center justify-center text-white text-2xl font-bold overflow-hidden"
                style={{ 
                  animation: 'float 3s ease-in-out infinite',
                  filter: 'drop-shadow(0 4px 6px rgba(255, 215, 0, 0.3))'
                }}
              >
                <Image src={MandalaLogo} alt="Mandala Logo" className="w-full h-full object-contain" />
              </div>
            </div>

            {/* Main Tagline */}
            <h2 
              className="text-2xl md:text-3xl font-serif bg-clip-text text-transparent mb-4"
              style={{ 
                background: 'linear-gradient(to right, #1a237e, #FFD700, #1a237e)',
                WebkitBackgroundClip: 'text',
                fontFamily: "'Playfair Display', serif",
                animation: 'fadeIn 0.3s ease-out'
              }}
            >
              {taglines[currentTagline]}
            </h2>

            {/* Supporting Text */}
            <p className="text-sm md:text-base text-gray-700 mb-6 font-sans leading-relaxed">
  Guided by Guruji&apos;s blessings, start your Tarot journey today. 
  Classes open for students worldwide.
</p>

            {/* Urgency - Countdown */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-3 mb-6 border border-yellow-200">
              <p className="text-sm font-semibold text-red-700 mb-2">
                ⏰ Registration Open for Limited Seats – Join Now!
              </p>
              <div className="flex justify-center gap-4 text-blue-900 font-bold">
                <div className="text-center">
                  <div className="text-xl md:text-2xl">{String(timeLeft.hours).padStart(2, '0')}</div>
                  <div className="text-xs uppercase">Hours</div>
                </div>
                <div className="text-xl md:text-2xl">:</div>
                <div className="text-center">
                  <div className="text-xl md:text-2xl">{String(timeLeft.minutes).padStart(2, '0')}</div>
                  <div className="text-xs uppercase">Minutes</div>
                </div>
                <div className="text-xl md:text-2xl">:</div>
                <div className="text-center">
                  <div className="text-xl md:text-2xl">{String(timeLeft.seconds).padStart(2, '0')}</div>
                  <div className="text-xs uppercase">Seconds</div>
                </div>
              </div>
            </div>

            {/* Social Proof */}
            <p className="text-sm text-gray-600 mb-6 font-medium">
              ✨ Join {studentCount}+ students already transforming their Tarot journey!
            </p>

            {/* CTA Button */}
            <Link href="/appointments" onClick={handleRegister}>
              <button
                className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 text-blue-900 font-bold text-lg rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">Register Now – Join the Tarot Journey</span>
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"
                ></div>
              </button>
            </Link>

            {/* Trust Badge */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-xs text-gray-500">
  🙏 Blessed by Guruji&apos;s Divine Guidance | 100% Authentic Spiritual Teaching
</p>
            </div>
          </div>
        </div>
      </div>

      {/* Embedded Styles */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Cinzel:wght@400;600&display=swap');
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        
        .sparkle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: radial-gradient(circle, #FFD700, transparent);
          border-radius: 50%;
          animation: sparkle 3s linear infinite;
        }
        
        .sparkle-1 {
          top: 20%;
          left: 10%;
          animation-delay: 0s;
        }
        
        .sparkle-2 {
          top: 60%;
          right: 15%;
          animation-delay: 1s;
        }
        
        .sparkle-3 {
          bottom: 30%;
          left: 20%;
          animation-delay: 2s;
        }
        
        .sparkle-4 {
          top: 40%;
          right: 25%;
          animation-delay: 1.5s;
        }
        
        @keyframes sparkle {
          0%, 100% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </>
  );
};

export default TarotModal;
