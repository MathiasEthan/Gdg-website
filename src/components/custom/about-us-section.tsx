"use client";

import { motion } from "framer-motion";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

// Card Header Components with 3D-style illustrations

// Google-style logo icons for "What is GDG"
const WhatIsGDGHeader = () => (
  <div className="flex h-full min-h-[6rem] w-full items-center justify-center rounded-xl bg-transparent overflow-hidden">
    <div className="flex items-center gap-2">
      {/* Blue diamond shape */}
      <svg width="60" height="60" viewBox="0 0 60 60" className="drop-shadow-lg">
        <polygon points="30,5 55,30 30,55 5,30" fill="#4285F4" />
        <polygon points="30,15 45,30 30,45 15,30" fill="#5A9BF6" />
      </svg>
      {/* Green arrow */}
      <svg width="60" height="50" viewBox="0 0 60 50" className="drop-shadow-lg">
        <path d="M5,25 L45,25 L45,15 L55,25 L45,35 L45,25" fill="#34A853" stroke="#2D9248" strokeWidth="2" />
      </svg>
    </div>
  </div>
);

// 3D Book illustration for "How We Learn"
const HowWeLearnHeader = () => (
  <div className="flex h-full min-h-[6rem] w-full items-center justify-center rounded-xl bg-transparent">
    <motion.div
      animate={{ y: [0, -5, 0] }}
      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
    >
      <svg width="80" height="70" viewBox="0 0 80 70" className="drop-shadow-xl">
        {/* Book base */}
        <path d="M10,55 L40,45 L70,55 L70,15 L40,5 L10,15 Z" fill="#F5E6D3" stroke="#D4C4B0" strokeWidth="2" />
        {/* Left page */}
        <path d="M10,15 L40,5 L40,45 L10,55 Z" fill="#FFF8F0" />
        {/* Right page */}
        <path d="M40,5 L70,15 L70,55 L40,45 Z" fill="#F5E6D3" />
        {/* Page lines */}
        <line x1="15" y1="25" x2="35" y2="18" stroke="#D4C4B0" strokeWidth="1" />
        <line x1="15" y1="32" x2="35" y2="25" stroke="#D4C4B0" strokeWidth="1" />
        <line x1="15" y1="39" x2="35" y2="32" stroke="#D4C4B0" strokeWidth="1" />
        <line x1="45" y1="18" x2="65" y2="25" stroke="#D4C4B0" strokeWidth="1" />
        <line x1="45" y1="25" x2="65" y2="32" stroke="#D4C4B0" strokeWidth="1" />
        {/* Bookmark */}
        <path d="M38,5 L38,20 L40,18 L42,20 L42,5" fill="#EA4335" />
      </svg>
    </motion.div>
  </div>
);

// Students with trophy for "Who We're For"
const WhoWeAreForHeader = () => (
  <div className="flex h-full min-h-[6rem] w-full items-center justify-center rounded-xl bg-transparent">
    <motion.div
      animate={{ scale: [1, 1.02, 1] }}
      transition={{ repeat: Infinity, duration: 2 }}
    >
      <svg width="90" height="70" viewBox="0 0 90 70" className="drop-shadow-xl">
        {/* Trophy */}
        <path d="M45,15 L35,15 L33,25 L37,35 L42,40 L48,40 L53,35 L57,25 L55,15 Z" fill="#FFD700" stroke="#DAA520" strokeWidth="1" />
        <rect x="40" y="40" width="10" height="8" fill="#DAA520" />
        <rect x="35" y="48" width="20" height="5" rx="2" fill="#8B4513" />
        {/* Left person */}
        <circle cx="20" cy="35" r="8" fill="#FFB6C1" />
        <path d="M12,70 L12,50 Q20,45 28,50 L28,70" fill="#4285F4" />
        {/* Right person */}
        <circle cx="70" cy="35" r="8" fill="#DEB887" />
        <path d="M62,70 L62,50 Q70,45 78,50 L78,70" fill="#34A853" />
        {/* Star on trophy */}
        <polygon points="45,20 46.5,24 51,24 47.5,27 49,31 45,28 41,31 42.5,27 39,24 43.5,24" fill="#FFF" />
      </svg>
    </motion.div>
  </div>
);

