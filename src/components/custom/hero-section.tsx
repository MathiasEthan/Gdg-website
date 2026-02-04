"use client";

import { motion } from "framer-motion";

// Sticker Image Component
interface StickerProps {
  src: string;
  alt: string;
  className?: string;
  rotation?: number;
  delay?: number;
  size?: string;
}

const StickerImage = ({ src, alt, className = "", rotation = 0, delay = 0, size = "w-24 h-24 md:w-32 md:h-32" }: StickerProps) => (
  <motion.div
    className={`absolute ${className}`}
    initial={{ opacity: 0, scale: 0.5, rotate: rotation - 10 }}
    animate={{ opacity: 1, scale: 1, rotate: rotation }}
    transition={{ duration: 0.6, delay, type: "spring", stiffness: 100 }}
    whileHover={{ scale: 1.1, rotate: rotation + 5 }}
  >
    <div className="relative group cursor-pointer">
      <img
        src={src}
        alt={alt}
        className={`${size} rounded-xl object-cover sticker-image border-2 border-white/10`}
      />
    </div>
  </motion.div>
);

// Scattered stickers surrounding the logo - 3 on top, 3 on bottom
const stickerImages = [
  // Top row - 3 images
  { src: "https://i.pravatar.cc/150?img=47", alt: "Member 1", className: "top-[8%] left-[5%] md:left-[12%] lg:left-[18%]", rotation: -8, delay: 0.1, size: "w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44" },
  { src: "https://i.pravatar.cc/150?img=12", alt: "Member 2", className: "top-[5%] left-1/2 -translate-x-1/2", rotation: 5, delay: 0.2, size: "w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44" },
  { src: "https://i.pravatar.cc/150?img=68", alt: "Member 3", className: "top-[8%] right-[5%] md:right-[12%] lg:right-[18%]", rotation: 10, delay: 0.3, size: "w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44" },
  // Bottom row - 3 images
  { src: "https://i.pravatar.cc/150?img=33", alt: "Member 4", className: "top-[52%] left-[5%] md:left-[12%] lg:left-[18%]", rotation: 12, delay: 0.4, size: "w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44" },
  { src: "https://i.pravatar.cc/150?img=59", alt: "Member 5", className: "top-[55%] left-1/2 -translate-x-1/2", rotation: -6, delay: 0.5, size: "w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44" },
  { src: "https://i.pravatar.cc/150?img=52", alt: "Member 6", className: "top-[52%] right-[5%] md:right-[12%] lg:right-[18%]", rotation: -10, delay: 0.6, size: "w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center overflow-hidden bg-[#050505] pt-16 md:pt-20 pb-12 md:pb-16">
      {/* Scattered Sticker Images */}
      {stickerImages.map((sticker, index) => (
        <StickerImage key={index} {...sticker} />
      ))}

      {/* Central Logo Section */}
      <motion.div
        className="relative z-10 text-center w-full max-w-5xl mx-auto px-4 sm:px-6 mt-40 sm:mt-48 md:mt-56 lg:mt-60"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Google Logo + Text Row */}
        <div className="flex items-center justify-center gap-2.5 sm:gap-3 md:gap-4 mb-2 md:mb-3">
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            <span style={{ color: '#4285F4' }}>G</span>
            <span style={{ color: '#EA4335' }}>o</span>
            <span style={{ color: '#FBBC05' }}>o</span>
            <span style={{ color: '#4285F4' }}>g</span>
            <span style={{ color: '#34A853' }}>l</span>
            <span style={{ color: '#EA4335' }}>e</span>
          </span>
          <div className="text-left">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-white leading-tight">Developers group</p>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-white leading-tight">On Campus</p>
          </div>
        </div>
        
        {/* College Name */}
        <p className="text-[10px] sm:text-xs md:text-sm lg:text-base font-bold tracking-[0.15em] md:tracking-widest uppercase" style={{ color: '#FBBC05' }}>
          SVKM'S NMIMS MPSTME
        </p>
      </motion.div>

      {/* Main Headline Section */}
      <motion.div
        className="relative z-10 text-center w-full max-w-5xl mx-auto px-4 sm:px-6 mt-44 sm:mt-52 md:mt-60 lg:mt-64"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mt-30 text-white mb-3 sm:mb-4 md:mb-6 leading-[1.2] tracking-tight">
          Building. Learning. Connecting.
        </h1>
        <p className="max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto text-gray-400 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
          GDG On Campus MPSTME is a student-driven community focused on technology,
          innovation, and collaboration through real-world learning and events.
        </p>
      </motion.div>
    </section>
  );
}
