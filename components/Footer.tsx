'use client';

import React from 'react';
import Link from 'next/link';
import { Instagram, Facebook, Youtube, Phone, Mail, MapPin } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#030303] text-neutral-400 py-16 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-1 group" aria-label="Image Fitness Home">
              <div className="transition-transform duration-300 group-hover:scale-105">
                <Logo width={160} height={50} className="w-[160px] h-[50px]" />
              </div>
            </Link>
            <p className="text-xs leading-relaxed text-neutral-500">
              Mumbai&apos;s friendly fitness gym with modern equipment, experienced trainers, and supportive programs to help you build strength and confidence.
            </p>
            <div className="flex gap-3 pt-2">
              {[
                { icon: Instagram, href: 'https://instagram.com/imagefitnessmumbai' },
                { icon: Facebook, href: 'https://facebook.com' },
                { icon: Youtube, href: 'https://youtube.com' }
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-neutral-900 border border-white/5 hover:border-gold-500 flex items-center justify-center text-neutral-400 hover:text-gold-500 transition-all"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="text-white text-xs font-black uppercase tracking-widest font-mono mb-6 border-l-2 border-gold-500 pl-3">
              Explore
            </h4>
            <ul className="space-y-3 text-xs">
              <li>
                <Link href="/" className="hover:text-gold-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gold-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/branches" className="hover:text-gold-400 transition-colors">Gym Locations</Link>
              </li>
              <li>
                <Link href="/memberships" className="hover:text-gold-400 transition-colors">Memberships</Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-gold-400 transition-colors">Photo Gallery</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold-400 transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Branch Network */}
          <div>
            <h4 className="text-white text-xs font-black uppercase tracking-widest font-mono mb-6 border-l-2 border-gold-500 pl-3">
              Mumbai Gyms
            </h4>
            <ul className="space-y-3 text-xs text-neutral-500">
              <li>
                <Link href="/branches" className="hover:text-white transition-colors">
                  <span className="font-bold text-neutral-300">Chembur:</span> Platinum Square, Diamond Garden
                </Link>
              </li>
              <li>
                <Link href="/branches" className="hover:text-white transition-colors">
                  <span className="font-bold text-neutral-300">Dadar:</span> Nakshatra Mall, Ranade Road
                </Link>
              </li>
              <li>
                <Link href="/branches" className="hover:text-white transition-colors">
                  <span className="font-bold text-neutral-300">Bhandup:</span> Filix Tower, LBS Marg West
                </Link>
              </li>
              <li>
                <Link href="/branches" className="hover:text-white transition-colors">
                  <span className="font-bold text-neutral-300">Mulund:</span> Devidayal Rd, Near J&J
                </Link>
              </li>
              <li>
                <Link href="/branches" className="hover:text-white transition-colors">
                  <span className="font-bold text-neutral-300">Sanpada:</span> Sector 16, Palm Beach Rd
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Main Office */}
          <div className="space-y-4">
            <h4 className="text-white text-xs font-black uppercase tracking-widest font-mono mb-6 border-l-2 border-gold-500 pl-3">
              HQ Helpline
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                <span>Platinum Square, Diamond Garden, Chembur, Mumbai - 400071</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-500 shrink-0" />
                <a href="tel:+919833777710" className="hover:text-gold-400 transition-colors">+91 98337 77710</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold-500 shrink-0" />
                <a href="mailto:membership@imagefitness.co.in" className="hover:text-gold-400 transition-colors">membership@imagefitness.co.in</a>
              </div>
            </div>
            <div className="pt-2 flex items-center gap-2">
              <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-emerald-400">Open 24/7 • All Branches</span>
            </div>
          </div>

        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
          <p>© {currentYear} Image Fitness Private Limited. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Gym Rules</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