// Devices/screens for "What We Do"
const WhatWeDoHeader = () => (
  <div className="flex h-full min-h-[6rem] w-full items-center justify-center rounded-xl bg-transparent">
    <motion.div
      animate={{ rotate: [0, 2, 0, -2, 0] }}
      transition={{ repeat: Infinity, duration: 4 }}
    >
      <svg width="100" height="70" viewBox="0 0 100 70" className="drop-shadow-xl">
        {/* Monitor */}
        <rect x="25" y="5" width="50" height="35" rx="3" fill="#333" stroke="#555" strokeWidth="2" />
        <rect x="28" y="8" width="44" height="26" fill="#1a1a2e" />
        <rect x="40" y="40" width="20" height="5" fill="#555" />
        <rect x="35" y="45" width="30" height="3" rx="1" fill="#444" />
        {/* Screen content - grid */}
        <rect x="30" y="10" width="10" height="10" fill="#4285F4" rx="1" />
        <rect x="42" y="10" width="10" height="10" fill="#EA4335" rx="1" />
        <rect x="54" y="10" width="16" height="10" fill="#34A853" rx="1" />
        <rect x="30" y="22" width="40" height="3" fill="#FBBC05" rx="1" />
        <rect x="30" y="27" width="30" height="3" fill="#666" rx="1" />
        {/* Phone */}
        <rect x="5" y="20" width="18" height="35" rx="3" fill="#333" stroke="#555" strokeWidth="1" />
        <rect x="7" y="24" width="14" height="26" fill="#1a1a2e" />
        <circle cx="14" cy="52" r="2" fill="#555" />
        {/* Tablet */}
        <rect x="78" y="15" width="20" height="30" rx="2" fill="#333" stroke="#555" strokeWidth="1" />
        <rect x="80" y="18" width="16" height="24" fill="#1a1a2e" />
        {/* Pencil */}
        <rect x="75" y="50" width="25" height="6" rx="1" fill="#FBBC05" transform="rotate(-25 87 53)" />
        <polygon points="100,58 105,61 100,64" fill="#FFE4B5" transform="rotate(-25 87 53)" />
      </svg>
    </motion.div>
  </div>
);

// Lego blocks for "What We Build"
const WhatWeBuildHeader = () => (
  <div className="flex h-full min-h-[6rem] w-full items-center justify-center rounded-xl bg-transparent">
    <motion.div
      animate={{ y: [0, -3, 0] }}
      transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
    >
      <svg width="80" height="65" viewBox="0 0 80 65" className="drop-shadow-xl">
        {/* Green block */}
        <rect x="5" y="30" width="30" height="25" rx="3" fill="#34A853" />
        <circle cx="12" cy="30" r="4" fill="#2D9248" />
        <circle cx="22" cy="30" r="4" fill="#2D9248" />
        {/* Red block */}
        <rect x="25" y="15" width="25" height="25" rx="3" fill="#EA4335" />
        <circle cx="32" cy="15" r="4" fill="#C5221F" />
        <circle cx="42" cy="15" r="4" fill="#C5221F" />
        {/* Yellow block */}
        <rect x="45" y="30" width="30" height="25" rx="3" fill="#FBBC05" />
        <circle cx="52" cy="30" r="4" fill="#F9A825" />
        <circle cx="62" cy="30" r="4" fill="#F9A825" />
        {/* Blue small block */}
        <rect x="55" y="5" width="20" height="20" rx="3" fill="#4285F4" />
        <circle cx="60" cy="5" r="3" fill="#3367D6" />
        <circle cx="70" cy="5" r="3" fill="#3367D6" />
      </svg>
    </motion.div>
  </div>
);

const items = [
  {
    title: "What is GDG On Campus",
    description: "GDG is a Google developer community focused on learning, collaboration, and real-world impact.",
    header: <WhatIsGDGHeader />,
    className: "md:col-span-2",
  },
  {
    title: "How We Learn",
    description: "Hands-on workshops, real projects, and shared knowledge.",
    header: <HowWeLearnHeader />,
    className: "",
  },
  {
    title: "Who We're For",
    description: "Students who are curious, motivated, and eager to grow in tech.",
    header: <WhoWeAreForHeader />,
    className: "",
  },
  {
    title: "What We Do",
    description: "Workshops, events, talks, and hands-on projects led by students.",
    header: <WhatWeDoHeader />,
    className: "",
  },
  {
    title: "What We Build",
    description: "Skills, projects, communities, and future-ready mindsets.",
    header: <WhatWeBuildHeader />,
    className: "",
  },
];

export default function AboutUsSection() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-24 lg:py-32 bg-[#050505]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.h2
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 sm:mb-8 md:mb-10 lg:mb-12"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Us
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <BentoGrid className="gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            {items.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                className={`bg-[#111] rounded-xl sm:rounded-2xl border border-white/5 hover:border-white/10 ${item.className}`}
              />
            ))}
          </BentoGrid>
        </motion.div>
      </div>
    </section>
  );
}
