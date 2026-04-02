"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/news", label: "News & Articles" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 100], [0.5, 0.9]);
  const blur = useTransform(scrollY, [0, 100], [12, 24]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-espx-cyan/5"
      style={{
        backgroundColor: useTransform(bgOpacity, (v) => `rgba(10, 22, 40, ${v})`),
        backdropFilter: useTransform(blur, (v) => `blur(${v}px)`),
      }}
    >
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Image
              src="/images/ESPXGlobal-logo-245x110.png"
              alt="ESPX Global"
              width={140}
              height={63}
              priority
              className="group-hover:brightness-125 transition-all duration-300"
            />
          </motion.div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link text-sm font-medium tracking-wide uppercase transition-colors duration-300 ${
                pathname === link.href
                  ? "text-espx-cyan"
                  : "text-gray-400 hover:text-espx-cyan"
              }`}
            >
              <motion.span
                whileHover={{ y: -1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="inline-block"
              >
                {link.label}
              </motion.span>
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 relative z-50"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="block w-6 h-0.5 bg-espx-cyan"
          />
          <motion.span
            animate={isOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className="block w-6 h-0.5 bg-espx-cyan"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="block w-6 h-0.5 bg-espx-cyan"
          />
        </button>
      </div>

      {/* Featured Article Banner */}
      <Link
        href="/images/publications/ESPX%20Global_Energy%20Storage_PUF%20article_April%202026.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-gradient-to-r from-espx-navy-light/95 via-espx-teal-dark/40 to-espx-navy-light/95 border-t border-espx-cyan/10 hover:border-espx-cyan/30 transition-all duration-300 group"
      >
        <div className="mx-auto max-w-7xl px-6 py-2 flex items-center justify-center gap-4 flex-wrap">
          <span className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-espx-cyan opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-espx-cyan" />
            </span>
            <span className="text-xs font-semibold text-espx-cyan uppercase tracking-wider">
              New Article
            </span>
          </span>
          <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
            <span className="font-medium">PUBLIC UTILITIES FORTNIGHTLY:</span>{" "}
            Utility Scale Energy Storage
          </span>
          <svg
            className="w-4 h-4 text-espx-cyan group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </Link>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, height: "auto", filter: "blur(0px)" }}
            exit={{ opacity: 0, height: 0, filter: "blur(10px)" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-t border-espx-cyan/10"
            style={{ background: "rgba(10, 22, 40, 0.95)", backdropFilter: "blur(24px)" }}
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-medium tracking-wide transition-colors ${
                      pathname === link.href
                        ? "text-espx-cyan"
                        : "text-gray-300 hover:text-espx-cyan"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
