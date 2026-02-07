/**
 * About Us Page - Premium Design
 * High-end explanation of Muhammad Tamjeed Hussain's task management philosophy
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Navbar } from '@/components/layout';

export default function AboutPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="text-center mb-24"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-5xl sm:text-7xl font-black mb-8 tracking-tight"
          >
            Built for <br />
            <span className="premium-gradient-text drop-shadow-[0_0_20px_rgba(129,140,248,0.2)]">
              Digital Excellence
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl sm:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            Task management shouldn't be a chore. We engineering systems that disappear into your workflow, letting your creativity take center stage.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          <motion.section
            {...fadeInUp}
            className="glass-card p-10 rounded-[2.5rem] border-white/5"
          >
            <h2 className="text-3xl font-bold mb-6">The Philosophy</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              Most tools add noise. <span className="text-amber-500 font-bold">Tamjeed's Task System</span> removes it. We believe in high-density information with low-friction interaction.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed">
              By leveraging modern web technology, we've created a system that feels like an extension of your own mind.
            </p>
          </motion.section>

          <motion.section
            {...fadeInUp}
            transition={{ delay: 0.1 }}
            className="glass-card p-10 rounded-[2.5rem] border-white/5 bg-gradient-to-br from-amber-500/5 to-transparent"
          >
            <h2 className="text-3xl font-bold mb-6">The Architect</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Conceptualized and developed by <span className="text-white font-bold underline decoration-amber-500 underline-offset-4">Muhammad Tamjeed Hussain</span>, this system represents the pinnacle of Phase II full-stack integration.
            </p>
            <div className="mt-8 flex gap-4">
              <div className="px-4 py-2 glass-card rounded-full text-xs font-bold uppercase tracking-widest text-amber-500">FastAPI</div>
              <div className="px-4 py-2 glass-card rounded-full text-xs font-bold uppercase tracking-widest text-amber-400">Next.js 15</div>
              <div className="px-4 py-2 glass-card rounded-full text-xs font-bold uppercase tracking-widest text-amber-300">SQLModel</div>
            </div>
          </motion.section>
        </div>

        <motion.div
          {...fadeInUp}
          className="text-center"
        >
          <p className="text-slate-500 font-bold tracking-[0.3em] uppercase mb-8">Ready to start?</p>
          <Link href="/signup">
            <button className="glow-button px-12 py-5 rounded-2xl font-black text-xl">JOIN THE SYSTEM</button>
          </Link>
        </motion.div>
      </main>

      <footer className="border-t border-white/5 py-12 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-500 text-xs font-bold tracking-[0.2em] uppercase">
            © 2026 Tamjeed's Tasks | Muhammad Tamjeed Hussain
          </p>
        </div>
      </footer>
    </div>
  );
}
