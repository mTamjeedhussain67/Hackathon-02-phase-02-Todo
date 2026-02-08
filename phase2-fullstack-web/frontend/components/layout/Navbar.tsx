/**
 * Navbar Component - Shared navigation bar for all pages
 * Includes AI Chat button that opens the half-screen drawer
 * Phase 3: Consistent navigation across the application
 */

'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useAuth } from '@/lib/context/AuthContext';

interface NavbarProps {
  showDashboardLink?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  showDashboardLink = true,
}) => {
  const pathname = usePathname();
  const { isAuthenticated, user } = useAuth();

  // const handleLogout = async () => {
  //   await logout();
  //   onLogout?.();
  // };

  const isActive = (path: string) => pathname === path;

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full px-4 sm:px-6 lg:px-8 py-4 border-b border-primary/20 bg-background/80 backdrop-blur-sm sticky top-0 z-30"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo - hide title on mobile to save space */}
        <Link href="/" className="flex items-center space-x-2 group">
          <motion.div
            whileHover={{ rotate: 10, scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 400 }}
            className="text-primary"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </motion.div>
          <span className="hidden sm:inline text-lg font-bold text-white group-hover:text-primary transition-colors">Taskify</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center space-x-1 sm:space-x-4">
          {/* Main nav links */}
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`relative px-2 sm:px-3 py-2 text-sm font-medium transition-colors duration-200 group ${isActive(href)
                ? 'text-primary'
                : 'text-gray-400 hover:text-primary'
                }`}
            >
              {label}
              <span
                className={`absolute -bottom-0.5 left-2 right-2 h-0.5 bg-primary transition-all duration-300 ${isActive(href) ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}
              />
            </Link>
          ))}

          {/* Dashboard link (if authenticated and enabled) */}
          {isAuthenticated && showDashboardLink && (
            <Link
              href="/dashboard"
              className={`relative px-2 sm:px-3 py-2 text-sm font-medium transition-colors duration-200 group ${isActive('/dashboard')
                ? 'text-primary'
                : 'text-gray-400 hover:text-primary'
                }`}
            >
              Dashboard
              <span
                className={`absolute -bottom-0.5 left-2 right-2 h-0.5 bg-primary transition-all duration-300 ${isActive('/dashboard') ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}
              />
            </Link>
          )}


          {/* Auth buttons - Logout moved to Footer */}
          {isAuthenticated ? (
            <div className="flex items-center gap-2 ml-2">
              {/* User indicator - logout is in footer */}
              <span className="hidden md:inline text-xs text-gray-400 px-2 py-1 bg-primary/10 rounded-md border border-primary/20">
                {user?.name || user?.email?.split('@')[0]}
              </span>
            </div>
          ) : (
            <div className="flex items-center gap-2 ml-2">
              <Link
                href="/login"
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${isActive('/login')
                  ? 'bg-primary/20 text-primary border border-primary/30'
                  : 'text-gray-400 hover:text-white'
                  }`}
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="px-4 py-2 text-sm rounded-lg bg-primary text-black font-semibold hover:bg-primary-light transition-colors duration-200 shadow-lg shadow-primary/20"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
