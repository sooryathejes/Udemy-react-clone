/** @type {import('tailwindcss').Config} */
const generateWidths = () => {
  let widths = {};
  for (let i = 1; i <= 500; i++) {
    widths[`${i}`] = `${i}px`; 
  }
  return widths;
};

const generateSpacing = () => {
  let spacing = {};
  for (let i = 1; i <= 500; i++) {
    spacing[`${i}`] = `${i}px`; 
  }
  return spacing;
};

const generateFontSizes = () => {
  let fontSizes = {};
  for (let i = 1; i <= 100; i++) {
    fontSizes[`${i}`] = [`${i}px`, { lineHeight: "normal" }];
  }
  return fontSizes;
};

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xxs': '320px',
        'xs': '553px',
        'sm': '601px',
        'md': '643px',
        'lg': '701px',
        'xl': '801px',
        'lm': '825px',
        'lx': '921px',
        '2xl': '981px',
        '3xl': '1016px',
        '3lm':'1081px',
        '4xl': '1201px',
      },
      width: generateWidths(),
      height: generateWidths(), 
      padding: generateSpacing(),
      margin: generateSpacing(),
      fontSize: generateFontSizes(),
    },
  },
  plugins: [], 
};
 