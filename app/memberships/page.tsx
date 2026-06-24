'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Dumbbell, Award, Shield, Sparkles, ChevronDown, ChevronUp, Clock, HeartHandshake } from 'lucide-react';
import { MEMBERSHIPS_DATA, FAQS_DATA } from '@/lib/data';
import FreeTrialModal from '@/components/FreeTrialModal';

export default function MembershipsPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [trialModalOpen, setTrialModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const benefits = [
    {
      title: 'Free Health & Progress Check',
      desc: 'Every member gets a free initial body check and helpful tips on how to lift weights safely and effectively.',
      icon: Dumbbell,
    },
    {
      title: 'Super Clean Gym Space',
      desc: 'We deep-clean our gyms hourly and run high-quality air filters to keep our gym space fresh and germ-free.',
      icon: Shield,
    },
    {
      title: 'Always-On Trainer Support',
      desc: 'Our experienced, friendly trainers are always on the floor to help you with your form and answer any questions.',
      icon: Award,
    },
  ];

  return (
    <div className="bg-[#050505] text-white min-h-screen relative overflow-hidden pb-24">
      {/* Background Gradients */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 10% 20%, #D4AF37 0%, transparent 40%), radial-gradient(circle at 80% 90%, #151515 0%, transparent 60%)' }}></div>

      {/* Hero Header */}
      <section className="relative z-10 pt-20 pb-12 text-center max-w-4xl mx-auto px-4">
        <span className="text-gold-500 font-mono tracking-widest uppercase text-xs px-3 py-1 border border-gold-500/30 rounded-full inline-block bg-neutral-900/50">
          FITNESS FOR EVERYONE
        </span>
        <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none mt-4 mb-6">
          Simple Gym <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gold-500/50">Memberships</span>
        </h1>
        <p className="text-neutral-400 text-sm max-w-xl mx-auto leading-relaxed">
          Choose the best membership plan that fits your personal schedule and goals. Free changing rooms, secure lockers, and helpful trainer advice are included in every plan.
        </p>
      </section>

      {/* Pricing Cards Grid */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="flex lg:grid lg:grid-cols-4 gap-6 overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory scrollbar-none pb-4 lg:pb-0">
          {MEMBERSHIPS_DATA.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`relative rounded-3xl p-8 flex flex-col justify-between overflow-hidden border transition-all duration-300 min-w-[280px] sm:min-w-[320px] lg:min-w-0 snap-center ${
                plan.popular
                  ? 'bg-neutral-900 border-gold-500 shadow-2xl shadow-gold-500/10'
                  : 'bg-neutral-900/40 border-white/5 hover:border-gold-500/20'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-4 right-4 bg-gold-500 text-black text-[9px] font-mono font-black uppercase tracking-widest px-2.5 py-1 rounded-sm">
                  MOST COVETED
                </div>
              )}

              <div>
                <span className="text-[10px] font-mono tracking-widest text-gold-500 uppercase block mb-1">
                  0{idx + 1} • TIER
                </span>
                <h3 className="text-xl font-bold font-display text-white mb-4">{plan.name}</h3>
                
                <div className="flex items-baseline gap-1.5 border-b border-white/5 pb-6 mb-6">
                  <span className="text-3xl md:text-4xl font-black tracking-tight text-white">{plan.price}</span>
                  <span className="text-xs text-neutral-400">/ {plan.period}</span>
                </div>

                <p className="text-xs text-neutral-400 leading-relaxed mb-6">{plan.desc}</p>

                <ul className="space-y-3.5 mb-8">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-xs text-neutral-300">
                      <Check className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <button
                  onClick={() => setTrialModalOpen(true)}
                  className={`w-full py-3.5 rounded-xl text-xs font-mono tracking-widest uppercase font-extrabold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-gold-600 to-gold-400 text-black hover:opacity-90 shadow-lg shadow-gold-500/10'
                      : 'bg-neutral-950 text-white border border-neutral-800 hover:border-gold-500 hover:text-gold-400'
                  }`}
                >
                  Get Your Gym Pass
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Shared Premium Membership Benefits Block */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-white/5">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold-500 font-mono tracking-widest uppercase text-xs">
            GYM AMENITIES
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white mt-2">
            What is Included with Your Membership
          </h2>
          <p className="text-neutral-400 text-xs mt-2">
            Every Image Fitness location across Mumbai offers a friendly, neat, and highly supportive environment. Here is what you get:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div key={idx} className="p-8 rounded-2xl bg-neutral-900/30 border border-white/5 space-y-4">
                <div className="w-12 h-12 rounded bg-neutral-950 flex items-center justify-center text-gold-500">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white font-display">{b.title}</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">{b.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Personal Training Packages Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-gold-500 font-mono tracking-widest uppercase text-xs">
              1-ON-1 TRAINING
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none text-white">
              Personal Training Support
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Work out with our highly experienced and friendly personal trainers. They will help you learn the correct form, design a simple diet plan, and keep you motivated to build strength and confidence safely.
            </p>
            <div className="p-4 rounded-xl border border-gold-500/20 bg-neutral-950 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-500 shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">Personalized Attention</p>
                <p className="text-[10px] text-neutral-400 mt-0.5">To make sure you get the best support, our personal trainers only work with a small number of clients at a time.</p>
              </div>
            </div>
            <div>
              <button
                onClick={() => setTrialModalOpen(true)}
                className="px-8 py-3.5 bg-gold-500 text-black text-xs font-mono font-black uppercase tracking-widest rounded-full hover:bg-white transition-colors"
              >
                Find a Personal Trainer
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-neutral-900 border border-white/10 space-y-4">
              <span className="text-[10px] font-mono tracking-widest text-gold-500 uppercase">TIER 1</span>
              <h3 className="text-xl font-bold text-white font-display">Strength & Muscle Plan</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Perfect for learning correct lifting forms, building physical strength, and safely gaining muscle at your own pace.
              </p>
              <ul className="space-y-2 text-xs text-neutral-300">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-gold-500 rounded-full" />
                  <span>3 Sessions Weekly / 12 Monthly</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-gold-500 rounded-full" />
                  <span>Weekly Diet & Meal Help</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-900 border border-white/10 space-y-4">
              <span className="text-[10px] font-mono tracking-widest text-gold-500 uppercase">TIER 2</span>
              <h3 className="text-xl font-bold text-white font-display">Weight Loss & Active Life Plan</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                A simple, structured program designed to help you burn fat, boost your energy, and build healthy habits for life.
              </p>
              <ul className="space-y-2 text-xs text-neutral-300">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-gold-500 rounded-full" />
                  <span>5 Sessions Weekly / 20 Monthly</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-gold-500 rounded-full" />
                  <span>Direct Nutritionist Advice</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Free Trial Banner offer */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 border border-gold-500/30 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-[10px] font-mono tracking-widest text-gold-500 uppercase">TRY US FOR FREE</span>
            <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-white">Get Your Free 1-Day Pass</h3>
            <p className="text-neutral-400 text-xs md:text-sm max-w-lg">
              Get a free 1-day gym pass, a quick body scan, and full access to our gym floor and changing rooms, with no obligations.
            </p>
          </div>
          <div>
            <button
              onClick={() => setTrialModalOpen(true)}
              className="px-10 py-5 bg-gold-500 text-black text-xs font-mono font-black uppercase tracking-widest rounded-sm hover:bg-white hover:scale-105 transition-all shadow-xl"
            >
              Get My Free Pass
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-white/5">
        <div className="text-center mb-12">
          <span className="text-gold-500 font-mono tracking-widest uppercase text-xs">
            MEMBERSHIP GUIDE
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white mt-2">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {FAQS_DATA.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-white/5 bg-neutral-900/40 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                >
                  <span className="font-bold text-sm text-white hover:text-gold-400 transition-colors">
                    {faq.q}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-gold-500 shrink-0 ml-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-gold-500 shrink-0 ml-4" />
                  )}
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-5 pt-0 border-t border-white/5 text-xs text-neutral-400 leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* Free Trial Modal */}
      <FreeTrialModal isOpen={trialModalOpen} onClose={() => setTrialModalOpen(false)} />
    </div>
  );
}
