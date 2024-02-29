// Import necessary modules using ES6 syntax
import { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme'; // Use ES6 import syntax for default imports
import colors from 'tailwindcss/colors'; // Import 'colors' directly
import { default as flattenColorPalette } from 'tailwindcss/lib/util/flattenColorPalette'; // Import 'flattenColorPalette' directly

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme('colors'));
  const newVars = Object.fromEntries(Object.entries(allColors).map(([key, value]) => [`--${key}`, value]));

  addBase({
    ':root': newVars,
  });
}

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Extend or override Tailwind colors as needed
        teal: colors.teal,
        cyan: colors.cyan,
        rose: colors.rose,
        gray: colors.coolGray,
        // Add custom colors
        custom: {
          light: '#f0f4f8',
          dark: '#1a202c',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        spotlight: 'spotlight 2s ease .75s 1 forwards',
      },
      keyframes: {
        spotlight: {
          '0%': {
            opacity: '0',
            transform: 'translate(-72%, -62%) scale(0.5)',
          },
          '100%': {
            opacity: '1',
            transform: 'translate(-50%,-40%) scale(1)',
          },
        },
      },
    },
  },
  plugins: [
    // Add the custom plugin to the configuration
    addVariablesForColors,
  ],
};

export default config;
