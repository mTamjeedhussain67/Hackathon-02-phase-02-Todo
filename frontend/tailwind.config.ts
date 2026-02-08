import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#F4D03F', // Lighter gold/yellow
          DEFAULT: '#D4AF37', // Classic metallic gold
          dark: '#996515', // Deep golden/brown accent
        },
        success: '#10B981',
        error: '#EF4444',
        'gray-text': '#A0A0A0', // Muted silver/gray text
        border: '#2C2514', // Very dark gold-tinted border
        background: '#050505', // Deep classy black
        card: '#0F0F0F', // Slightly lighter black for surfaces
      },
      spacing: {
        '4': '4px',
        '8': '8px',
        '12': '12px',
        '16': '16px',
        '20': '20px',
        '24': '24px',
      },
      fontSize: {
        'xs': '12px',
        'sm': '14px',
        'base': '16px',
        'lg': '18px',
        'xl': '20px',
        '2xl': '24px',
      },
      borderRadius: {
        'DEFAULT': '8px',
      },
      transitionDuration: {
        '100': '100ms',
        '200': '200ms',
        '300': '300ms',
      },
      minHeight: {
        'touch': '44px',
      },
      minWidth: {
        'touch': '44px',
      },
    },
  },
  plugins: [],
};

export default config;
