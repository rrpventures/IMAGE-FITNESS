'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, ArrowUpRight, Sparkles, ChevronsLeftRight } from 'lucide-react';
import { GALLERY_DATA, TRANSFORMATIONS_DATA } from '@/lib/data';

interface Transformation {
  name: string;
  before: string;
  after: string;
  stats: string;
  period: string;
}

function TransformationCard({ t, idx }: { t: Transformation; idx: number }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    if (e.touches[0]) {
      updatePosition(e.touches[0].clientX);
    }
  };

  const handleStart = (clientX: number) => {
    setIsDragging(true);
    updatePosition(clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => {
      setIsDragging(false);
    };
    if (isDragging) {
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      className="bg-neutral-900/50 border border-white/10 rounded-3xl p-5 hover:border-gold-500/30 transition-all duration-300 flex flex-col h-full group"
    >
      {/* Header Info */}
      <div className="mb-4">
        <h4 className="text-lg font-black text-white uppercase tracking-tight font-display">
          {t.name}
        </h4>
        <div className="flex flex-wrap gap-2 mt-1.5">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-gold-500/10 text-gold-500 px-2 py-0.5 rounded border border-gold-500/20">
            {t.stats}
          </span>
          <span className="text-[10px] font-mono uppercase text-neutral-500 self-center">
            {t.period}
          </span>
        </div>
      </div>

      {/* Square Slidable Image Area */}
      <div
        ref={containerRef}
        className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 bg-neutral-950 cursor-ew-resize select-none touch-none mt-auto"
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onMouseDown={(e) => handleStart(e.clientX)}
        onTouchStart={(e) => {
          if (e.touches[0]) {
            handleStart(e.touches[0].clientX);
          }
        }}
      >
        {/* Before Image - Grayscale */}
        <Image
          src={t.before}
          alt={`${t.name} Before`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none grayscale"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md text-[9px] font-mono font-bold uppercase text-white px-2.5 py-0.5 rounded border border-white/5 z-10 pointer-events-none">
          BEFORE
        </div>

        {/* After Image - Clipped dynamically with perfect alignment */}
        <div 
          className="absolute inset-0 w-full h-full pointer-events-none select-none"
          style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
        >
          <Image
            src={t.after}
            alt={`${t.name} After`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
        </div>
        <div className="absolute top-3 right-3 bg-gold-500 text-black text-[9px] font-mono font-black uppercase px-2.5 py-0.5 rounded border border-black/10 z-10 pointer-events-none">
          AFTER
        </div>

        {/* Vertical Split Line Slider */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-gold-500 pointer-events-none flex items-center justify-center z-20"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="w-8 h-8 rounded-full bg-gold-500 text-black flex items-center justify-center shadow-xl border border-white/20 select-none">
            <ChevronsLeftRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function GalleryPage() {
  const [galleryFilter, setGalleryFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredGallery = galleryFilter === 'All'
    ? GALLERY_DATA
    : GALLERY_DATA.filter((item) => item.cat === galleryFilter);

  return (
    <div className="bg-[#050505] text-white min-h-screen relative overflow-hidden pb-24">
      {/* Background Gradients */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, #D4AF37 0%, transparent 45%), radial-gradient(circle at 20% 80%, #151515 0%, transparent 60%)' }}></div>

      {/* Hero Header */}
      <section className="relative z-10 pt-20 pb-12 text-center max-w-4xl mx-auto px-4">
        <span className="text-gold-500 font-mono tracking-widest uppercase text-xs px-3 py-1 border border-gold-500/30 rounded-full inline-block bg-neutral-900/50">
          OUR GYM IN PICTURES
        </span>
        <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none mt-4 mb-6">
          Gym <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gold-500/50">Gallery</span>
        </h1>
        <p className="text-neutral-400 text-sm max-w-xl mx-auto leading-relaxed">
          Take a visual tour of our modern fitness areas, spacious weight rooms, clean changing rooms, and amazing member results.
        </p>
      </section>

      {/* BEFORE / AFTER TRANSFORMATION SECTION */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-gold-500 font-mono tracking-widest uppercase text-[10px] px-2.5 py-1 border border-gold-500/20 rounded-full inline-block bg-neutral-900/40">
            REAL RESULTS FROM REAL MEMBERS
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mt-3 animate-fade-in">
            Member Transformations
          </h2>
          <p className="text-neutral-400 text-xs mt-2">
            See the amazing, real before-and-after results achieved by our dedicated members.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TRANSFORMATIONS_DATA.map((t, idx) => (
            <TransformationCard key={idx} t={t} idx={idx} />
          ))}
        </div>
      </section>

      {/* MODERN MASONRY GALLERY */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-white/5">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-gold-500 font-mono tracking-widest uppercase text-xs">
            GYM PHOTO GALLERY
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white mt-2">
            Our Gym Spaces
          </h2>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {['All', 'Facilities', 'Workouts', 'Community'].map((cat) => (
            <button
              key={cat}
              onClick={() => setGalleryFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-xs font-mono tracking-widest uppercase transition-all duration-300 ${
                galleryFilter === cat
                  ? 'bg-gold-500 text-black font-black shadow-lg shadow-gold-500/20'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredGallery.map((item, index) => (
            <div
              key={index}
              onClick={() => setLightboxIndex(index)}
              className="break-inside-avoid relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-white/5 bg-neutral-950 cursor-pointer group shadow-lg"
            >
              <Image
                src={item.url}
                alt={item.caption}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              
              {/* Hover Details overlay */}
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                <span className="text-[10px] text-gold-500 font-mono uppercase tracking-widest mb-1">{item.cat}</span>
                <h4 className="text-white text-sm font-bold font-display">{item.caption}</h4>
                <div className="mt-4 flex items-center gap-2 text-[10px] text-neutral-400 font-mono uppercase">
                  <span>Click to expand full screen</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-gold-500" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LIGHTBOX MODAL OVERLAY */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex flex-col items-center justify-center p-6"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Close */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 p-2 text-neutral-400 hover:text-white transition-colors z-[60]"
              aria-label="Close Lightbox"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Frame */}
            <div className="relative max-w-4xl w-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              
              {/* Prev */}
              <button
                onClick={() => {
                  setLightboxIndex(prev => prev !== null ? (prev - 1 + filteredGallery.length) % filteredGallery.length : null);
                }}
                className="absolute left-4 p-2.5 rounded-full bg-neutral-900/80 border border-white/10 text-white hover:border-gold-500 hover:text-gold-400 transition-colors z-50"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="relative h-[75vh] w-[85vw] max-w-4xl overflow-hidden rounded-xl border border-white/10 bg-neutral-950">
                <Image
                  src={filteredGallery[lightboxIndex].url}
                  alt={filteredGallery[lightboxIndex].caption}
                  fill
                  sizes="(max-width: 1024px) 100vw, 85vw"
                  className="object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Next */}
              <button
                onClick={() => {
                  setLightboxIndex(prev => prev !== null ? (prev + 1) % filteredGallery.length : null);
                }}
                className="absolute right-4 p-2.5 rounded-full bg-neutral-900/80 border border-white/10 text-white hover:border-gold-500 hover:text-gold-400 transition-colors z-50"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Caption details below */}
            <div className="text-center max-w-lg mt-6" onClick={(e) => e.stopPropagation()}>
              <span className="text-xs text-gold-500 font-mono tracking-widest uppercase">
                {filteredGallery[lightboxIndex].cat}
              </span>
              <p className="text-neutral-300 text-sm mt-1">
                {filteredGallery[lightboxIndex].caption}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
