const plugin = require('tailwindcss/plugin')

// @ts-ignore
module.exports = plugin(function({ addUtilities, e, theme, variants }) {
  const bgImg = {
    '.bg-dark::before': {
      width: '100vw !important',
      height: '100vh !important',
      borderBottomRightRadius: '0 !important',
    },
    '.moon': {
      backgroundImage: "url('src/assets/images/icons/moon.svg')",
    },
    '.sun': {
      backgroundImage: "url('src/assets/images/icons/sun.svg')",
    },
  };

  addUtilities(bgImg, {variants: ["dark"]})
})
