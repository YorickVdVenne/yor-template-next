import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['var(--font-roboto)', 'sans-serif'],
        'roboto-mono': ['var(--font-roboto-mono)', 'monospace']
      },
      colors: {
        primary: {
          50: 'var(--color-primary-50)',
          100: 'var(--color-primary-100)',
          200: 'var(--color-primary-200)',
          300: 'var(--color-primary-300)',
          400: 'var(--color-primary-400)',
          500: 'var(--color-primary-500)',
          600: 'var(--color-primary-600)',
          700: 'var(--color-primary-700)',
          800: 'var(--color-primary-800)',
          900: 'var(--color-primary-900)'
        },

        secondary: {
          50: 'var(--color-secondary-50)',
          100: 'var(--color-secondary-100)',
          200: 'var(--color-secondary-200)',
          300: 'var(--color-secondary-300)',
          400: 'var(--color-secondary-400)',
          500: 'var(--color-secondary-500)',
          600: 'var(--color-secondary-600)',
          700: 'var(--color-secondary-700)',
          800: 'var(--color-secondary-800)',
          900: 'var(--color-secondary-900)'
        },

        /* State Colors */
        success: {
          light: 'var(--color-success-light)',
          main: 'var(--color-success-main)',
          dark: 'var(--color-success-dark)'
        },
        error: {
          light: 'var(--color-error-light)',
          main: 'var(--color-error-main)',
          dark: 'var(--color-error-dark)'
        },
        warning: {
          light: 'var(--color-warning-light)',
          main: 'var(--color-warning-main)',
          dark: 'var(--color-warning-dark)'
        },
        info: {
          light: 'var(--color-info-light)',
          main: 'var(--color-info-main)',
          dark: 'var(--color-info-dark)'
        }
      }
    }
  },
  plugins: []
};
export default config;
