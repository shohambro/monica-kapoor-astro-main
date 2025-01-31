"use client";

import { cn } from "@/utils/cn";
import Image from "next/image";
import React, { useEffect, useState, useCallback } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
    image?: string; // Added image field
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  const addAnimation = useCallback(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      if (containerRef.current) {
        containerRef.current.style.setProperty(
          "--animation-direction",
          direction === "left" ? "forwards" : "reverse"
        );

        const duration =
          speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
        containerRef.current.style.setProperty("--animation-duration", duration);
      }

      setStart(true);
    }
  }, [direction, speed]);

  useEffect(() => {
    addAnimation();
  }, [addAnimation]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
          className="w-[350px] md:w-[450px] h-[500px] flex flex-col justify-between items-center relative rounded-2xl shadow-lg border-slate-700 px-8 py-6"
          style={{
            background: "white",
          }}
            key={idx}
          >
            <blockquote className="flex flex-col justify-between items-center text-center h-full">
  {/* Image Section */}
  {item.image && (
    <Image 
      src={item.image} 
      alt={item.name} 
      width={170} 
      height={170} 
      className="rounded-full object-cover mx-auto mb-4"
    />
  )}

  {/* Quote Section (Text Resizes to Fit) */}
  <div className="flex-grow px-4 overflow-hidden text-ellipsis border-b border-[#6a1818] ">
    <span className="relative z-20 h-[300px] text-xs sm:text-sm md:text-base text-wrap text-[#6a1818] font-normal">
      {item.quote}
    </span>
  </div>

  {/* Name & Title (Fixed at Bottom) */}
  <div className="w-full pt-4">
    <span className="block text-xs sm:text-sm md:text-base leading-[1.6] text-[#6a1818] font-bold">
      {item.name}
    </span>
    <span className="block text-xs sm:text-sm md:text-base leading-[1.6] text-[#6a1818] font-normal">
      {item.title}
    </span>
  </div>
</blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
