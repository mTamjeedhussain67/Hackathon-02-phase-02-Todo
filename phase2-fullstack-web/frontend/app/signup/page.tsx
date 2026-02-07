/**
 * Signup Page
 * Professional registration page using Better Auth
 * Clean, centered layout with smooth animations
 * Phase 3: Integrated with shared Navbar
 */

'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/context/AuthContext';
import { Navbar } from '@/components/layout';

export default function SignupPage() {
  const router = useRouter();
  const { signup } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [isFocused, setIsFocused] = useState({
    name: false,
    email: false,
    password: false,
    confirmPassword: false,
  });
  const [isLoading, setIsLoading] = useState(false);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    setIsLoading(true);

    try {
      await signup(formData.email, formData.password, formData.name);
      router.push('/dashboard');
    } catch (error: unknown) {
      // Extract the error message from the API error
      const errorMessage = error instanceof Error ? error.message : 'Signup failed. Please try again.';
      alert(errorMessage);
      console.error('Signup error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFocus = (field: string) => {
    setIsFocused({ ...isFocused, [field]: true });
  };

  const handleBlur = (field: string) => {
    setIsFocused({ ...isFocused, [field]: false });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Shared Navbar */}
      <Navbar />

      {/* Main Content - Centered */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial="initial"
          animate="animate"
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="w-full max-w-md"
        >
          {/* Title */}
          <motion.div variants={fadeInUp} className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              Create Account
            </h1>
            <p className="text-base text-gray-text">
              Start organizing your tasks with Tamjeed's Tasks
            </p>
          </motion.div>

          {/* Signup Form */}
          <motion.div
            variants={fadeInUp}
            className="bg-card border border-amber-500/10 rounded-xl p-8 shadow-2xl shadow-black/50"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => handleFocus('name')}
                  onBlur={() => handleBlur('name')}
                  required
                  className={`w-full px-4 py-3 bg-card border rounded-lg text-white placeholder-gray-500 focus:outline-none transition-all duration-300 ${isFocused.name
                    ? 'border-amber-500 bg-amber-500/5 shadow-[0_0_20px_rgba(212,175,55,0.2)]'
                    : 'border-amber-500/20 hover:border-amber-500/40'
                    }`}
                  placeholder="Your name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => handleFocus('email')}
                  onBlur={() => handleBlur('email')}
                  required
                  className={`w-full px-4 py-3 bg-black border rounded-lg text-white placeholder-gray-500 focus:outline-none transition-all duration-300 ${isFocused.email
                    ? 'border-amber-500 bg-amber-500/5 shadow-[0_0_20px_rgba(212,175,55,0.2)]'
                    : 'border-amber-500/30 hover:border-amber-500/50'
                    }`}
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-white/90 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  onFocus={() => handleFocus('password')}
                  onBlur={() => handleBlur('password')}
                  required
                  className={`w-full px-4 py-3 bg-black border rounded-lg text-white placeholder-gray-500 focus:outline-none transition-all duration-300 ${isFocused.password
                    ? 'border-amber-500 bg-amber-500/5 shadow-[0_0_20px_rgba(212,175,55,0.2)]'
                    : 'border-amber-500/30 hover:border-amber-500/50'
                    }`}
                  placeholder="••••••••"
                />
              </div>

              {/* Confirm Password Field */}
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-white/90 mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  onFocus={() => handleFocus('confirmPassword')}
                  onBlur={() => handleBlur('confirmPassword')}
                  required
                  className={`w-full px-4 py-3 bg-black border rounded-lg text-white placeholder-gray-500 focus:outline-none transition-all duration-300 ${isFocused.confirmPassword
                    ? 'border-amber-500 bg-amber-500/5 shadow-[0_0_20px_rgba(212,175,55,0.2)]'
                    : 'border-amber-500/30 hover:border-amber-500/50'
                    }`}
                  placeholder="••••••••"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-amber-500 text-black px-8 py-3 rounded-lg font-bold hover:bg-amber-400 hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Creating account...' : 'Create Account'}
              </motion.button>
            </form>
          </motion.div>

          {/* Login Link */}
          <motion.div variants={fadeInUp} className="mt-6 text-center">
            <p className="text-sm text-gray-text">
              Already have an account?{' '}
              <Link
                href="/login"
                className="text-amber-400 hover:text-amber-300 transition-colors duration-200 font-medium"
              >
                Sign in
              </Link>
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="border-t border-amber-500/10 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-text text-sm">
            © 2026 Tamjeed's Tasks. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
