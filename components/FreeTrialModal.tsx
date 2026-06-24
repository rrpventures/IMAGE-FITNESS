'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Dumbbell, Calendar, Users, Target, Clock } from 'lucide-react';

interface FreeTrialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FreeTrialModal({ isOpen, onClose }: FreeTrialModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    branch: 'Chembur',
    goal: 'Fat Loss',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API request
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setFormSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative bg-neutral-950 border border-gold-500/20 max-w-lg w-full rounded-2xl overflow-hidden shadow-2xl z-10 p-6 md:p-8"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {formSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-gold-500 flex items-center justify-center text-black mx-auto mb-6 shadow-xl shadow-gold-500/20">
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>
                <h3 className="text-2xl font-black tracking-tighter uppercase text-white mb-2">Trial Confirmed!</h3>
                <p className="text-neutral-400 text-xs leading-relaxed max-w-sm mx-auto mb-6">
                  Your free 1-Day gym pass is ready! A friendly trainer from Image Fitness will reach out via WhatsApp or call to schedule your free visit and welcome you.
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    onClose();
                  }}
                  className="bg-gold-500 text-black px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors"
                >
                  Return to Site
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div className="text-center md:text-left mb-2">
                  <h3 className="text-2xl font-black uppercase tracking-tighter text-white mt-3">Get Your Free 1-Day Pass</h3>
                  <p className="text-neutral-400 text-xs mt-1">
                    Come see our modern gym equipment, clean spaces, and friendly trainers.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono tracking-widest uppercase text-neutral-400">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleFormChange}
                      placeholder="e.g. Rohan Patel"
                      className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-gold-500 transition-colors placeholder:text-neutral-600"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono tracking-widest uppercase text-neutral-400">WhatsApp / Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleFormChange}
                        placeholder="e.g. +91 99999 99999"
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-gold-500 transition-colors placeholder:text-neutral-600"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono tracking-widest uppercase text-neutral-400">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleFormChange}
                        placeholder="e.g. rohan@gmail.com"
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-gold-500 transition-colors placeholder:text-neutral-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono tracking-widest uppercase text-neutral-400">Select Branch</label>
                      <select
                        name="branch"
                        value={formData.branch}
                        onChange={handleFormChange}
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-gold-500 transition-colors"
                      >
                        <option value="Chembur">Chembur Branch</option>
                        <option value="Bhandup">Bhandup Branch</option>
                        <option value="Sanpada">Sanpada (Navi Mumbai)</option>
                        <option value="Dadar">Dadar Branch</option>
                        <option value="Mulund">Mulund Branch</option>
                      </select>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono tracking-widest uppercase text-neutral-400">Primary Goal</label>
                      <select
                        name="goal"
                        value={formData.goal}
                        onChange={handleFormChange}
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-gold-500 transition-colors"
                      >
                        <option value="Fat Loss">Lose Weight & Tone Up</option>
                        <option value="Muscle Building">Build Strength & Muscle</option>
                        <option value="Cardio Conditioning">Get Fit & Stay Active</option>
                        <option value="Group Zumba/Yoga">Zumba & Yoga Classes</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-gold-600 to-gold-400 text-black py-3.5 rounded-lg text-xs font-mono tracking-widest uppercase font-extrabold shadow-lg hover:opacity-90 active:scale-95 transition-all"
                  >
                    {isSubmitting ? 'Securing Your Pass...' : 'Claim My Free Gym Pass'}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
