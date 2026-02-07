/**
 * Landing Page - Premium Home Page for Muhammad Tamjeed Hussain's Todo System
 * High-end design with glassmorphism and vibrant gradients
 */

'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Button from '../components/ui/Button';
import { useAuth } from '@/lib/context/AuthContext';
import { Navbar } from '@/components/layout';

export default function LandingPage() {
  const router = useRouter();
  const { isAuthenticated, isLoading } = useAuth();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  const handleStartFree = () => {
    if (isAuthenticated) {
      router.push('/dashboard');
    } else {
      router.push('/login');
    }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white selection:bg-amber-500/40 selection:text-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 sm:pt-40 sm:pb-48 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background Elements */}
        <motion.div
          style={{ y: y1 }}
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-amber-500/10 blur-[120px] rounded-full -z-10 pointer-events-none animate-pulse"
        />
        <motion.div
          style={{ y: y1 }}
          className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-yellow-500/5 blur-[100px] rounded-full -z-10 pointer-events-none"
        />

        <div className="max-w-6xl mx-auto relative">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerChildren}
            className="text-center"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-block px-4 py-1.5 mb-6 rounded-full glass-card border-amber-500/20 text-amber-500 text-xs font-bold tracking-[0.2em] uppercase"
            >
              The Next Evolution of Productivity
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-6xl sm:text-8xl font-black mb-8 leading-[1] tracking-tight"
            >
              Organize with <br />
              <span className="premium-gradient-text drop-shadow-[0_0_25px_rgba(212,175,55,0.3)]">
                Pure Precision
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl sm:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed font-medium"
            >
              Experience a task management system designed by <span className="text-white font-bold">Muhammad Tamjeed Hussain</span> for those who demand excellence in every pixel.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Button
                variant="primary"
                onClick={handleStartFree}
                disabled={isLoading}
                className="glow-button text-lg px-12 py-5 rounded-2xl h-auto font-bold tracking-wide"
              >
                Get Started Now
              </Button>
              <Link href="/dashboard">
                <Button
                  variant="secondary"
                  className="glass-card text-lg px-12 py-5 rounded-2xl h-auto font-bold border-white/5 hover:bg-white/5 transition-colors"
                >
                  Explore System
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Dashboard Preview (Visual Placeholder replacement) */}
      <section className="pb-32 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="glass-card rounded-[2.5rem] p-4 sm:p-8 relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 to-transparent rounded-[2.5rem] pointer-events-none" />
            <div className="aspect-[16/9] w-full rounded-2xl bg-slate-900/80 overflow-hidden relative">
              <div className="absolute inset-0 border border-white/5 rounded-2xl" />
              <div className="p-8">
                <div className="w-1/3 h-8 glass-card rounded-lg mb-8" />
                <div className="space-y-4">
                  {[1, 2, 3].map(i => (
                    <div key={i} className={`w-full h-16 glass-card rounded-xl border-white/5 opacity-${100 - i * 20}`} />
                  ))}
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="glass-card px-6 py-3 rounded-xl font-bold">Secure Interface Active</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modern Features Grid */}
      <section id="features" className="py-24 px-4 bg-slate-950/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">Engineered for Tomorrow</h2>
            <div className="h-1 w-20 bg-amber-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: 'Neural Speed', desc: 'Built on Next.js 15 for near-instant responses.' },
              { title: 'Data Guardian', desc: 'Your tasks are protected with enterprise-grade encryption.' },
              { title: 'Adaptive Flow', desc: 'A UI that responds to your device and your rhythm.' }
            ].map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-10 rounded-3xl border-transparent hover:border-amber-500/30 transition-all duration-500"
              >
                <div className="w-14 h-14 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-500 mb-6 font-bold text-xl">0{i + 1}</div>
                <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
                <p className="text-slate-400 leading-relaxed font-medium">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Branding */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Elevate?</h2>
          <Button onClick={handleStartFree} className="glow-button px-16 py-6 rounded-2xl font-black text-xl">DEPLOY YOUR FIRST TASK</Button>
          <p className="mt-12 text-slate-500 text-sm font-bold tracking-widest uppercase">Precision Crafted by Muhammad Tamjeed Hussain</p>
        </div>
      </section>
    </div>
  );
}
