'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sparkles, Phone, MessageCircle } from 'lucide-react';
import FreeTrialModal from './FreeTrialModal';
import Logo from './Logo';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [trialModalOpen, setTrialModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on path changes
  useEffect(() => {
    const timer = setTimeout(() => {
      setMobileMenuOpen(false);
    }, 0);
    return () => clearTimeout(timer);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Branches', href: '/branches' },
    { name: 'Memberships', href: '/memberships' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-neutral-950/90 border-b border-white/10 py-4 backdrop-blur-md'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo Brand Mark */}
          <Link href="/" className="flex items-center gap-1 group" aria-label="Image Fitness Home">
            <div className="transition-transform duration-300 group-hover:scale-105">
              <Logo width={160} height={50} className="w-[160px] h-[50px]" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-300">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative hover:text-gold-400 transition-colors py-2 ${
                    isActive ? 'text-gold-400' : 'text-neutral-300'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavLine"
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-gold-500"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Call To Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="tel:+919833777710"
              className="p-2.5 rounded-full border border-white/10 text-neutral-400 hover:text-white hover:border-white/20 transition-colors"
              title="Call Helpline"
            >
              <Phone className="w-4 h-4" />
            </Link>
            <button
              onClick={() => setTrialModalOpen(true)}
              className="px-6 py-2.5 bg-gold-500 text-black text-xs font-black uppercase tracking-widest rounded-full hover:bg-white hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Get Free Pass
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => setTrialModalOpen(true)}
              className="px-4 py-1.5 bg-gold-500 text-black text-[10px] font-black uppercase tracking-widest rounded-full"
            >
              Free Pass
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-gold-400 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full-screen Overlay Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#050505]/95 backdrop-blur-xl flex flex-col justify-between p-8 pt-28 md:hidden"
          >
            <div className="flex flex-col gap-6 text-center">
              {navLinks.map((link, idx) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={`text-2xl font-black uppercase tracking-widest ${
                        isActive ? 'text-gold-400' : 'text-white'
                      } hover:text-gold-400 transition-colors`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <div className="flex flex-col gap-4 items-center">
              <div className="w-full h-[1px] bg-white/10" />
              <p className="text-[10px] uppercase tracking-[0.2em] text-gold-500">
                Mumbai&apos;s Friendly Fitness Gym
              </p>
              <div className="flex gap-4">
                <a
                  href="tel:+919833777710"
                  className="flex items-center gap-2 px-5 py-3 rounded-full bg-neutral-900 border border-white/10 text-xs font-bold uppercase tracking-wider text-white"
                >
                  <Phone className="w-4 h-4 text-gold-500" />
                  Call Now
                </a>
                <a
                  href="https://wa.me/919833777710?text=Hi%20Image%20Fitness,%20I%20want%20to%20inquire%20about%20memberships."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-full bg-emerald-950 border border-emerald-500/20 text-xs font-bold uppercase tracking-wider text-emerald-400"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Embedded Free Trial Modal */}
      <FreeTrialModal isOpen={trialModalOpen} onClose={() => setTrialModalOpen(false)} />
    </>
  );
}
