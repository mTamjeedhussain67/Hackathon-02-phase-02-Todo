'use client';

import { useAuth } from '@/lib/context/AuthContext';
import { motion } from 'framer-motion';

export default function Footer() {
  const { isAuthenticated, logout, user } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <footer className="w-full border-t border-amber-500/10 bg-card/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Copyright / Brand */}
        <div className="text-xs text-gray-text flex items-center gap-1">
          <span className="hidden sm:inline">© 2026 Muhammad Tamjeed Hussain. </span>
          <span className="flex items-center gap-1">Built with <span className="text-amber-500">⚡</span></span>
        </div>

        {/* Authenticated user section with logout */}
        {isAuthenticated && (
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-text">
              {user?.name || user?.email?.split('@')[0]}
            </span>
            <motion.button
              onClick={handleLogout}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-3 py-1.5 text-xs rounded-lg bg-amber-500/10 text-amber-500
                hover:bg-amber-500/20 hover:text-amber-400 transition-all duration-200
                border border-amber-500/20 hover:border-amber-500/30 font-medium"
            >
              Logout
            </motion.button>
          </div>
        )}
      </div>
    </footer>
  );
}