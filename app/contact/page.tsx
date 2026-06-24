'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Check, MessageCircle, Instagram, Youtube, Facebook, Shield, Sparkles } from 'lucide-react';
import { BRANCHES_DATA } from '@/lib/data';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    branch: 'Chembur',
    goal: 'Fat Loss',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
    <div className="bg-[#050505] text-white min-h-screen relative overflow-hidden pb-24">
      {/* Background Gradients */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 10% 30%, #D4AF37 0%, transparent 50%), radial-gradient(circle at 80% 80%, #151515 0%, transparent 60%)' }}></div>

      {/* Hero Header */}
      <section className="relative z-10 pt-20 pb-12 text-center max-w-4xl mx-auto px-4">
        <span className="text-gold-500 font-mono tracking-widest uppercase text-xs px-3 py-1 border border-gold-500/30 rounded-full inline-block bg-neutral-900/50">
          GET IN TOUCH
        </span>
        <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none mt-4 mb-6">
          Connect With <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gold-500/50">Us</span>
        </h1>
        <p className="text-neutral-400 text-sm max-w-xl mx-auto leading-relaxed">
          Send us a message! A friendly team member from your chosen gym location will get back to you within 2 hours to help you get started.
        </p>
      </section>

      {/* Main Grid: Form on Right, Contact Details/Maps on Left */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: Info Block & Map Simulators */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl bg-neutral-900/50 border border-white/10 space-y-6">
              <h3 className="text-2xl font-black uppercase tracking-tight text-white border-b border-white/5 pb-4 font-display">
                Our Offices
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-neutral-950/60 p-4 rounded-xl border border-white/5">
                  <div className="w-10 h-10 rounded bg-neutral-900 flex items-center justify-center text-gold-500 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-neutral-500 font-mono uppercase tracking-wider">GYM PHONE NUMBER</div>
                    <a href="tel:+919833777710" className="text-sm font-bold text-white hover:text-gold-400 transition-colors">+91 98337 77710</a>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-neutral-950/60 p-4 rounded-xl border border-white/5">
                  <div className="w-10 h-10 rounded bg-neutral-900 flex items-center justify-center text-gold-500 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-neutral-500 font-mono uppercase tracking-wider">EMAIL ADDRESS</div>
                    <a href="mailto:membership@imagefitness.co.in" className="text-sm font-bold text-white hover:text-gold-400 transition-colors">membership@imagefitness.co.in</a>
                  </div>
                </div>
              </div>

              {/* Direct Social Shortcuts */}
              <div className="pt-4 border-t border-white/5">
                <p className="text-xs font-mono uppercase tracking-widest text-gold-500 mb-3">Connect Instantly</p>
                <div className="flex gap-3">
                  {[
                    { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/imagefitnessmumbai' },
                    { icon: Facebook, label: 'Facebook', href: 'https://facebook.com' },
                    { icon: Youtube, label: 'YouTube', href: 'https://youtube.com' }
                  ].map((s, index) => {
                    const Icon = s.icon;
                    return (
                      <a
                        key={index}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-neutral-950 border border-white/5 text-xs text-neutral-400 hover:text-gold-500 hover:border-gold-500 transition-all"
                      >
                        <Icon className="w-4 h-4" />
                        <span className="font-mono text-[10px] uppercase tracking-wider">{s.label}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* STYLIZED EMBED MAP */}
            <div className="relative rounded-3xl overflow-hidden aspect-[16/9] border border-white/10 bg-neutral-950 group">
              <div className="absolute inset-0 opacity-40 grayscale invert transition-opacity duration-300 group-hover:opacity-60">
                <iframe
                  title="Image Fitness HQ Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15086.324316934246!2d72.8912!3d19.06!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f837b577!2sDiamond+Garden!5e0!3m2!1sen!2sin!4v1561000000000!5m2!1sen!2sin"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 bg-neutral-950/95 backdrop-blur border border-white/10 p-4 rounded-xl flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-white font-display">Mumbai Head Office</h4>
                  <p className="text-[9px] text-neutral-400 font-mono mt-0.5">Diamond Garden, Chembur, Mumbai</p>
                </div>
                <a
                  href="https://maps.google.com/?q=Diamond+Garden+Chembur+Mumbai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded bg-gold-500 text-black text-[10px] font-mono font-bold uppercase hover:bg-gold-400 transition-colors"
                >
                  Launch Maps
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: Sophisticated Dark Form Card */}
          <div className="lg:col-span-7">
            <div className="glass-panel-gold p-8 md:p-12 rounded-3xl border border-gold-500/20 bg-neutral-900/20 w-full relative">
              {formSubmitted ? (
                <div className="text-center py-16 px-4">
                  <div className="w-20 h-20 rounded-full bg-gold-500 flex items-center justify-center text-black mx-auto mb-6 shadow-2xl shadow-gold-500/20">
                    <Check className="w-10 h-10 stroke-[3]" />
                  </div>
                  <h3 className="text-3xl font-black uppercase tracking-tight text-white mb-3">Message Sent!</h3>
                  <p className="text-neutral-400 text-xs leading-relaxed max-w-sm mx-auto mb-8">
                    We have received your request! A team member from our gym will reach out shortly to arrange your free trial session and welcome you.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="bg-neutral-905 border border-gold-500/30 hover:border-gold-500 text-gold-500 px-8 py-3 rounded-full text-xs font-mono tracking-widest uppercase font-black transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-black uppercase tracking-tight text-white border-b border-white/5 pb-4 font-display">
                      Get Your Free Pass
                    </h3>
                    <p className="text-neutral-400 text-xs mt-2">
                      Tell us a bit about yourself and your fitness goals.
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono tracking-widest uppercase text-neutral-400">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleFormChange}
                      placeholder="e.g. Rohan Patel"
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-gold-500 transition-colors placeholder:text-neutral-600"
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
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-gold-500 transition-colors placeholder:text-neutral-600"
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
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-gold-500 transition-colors placeholder:text-neutral-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono tracking-widest uppercase text-neutral-400">Preferred Club Branch</label>
                      <select
                        name="branch"
                        value={formData.branch}
                        onChange={handleFormChange}
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-gold-500 transition-colors"
                      >
                        {BRANCHES_DATA.map((b) => (
                          <option key={b.id} value={b.name}>{b.name} Branch</option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono tracking-widest uppercase text-neutral-400">Your Goal</label>
                      <select
                        name="goal"
                        value={formData.goal}
                        onChange={handleFormChange}
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-gold-500 transition-colors"
                      >
                        <option value="Fat Loss">Lose Weight & Tone Up</option>
                        <option value="Strength Training">Build Strength & Confidence</option>
                        <option value="Functional Conditioning">Get Fit & Stay Active</option>
                        <option value="Personal Trainer Selection">Personal Training Support</option>
                        <option value="Zumba & Yoga Circles">Zumba & Yoga Group Classes</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono tracking-widest uppercase text-neutral-400">Message / Anything Else? (Optional)</label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleFormChange}
                      placeholder="Tell us about any questions, injuries, or what you want to achieve..."
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-gold-500 transition-colors placeholder:text-neutral-600 resize-none"
                    />
                  </div>

                  <div className="pt-2 space-y-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 text-black py-4 rounded-lg text-xs font-mono tracking-widest uppercase font-extrabold shadow hover:opacity-95 active:scale-95 transition-all flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? 'Sending Request...' : 'Send My Request'}
                    </button>

                    <a
                      href="https://wa.me/919833777710?text=Hi%20Image%20Fitness,%20I%20want%20to%20book%20a%20free%20trial%20session!"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-neutral-950 text-white border border-neutral-800 hover:border-gold-500 py-3 rounded-lg text-xs font-mono tracking-widest uppercase font-bold transition-all flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4 fill-current text-emerald-500" />
                      Chat on WhatsApp
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
