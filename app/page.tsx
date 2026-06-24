'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import {
  Dumbbell, Award, Shield, Users, Sparkles, Flame, Activity, TrendingUp,
  ChevronRight, ChevronLeft, ArrowUpRight, MessageCircle, Phone, Quote
} from 'lucide-react';
import { WHY_US_DATA, FACILITIES_DATA, MEMBERSHIPS_DATA, BRANCHES_DATA, TESTIMONIALS_DATA } from '@/lib/data';
import FreeTrialModal from '@/components/FreeTrialModal';

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [trialModalOpen, setTrialModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  if (!mounted) return null;

  return (
    <div className="bg-[#050505] text-white min-h-screen relative overflow-hidden pb-12">
      {/* Background Radial Gradients */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 70% 30%, #D4AF37 0%, transparent 50%), radial-gradient(circle at 10% 80%, #151515 0%, transparent 60%)' }}></div>

      {/* --- HERO SECTION --- */}
      <section className="relative h-[700px] flex items-center justify-center px-4 py-[60px] text-center z-10">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900/80 border border-gold-500/40 text-[10px] font-mono tracking-[0.3em] text-gold-500 uppercase mb-8 backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-gold-500 animate-pulse" />
            Mumbai&apos;s Friendly Fitness Community
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1.0 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-white max-w-5xl leading-[0.9] mb-6"
          >
            Get Stronger. <span className="block text-white">Feel Better.</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gold-500/50">
              Reach Your Goals.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-xl mx-auto mb-10"
          >
            Train with modern equipment, experienced trainers, and a supportive fitness community. Build strength and confidence on your fitness journey.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 items-center justify-center mb-16 w-full max-w-2xl"
          >
            <button
              onClick={() => setTrialModalOpen(true)}
              className="w-full sm:w-auto px-10 py-5 bg-white text-black font-black uppercase text-xs tracking-widest rounded-sm hover:bg-gold-500 hover:text-black transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-xl font-mono"
            >
              Book Free Trial
            </button>
            <Link
              href="/branches"
              className="w-full sm:w-auto px-10 py-5 bg-transparent border border-gold-500 text-gold-500 font-black uppercase text-xs tracking-widest rounded-sm hover:bg-gold-500/10 transition-all duration-300 transform hover:scale-105 active:scale-95 font-mono"
            >
              Explore Branches
            </Link>
            
            <div className="hidden md:flex items-center gap-4 border-l-2 border-gold-500 pl-6 text-left">
              <span className="text-2xl font-black italic tracking-tighter text-white">5+ Branches</span>
              <span className="text-[10px] uppercase tracking-wider text-neutral-400 block w-24 leading-tight">Across Mumbai Metropolitan</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- WHY IMAGE FITNESS (BENTO LIST) --- */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-white/5">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold-500 font-mono tracking-widest uppercase text-xs">
            WHAT WE OFFER
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white mt-2">
            Why Image Fitness?
          </h2>
          <p className="text-neutral-400 text-sm mt-2">
            Everything you need to achieve your fitness goals in a friendly, motivating, and extremely clean environment.
          </p>
        </div>

        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory scrollbar-none pb-4 md:pb-0">
          {WHY_US_DATA.map((item, idx) => {
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="p-6 rounded-3xl bg-neutral-900/30 border border-white/5 hover:border-gold-500/20 transition-all group flex flex-col h-full min-w-[285px] sm:min-w-[340px] md:min-w-0 snap-center"
              >
                <div className="w-full aspect-square rounded-2xl overflow-hidden mb-6 bg-neutral-950 relative border border-white/5">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    priority={idx < 3}
                  />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gold-500 transition-colors">{item.title}</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* --- FACILITIES SECTION --- */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-white/5">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold-500 font-mono tracking-widest uppercase text-xs">
            OUR GYM SPACES
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white mt-2">
            Our Gym Facilities
          </h2>
        </div>

        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto sm:overflow-x-visible snap-x snap-mandatory scrollbar-none pb-4 sm:pb-0">
          {FACILITIES_DATA.map((facility, idx) => {
            return (
              <div
                key={idx}
                className="p-5 rounded-3xl bg-neutral-900/50 border border-white/5 hover:border-gold-500/20 transition-all group flex flex-col h-full min-w-[260px] sm:min-w-0 snap-center"
              >
                <div className="w-full aspect-square rounded-2xl overflow-hidden mb-4 bg-neutral-950 relative border border-white/5">
                  <Image
                    src={facility.image}
                    alt={facility.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2 group-hover:text-gold-500 transition-colors">{facility.name}</h4>
                <p className="text-xs text-neutral-400 leading-relaxed">{facility.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* --- MEMBERSHIPS HIGHLIGHTS --- */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-white/5">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold-500 font-mono tracking-widest uppercase text-xs">
            COMPREHENSIVE PLANS
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white mt-2">
            Membership Plans
          </h2>
          <p className="text-neutral-400 text-sm mt-2">
            Choose the best plan for your fitness goals. Perfect for anyone looking to get active and stay consistent.
          </p>
        </div>

        <div className="flex md:grid md:grid-cols-3 gap-6 md:gap-8 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory scrollbar-none pb-4 md:pb-0 max-w-5xl mx-auto mb-12">
          {MEMBERSHIPS_DATA.slice(1, 4).map((plan, idx) => (
            <div
              key={plan.name}
              className={`p-8 rounded-3xl border flex flex-col justify-between min-w-[290px] sm:min-w-[320px] md:min-w-0 snap-center ${
                plan.popular
                  ? 'bg-neutral-900 border-gold-500 shadow-xl'
                  : 'bg-neutral-900/30 border-white/5'
              }`}
            >
              <div>
                {plan.popular && (
                  <span className="text-[8px] font-mono bg-gold-500 text-black px-2 py-0.5 rounded uppercase font-black tracking-widest float-right">
                    BEST VALUE
                  </span>
                )}
                <h3 className="text-lg font-bold text-white font-display mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-6 border-b border-white/5 pb-4">
                  <span className="text-2xl font-black text-white">{plan.price}</span>
                  <span className="text-xs text-neutral-500">/ {plan.period}</span>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed mb-6">{plan.desc}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.slice(0, 4).map((feat) => (
                    <li key={feat} className="flex items-start gap-2 text-xs text-neutral-300">
                      <div className="w-1.5 h-1.5 bg-gold-500 rounded-full shrink-0 mt-1.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href="/memberships"
                className="block text-center py-3 bg-neutral-950 border border-neutral-800 hover:border-gold-500 text-xs font-mono font-bold uppercase tracking-wider rounded-lg text-white hover:text-gold-400 transition-all"
              >
                View Full Tier Details
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/memberships"
            className="inline-flex items-center gap-2 text-xs font-mono font-black uppercase tracking-widest text-gold-500 hover:text-white transition-colors"
          >
            Compare All 4 Membership Tiers
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* --- BRANCH PREVIEW --- */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-gold-500 font-mono tracking-widest uppercase text-xs">
              OUR GYM LOCATIONS
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none text-white">
              Convenient Locations Across Mumbai
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed">
              We have five friendly and spacious gym locations across Mumbai. Every branch features modern equipment, certified trainers to help you, clean changing rooms, and flexible timings.
            </p>

            <div className="space-y-4">
              {BRANCHES_DATA.map((b) => (
                <div
                  key={b.id}
                  className="flex items-center justify-between p-4 rounded-xl bg-neutral-900/50 border border-white/5 hover:border-gold-500/20 transition-all"
                >
                  <div>
                    <h4 className="text-sm font-bold text-white font-display">{b.name} Club</h4>
                    <p className="text-[10px] text-neutral-500 mt-0.5">{b.address.split(',')[1] || b.address}</p>
                  </div>
                  <Link
                    href="/branches"
                    className="p-2 rounded bg-neutral-950 border border-white/10 text-gold-500 hover:text-white hover:bg-gold-500 hover:border-gold-500 transition-all text-[10px] font-mono uppercase font-bold"
                  >
                    View Details
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden aspect-square lg:aspect-auto lg:h-[550px] border border-white/10 bg-neutral-900 shadow-2xl">
            <Image
              src="https://picsum.photos/seed/branchpreview/800/1000"
              alt="Mumbai branch network preview"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover grayscale opacity-80"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 p-6 rounded bg-[#0a0a0a]/95 backdrop-blur border border-white/10">
              <span className="text-[10px] font-mono text-gold-500 uppercase tracking-widest">FLEXIBLE ACCESS</span>
              <h4 className="text-lg font-black text-white uppercase mt-1">Access All Our Gyms</h4>
              <p className="text-xs text-neutral-400 leading-relaxed mt-1">
                Our 6-month and 12-month memberships let you work out at any of our 5 friendly branches across Mumbai.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS SLIDER --- */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-white/5">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold-500 font-mono tracking-widest uppercase text-xs">
            TESTIMONIALS
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white mt-2">
            Real Mumbai Stories
          </h2>
        </div>

        <div className="relative bg-neutral-900/40 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden">
          <Quote className="absolute top-6 left-6 w-16 h-16 text-gold-500/5 select-none pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-6 text-center md:text-left"
            >
              <div className="inline-block px-3 py-1 bg-gold-500/10 border border-gold-500/20 rounded text-[9px] font-mono uppercase tracking-widest text-gold-500">
                {TESTIMONIALS_DATA[activeTestimonial].tag}
              </div>
              <p className="text-base md:text-xl text-neutral-300 leading-relaxed font-sans italic">
                &ldquo;{TESTIMONIALS_DATA[activeTestimonial].quote}&rdquo;
              </p>
              <div>
                <h4 className="text-lg font-black uppercase tracking-tight text-white font-display">
                  {TESTIMONIALS_DATA[activeTestimonial].name}
                </h4>
                <p className="text-xs text-neutral-500 font-mono mt-0.5 uppercase">
                  {TESTIMONIALS_DATA[activeTestimonial].branch}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav Controls */}
          <div className="flex justify-center md:justify-end gap-3 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-2.5 rounded-full bg-neutral-950 border border-white/5 hover:border-gold-500 hover:text-gold-400 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2.5 rounded-full bg-neutral-950 border border-white/5 hover:border-gold-500 hover:text-gold-400 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* --- ELITE CALL TO ACTION --- */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="p-8 md:p-16 rounded-3xl bg-gradient-to-br from-[#101010] via-neutral-950 to-[#101010] border border-gold-500/30 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-cover bg-center pointer-events-none" style={{ backgroundImage: 'url(https://picsum.photos/seed/ctabg/1200/600)' }}></div>
          
          <div className="relative z-10 space-y-4">
            <span className="text-gold-500 font-mono tracking-widest uppercase text-xs px-3 py-1 border border-gold-500/20 rounded-full inline-block bg-neutral-900/50">
              START YOUR FITNESS JOURNEY TODAY
            </span>
            <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter text-white max-w-3xl mx-auto leading-none">
              Are You Ready To Get Stronger and More Confident?
            </h2>
            <p className="text-neutral-400 text-xs md:text-sm max-w-xl mx-auto leading-relaxed">
              Take the first step today. Book a completely free 1-day pass and speak with one of our friendly trainers.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
              <button
                onClick={() => setTrialModalOpen(true)}
                className="px-10 py-5 bg-gold-500 text-black font-black uppercase text-xs tracking-widest rounded-sm hover:bg-white transition-all transform hover:scale-105"
              >
                Book Free Trial
              </button>
              <Link
                href="/contact"
                className="px-10 py-5 bg-transparent border border-white/20 text-white font-mono font-bold uppercase text-xs tracking-widest rounded-sm hover:border-gold-500 hover:text-gold-400 transition-all transform hover:scale-105"
              >
                Inquire For Rates
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Free Trial Modal */}
      <FreeTrialModal isOpen={trialModalOpen} onClose={() => setTrialModalOpen(false)} />
    </div>
  );
}
