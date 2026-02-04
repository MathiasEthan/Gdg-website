"use client";

import PillNav from "@/components/PillNav";
import logo from "@/assets/react.svg";

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Projects",
    href: "#projects",
  },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center">
      <PillNav
        logo={logo}
        logoAlt="GDG Logo"
        items={navItems}
        baseColor="#0a0a0a"
        pillColor="#1a1a1a"
        hoveredPillTextColor="#ffffff"
        pillTextColor="#e5e5e5"
      />
    </header>
  );
}