// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      keyframes: {
        shake: {
          '0%': { transform: 'translate(0)' },
          '25%': { transform: 'translate(-10px)' },
          '50%': { transform: 'translate(10px)' },
          '75%': { transform: 'translate(-10px)' },
          '100%': { transform: 'translate(0)' },
        },
      },
      animation: {
        shake: 'shake 0.5s ease-in-out',
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.range-thumb': {
          '&::-webkit-slider-thumb': {
            appearance: 'none',
            width: '16px',
            height: '16px',
            backgroundColor: '#50505d',
            borderRadius: '50%',
            cursor: 'pointer',
          },
        },
      });
    },
  ],
};
