import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        inter: ['var(--inter-font)'],
      },
      fontSize: {
        'responsive-10-12': ['var(--text-responsive-10-12)', 'var( --default-line-height)'],
        'responsive-12-14': ['var(--text-responsive-12-14)', 'var( --default-line-height)'],
        'responsive-14-18': ['var(--text-responsive-14-18)', 'var( --default-line-height)'],
        'responsive-18-20': ['var(--text-responsive-18-20)', 'var( --default-line-height)'],
        'responsive-20-24': ['var(--text-responsive-20-24)', 'var( --default-line-height)'],
        'responsive-24-28': ['var(--text-responsive-24-28)', 'var( --default-line-height)'],
        'responsive-28-32': ['var(--text-responsive-28-32)', 'var( --default-line-height)'],
      },
    },
  },
  plugins: [],
} satisfies Config;
