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
    <footer className="w-full border-t border-primary/10 bg-card/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Copyright / Brand */}
        <div className="flex flex-col items-center sm:items-start">
          <div className="text-xs text-gray-text mb-1">
            © 2026 <span className="text-primary font-bold">Taskify</span>. All rights reserved.
          </div>
          <div className="text-[10px] text-gray-text/60">
            Crafted with ✨ by <span className="text-primary/80 font-medium">Muhammad Tamjeed Hussain</span>
          </div>
        </div>

        {/* Authenticated user section with logout */}
        <div className="flex items-center gap-6">
          {isAuthenticated && (
            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-text">
                {user?.name || user?.email?.split('@')[0]}
              </span>
              <motion.button
                onClick={handleLogout}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-4 py-1.5 text-xs rounded-lg bg-primary/10 text-primary
                  hover:bg-primary/20 transition-all duration-200
                  border border-primary/20 hover:border-primary/40 font-medium"
              >
                Logout
              </motion.button>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
