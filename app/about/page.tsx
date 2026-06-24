'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Shield, Award, Users, Flame, Target, Compass, HeartHandshake, Sparkles } from 'lucide-react';
import { WHY_US_DATA } from '@/lib/data';

export default function AboutPage() {
  const values = [
    {
      title: 'Modern Training Equipment',
      desc: 'Every machine in our gym is chosen to be safe, comfortable, and highly effective for your muscles.',
      icon: Target,
    },
    {
      title: 'Super Clean Environment',
      desc: 'We deep-clean our gyms every hour and keep the air fresh so you can breathe easily and work out safely.',
      icon: Shield,
    },
    {
      title: 'Honest & Trustworthy',
      desc: 'We don&apos;t make unrealistic promises. We offer simple, honest fitness programs that work to help you get stronger and healthier.',
      icon: Award,
    },
    {
      title: 'Friendly Community',
      desc: 'A warm and welcoming community of everyday people, helpful trainers, and gym members who support each other&apos;s goals.',
      icon: Users,
    },
  ];

  const philosophy = [
    {
      step: '01',
      title: 'Free Progress & Body Scan',
      desc: 'We check your baseline weight, muscle, and body fat using a simple scan so we can set the right starting goals for you.',
    },
    {
      step: '02',
      title: 'Simple Diet & Nutrition Support',
      desc: 'Our friendly coaches design simple, practical meal plans that fit your daily routine and include foods you love.',
    },
    {
      step: '03',
      title: 'Supportive Personal Coaching',
      desc: 'Our experienced coaches guide your workouts, teach you the correct form, and help you get stronger at your own pace.',
    },
  ];

  return (
    <div className="bg-[#050505] text-white min-h-screen relative overflow-hidden pb-24">
      {/* Background Gradients */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 70% 30%, #D4AF37 0%, transparent 50%), radial-gradient(circle at 10% 80%, #151515 0%, transparent 60%)' }}></div>

      {/* Hero Header */}
      <section className="relative z-10 pt-20 pb-16 text-center max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-3 py-1 border border-gold-500/30 rounded-full text-[10px] uppercase font-mono tracking-[0.3em] text-gold-500 mb-6 bg-neutral-900/50"
        >
          <Sparkles className="w-3.5 h-3.5 text-gold-500 animate-pulse" />
          ESTABLISHED 2015
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-6"
        >
          WE BUILD <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gold-500/50">HEALTH & CONFIDENCE</span> <br />FOR EVERYONE.
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto"
        >
          Image Fitness is Mumbai&apos;s friendliest fitness gym. We combine modern equipment with a supportive community across our 5 neat and spacious locations.
        </motion.p>
      </section>

      {/* Brand Story Block */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="text-gold-500 font-mono tracking-widest uppercase text-xs">
              THE MOVEMENT
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none text-white">
              A Real Gym For Real People
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Founded in 2015, Image Fitness set out to make fitness easy and accessible. We noticed a major problem in Mumbai: gyms were either overly expensive with no personal support, or dark, unfriendly training spaces lacking clean, modern equipment.
            </p>
            <p className="text-neutral-400 text-sm leading-relaxed">
              We wanted to do things differently. By bringing together top-quality gym equipment, experienced trainers, and a warm, clean environment, we created a space where you can relax and focus on your goals.
            </p>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Whether you want to build strength, lose weight, or just feel more energetic, our friendly plans are designed to help you see real, lasting results without getting hurt.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[4/3] bg-neutral-900 group shadow-2xl"
          >
            <Image
              src="https://picsum.photos/seed/aboutbrand/800/600"
              alt="Elite training session"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded bg-[#0a0a0a]/90 backdrop-blur border border-white/10 flex justify-between items-center">
              <div>
                <p className="text-[10px] font-mono uppercase text-gold-500 tracking-wider">CHEF TRAINING SYSTEM</p>
                <p className="text-sm font-bold text-white">Official Hammer Strength Partner</p>
              </div>
              <Flame className="w-5 h-5 text-gold-500 animate-pulse" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-neutral-900/50 border border-white/5 space-y-4"
          >
            <div className="w-12 h-12 rounded-lg bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-500">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-black uppercase tracking-tight text-white">Our Mission</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              To help the people of Mumbai live healthier, active lives by offering friendly training support, high-quality modern gym equipment, and simple nutrition advice.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-2xl bg-neutral-900/50 border border-white/5 space-y-4"
          >
            <div className="w-12 h-12 rounded-lg bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-500">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-black uppercase tracking-tight text-white">Our Vision</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              To build a supportive fitness network across Mumbai, helping thousands of everyday people build strength, gain confidence, and stay healthy for life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values (Grid) */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-white/5">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold-500 font-mono tracking-widest uppercase text-xs">
            OUR VALUES
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white mt-2">
            What We Stand For
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-6 rounded-2xl bg-neutral-900/30 border border-white/5 hover:border-gold-500/20 transition-colors group"
              >
                <div className="w-10 h-10 rounded bg-neutral-950 flex items-center justify-center text-gold-500 mb-6 group-hover:bg-gold-500 group-hover:text-black transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">{v.title}</h4>
                <p className="text-xs text-neutral-400 leading-relaxed">{v.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Why Choose Image Fitness (Bento/Highlight Block) */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4 space-y-4">
            <span className="text-gold-500 font-mono tracking-widest uppercase text-xs">
              WHY CHOOSE US
            </span>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none text-white">
              Built Around You
            </h2>
            <p className="text-neutral-400 text-xs leading-relaxed">
              We focus on simple, effective, and safe training programs that fit your personal lifestyle. This ensures you reach your goals safely while building lasting habits.
            </p>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {WHY_US_DATA.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-neutral-900/40 border border-white/5 hover:bg-neutral-900/80 transition-all"
              >
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-2">
                  <span className="text-gold-500">0{idx + 1}.</span> {item.title}
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fitness Philosophy Sequence */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-white/5">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold-500 font-mono tracking-widest uppercase text-xs">
            OUR THREE STEPS
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white mt-2">
            How We Help You Succeed
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {philosophy.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative p-8 rounded-2xl bg-neutral-900/40 border border-white/5 space-y-4 group overflow-hidden"
            >
              <span className="absolute top-4 right-6 text-6xl font-black text-white/5 group-hover:text-gold-500/10 transition-colors select-none">
                {step.step}
              </span>
              <h3 className="text-xl font-bold text-white border-l-2 border-gold-500 pl-3">
                {step.title}
              </h3>
              <p className="text-neutral-400 text-xs leading-relaxed pt-2">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
