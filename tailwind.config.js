import { color } from "framer-motion"
import { plugin } from "postcss"

// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'accent-r': '#FF3B30',
         bg:       '#F5F7FC',
        bg2:      '#EAEEF8',
        bg3:      '#DDE3F0',
        card:     '#FFFFFF',
        ink:      '#0B0F1A',
        ink2:     '#1C2338',
        muted:    '#637191',
        accent:   '#0066FF',
        'accent-g':'#00C48C',
        'accent-r':'#FF3B30',
      },
       boxShadow: {
        card: '0 4px 24px rgba(11,15,26,0.08)',
        lg:   '0 16px 60px rgba(11,15,26,0.12)',
      },
      borderColor: {
        DEFAULT: 'rgba(11,15,26,0.08)',
        strong:  'rgba(11,15,26,0.14)',
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
      },
      backgroundImage: {
        'grad':   'linear-gradient(135deg, #00C48C 0%, #0066FF 100%)',
        'grad-r': 'linear-gradient(135deg, #0066FF 0%, #00C48C 100%)',
      },
    },
  },
  plugins: [],
}



