'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, MessageCircle, Instagram, Check, ExternalLink, Dumbbell, Shield, ShieldAlert, Sparkles, Map } from 'lucide-react';
import { BRANCHES_DATA } from '@/lib/data';

export default function BranchesPage() {
  const [selectedBranch, setSelectedBranch] = useState(BRANCHES_DATA[0].id);

  const activeBranch = BRANCHES_DATA.find((b) => b.id === selectedBranch) || BRANCHES_DATA[0];

  // Specific local image seeds to represent different premium setups for each branch
  const branchImages: Record<string, { main: string; gallery: string[] }> = {
    chembur: {
      main: 'https://picsum.photos/seed/chemburmain/800/600',
      gallery: [
        'https://picsum.photos/seed/chembur1/500/400',
        'https://picsum.photos/seed/chembur2/500/400',
        'https://picsum.photos/seed/chembur3/500/400',
      ],
    },
    bhandup: {
      main: 'https://picsum.photos/seed/bhandupmain/800/600',
      gallery: [
        'https://picsum.photos/seed/bhandup1/500/400',
        'https://picsum.photos/seed/bhandup2/500/400',
        'https://picsum.photos/seed/bhandup3/500/400',
      ],
    },
    sanpada: {
      main: 'https://picsum.photos/seed/sanpadamain/800/600',
      gallery: [
        'https://picsum.photos/seed/sanpada1/500/400',
        'https://picsum.photos/seed/sanpada2/500/400',
        'https://picsum.photos/seed/sanpada3/500/400',
      ],
    },
    dadar: {
      main: 'https://picsum.photos/seed/dadarmain/800/600',
      gallery: [
        'https://picsum.photos/seed/dadar1/500/400',
        'https://picsum.photos/seed/dadar2/500/400',
        'https://picsum.photos/seed/dadar3/500/400',
      ],
    },
    mulund: {
      main: 'https://picsum.photos/seed/mulundmain/800/600',
      gallery: [
        'https://picsum.photos/seed/mulund1/500/400',
        'https://picsum.photos/seed/mulund2/500/400',
        'https://picsum.photos/seed/mulund3/500/400',
      ],
    },
  };

  const activeImages = branchImages[activeBranch.id] || branchImages.chembur;

  return (
    <div className="bg-[#050505] text-white min-h-screen relative overflow-hidden pb-24">
      {/* Background radial gradients */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 10%, #D4AF37 0%, transparent 40%), radial-gradient(circle at 90% 80%, #151515 0%, transparent 50%)' }}></div>

      {/* Hero Block */}
      <section className="relative z-10 pt-20 pb-12 text-center max-w-4xl mx-auto px-4">
        <span className="text-gold-500 font-mono tracking-widest uppercase text-xs px-3 py-1 border border-gold-500/30 rounded-full inline-block bg-neutral-900/50">
          5 FRIENDLY GYM LOCATIONS
        </span>
        <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none mt-4 mb-6">
          Our Gym Locations <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gold-500/50">in Mumbai</span>
        </h1>
        <p className="text-neutral-400 text-sm max-w-xl mx-auto leading-relaxed">
          Choose an Image Fitness gym near you to see our modern equipment, changing rooms, location maps, and direct contact details.
        </p>
      </section>

      {/* Branch Selector Tabs */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex justify-start sm:justify-center gap-2 md:gap-4 overflow-x-auto pb-4 scrollbar-none px-4 sm:px-0">
          {BRANCHES_DATA.map((b) => {
            const isSelected = b.id === selectedBranch;
            return (
              <button
                key={b.id}
                onClick={() => setSelectedBranch(b.id)}
                className={`px-6 py-3 rounded-full text-xs font-mono tracking-widest uppercase whitespace-nowrap transition-all duration-300 ${
                  isSelected
                    ? 'bg-gold-500 text-black font-black shadow-lg shadow-gold-500/20'
                    : 'bg-neutral-900/80 text-neutral-400 hover:text-white border border-white/5'
                }`}
              >
                {b.name}
              </button>
            );
          })}
        </div>
      </section>

      {/* Main Branch Information Detail Screen */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeBranch.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12"
          >
            {/* Left Hand Card details (Contact, Map, Highlights) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="p-8 rounded-3xl bg-neutral-900/50 border border-white/10 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-gold-500/10 border border-gold-500/30 text-[9px] uppercase font-mono tracking-widest text-gold-500 mb-3">
                    <Sparkles className="w-3 h-3" />
                    FRIENDLY GYM LOCATION
                  </div>
                  <h2 className="text-4xl font-black uppercase tracking-tight text-white font-display">
                    Image Fitness {activeBranch.name}
                  </h2>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded bg-neutral-950 border border-white/5 text-gold-500 shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono uppercase text-neutral-500">Gym Address</p>
                      <p className="text-xs text-neutral-300 mt-0.5 font-sans leading-relaxed">{activeBranch.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded bg-neutral-950 border border-white/5 text-gold-500 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono uppercase text-neutral-500">Gym Phone Number</p>
                      <a href={`tel:${activeBranch.phone}`} className="text-sm font-bold text-white hover:text-gold-500 transition-colors mt-0.5 block">{activeBranch.phone}</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded bg-neutral-950 border border-white/5 text-gold-500 shrink-0">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono uppercase text-neutral-500">Instagram</p>
                      <a href={activeBranch.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-gold-400 hover:underline flex items-center gap-1 mt-0.5 font-mono">
                        @{activeBranch.instagram}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Facilities Highlights */}
                <div className="border-t border-white/10 pt-6">
                  <p className="text-xs font-mono uppercase tracking-widest text-gold-500 mb-4">Branch Highlights</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                    {activeBranch.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center gap-3 text-xs text-neutral-300">
                        <div className="w-2 h-2 rounded-full bg-gold-500 shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quick CTA Actions */}
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <a
                    href={`tel:${activeBranch.phone}`}
                    className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-neutral-950 border border-white/10 text-xs font-mono font-bold uppercase tracking-wider text-white hover:border-gold-500 hover:text-gold-400 transition-all"
                  >
                    <Phone className="w-4 h-4 text-gold-500" />
                    Call Desk
                  </a>
                  <a
                    href={activeBranch.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-950 border border-emerald-500/20 text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 hover:border-emerald-500/50 transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Right Hand Gallery & Map Embed */}
            <div className="lg:col-span-7 space-y-8">
              {/* Main Visual Frame */}
              <div className="relative rounded-3xl overflow-hidden aspect-[16/10] border border-white/10 bg-neutral-900 shadow-2xl">
                <Image
                  src={activeImages.main}
                  alt={`${activeBranch.name} gym interior`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover grayscale opacity-90 hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <div className="absolute top-4 left-4 bg-black/75 px-3 py-1.5 rounded text-[10px] font-mono uppercase text-gold-500 border border-white/5">
                  Our Gym Space
                </div>
              </div>

              {/* Dynamic Map embed iframe */}
              <div className="relative rounded-3xl overflow-hidden aspect-[16/7] border border-white/10 bg-neutral-950 shadow-xl group">
                <div className="absolute inset-0 opacity-40 grayscale invert transition-opacity duration-300 group-hover:opacity-60">
                  <iframe
                    title={`${activeBranch.name} location map`}
                    src={activeBranch.embedUrl}
                    className="w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 bg-neutral-950/95 backdrop-blur border border-white/10 p-4 rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-gold-500" />
                    <div>
                      <h4 className="text-xs font-bold text-white font-display">Navigate to {activeBranch.name}</h4>
                      <p className="text-[9px] text-neutral-400 font-mono mt-0.5">Click launcher to open in standard navigator</p>
                    </div>
                  </div>
                  <a
                    href={activeBranch.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded bg-gold-500 text-black text-[10px] font-mono font-bold uppercase hover:bg-white transition-colors"
                  >
                    Launch Google Maps
                  </a>
                </div>
              </div>

              {/* Branch Mini-Gallery Grid */}
              <div className="space-y-4">
                <h3 className="text-sm font-mono uppercase tracking-widest text-gold-500">Gym Facilities Gallery</h3>
                <div className="grid grid-cols-3 gap-4">
                  {activeImages.gallery.map((img, idx) => (
                    <div key={idx} className="relative rounded-xl overflow-hidden aspect-square border border-white/5 bg-neutral-900">
                      <Image
                        src={img}
                        alt={`${activeBranch.name} slot ${idx + 1}`}
                        fill
                        sizes="(max-width: 1024px) 33vw, 20vw"
                        className="object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-500"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Global Branches Meta Info Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 mt-16 border-t border-white/5">
        <div className="p-8 rounded-3xl bg-neutral-950 border border-gold-500/20 text-center max-w-4xl mx-auto space-y-6">
          <span className="text-gold-500 font-mono tracking-widest uppercase text-xs">
            MUMBAI HELPLINE SUPPORT
          </span>
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-white">
            Not sure which branch to choose?
          </h2>
          <p className="text-neutral-400 text-xs leading-relaxed max-w-2xl mx-auto">
            Our friendly gym team is here to help! We can guide you to the nearest branch that fits your goals and daily schedule.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="tel:+919833777710"
              className="px-8 py-3.5 bg-white text-black font-mono font-bold uppercase text-xs tracking-widest rounded-full hover:bg-gold-500 transition-colors"
            >
              Call Our Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
