"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Instagram } from "lucide-react";

const sitemapLinks = [
  { name: "Home", href: "/" },
  { name: "Our Team", href: "#team" },
  { name: "Events", href: "#events" },
];

const socialLinks = [
  { name: "gdg.mpstme", href: "https://instagram.com/gdg.mpstme", icon: "instagram" },
  { name: "gdg.mpstme", href: "https://instagram.com/gdg.mpstme", icon: "instagram" },
  { name: "GDG On Campus MPSTME", href: "https://linkedin.com", icon: "linkedin" },
  { name: "gdfsdf", href: "https://twitter.com", icon: "twitter" },
];

const contactLinks = [
  { name: "contact@mpstme.dev", href: "mailto:contact@mpstme.dev", icon: "email" },
];

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5 py-10 sm:py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Sitemap */}
          <div>
            <h3 className="text-[10px] sm:text-xs md:text-sm font-bold text-white uppercase tracking-wider mb-3 sm:mb-4 md:mb-5">
              SITEMAP
            </h3>
            <ul className="space-y-2 sm:space-y-2.5 md:space-y-3">
              {sitemapLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[11px] sm:text-xs md:text-sm text-gray-500 hover:text-white transition-colors duration-200 flex items-center gap-1 sm:gap-1.5"
                  >
                    <ArrowUpRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 flex-shrink-0" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-[10px] sm:text-xs md:text-sm font-bold text-white uppercase tracking-wider mb-3 sm:mb-4 md:mb-5">
              SOCIALS
            </h3>
            <ul className="space-y-2 sm:space-y-2.5 md:space-y-3">
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] sm:text-xs md:text-sm text-gray-500 hover:text-white transition-colors duration-200 flex items-center gap-1 sm:gap-1.5"
                  >
                    {link.icon === "instagram" && <Instagram className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 flex-shrink-0" />}
                    {link.icon === "linkedin" && (
                      <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    )}
                    {link.icon === "twitter" && (
                      <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    )}
                    <span className="truncate">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 sm:col-span-1">
            <h3 className="text-[10px] sm:text-xs md:text-sm font-bold text-white uppercase tracking-wider mb-3 sm:mb-4 md:mb-5">
              CONTACT
            </h3>
            <ul className="space-y-2 sm:space-y-2.5 md:space-y-3">
              {contactLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[11px] sm:text-xs md:text-sm text-gray-500 hover:text-white transition-colors duration-200 flex items-center gap-1 sm:gap-1.5"
                  >
                    <Mail className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 flex-shrink-0" />
                    <span className="truncate">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
