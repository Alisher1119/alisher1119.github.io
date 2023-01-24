const plugin = require('tailwindcss/plugin')

// @ts-ignore
module.exports = plugin(function({ addUtilities, e, theme, variants }) {
  const font = {};
  for (let i = 10; i < 73; i ++) {
    font[`.font-${i}`] = {
      fontSize: `${i}px !important;`
    }
  };

  addUtilities(font, {variants: ['sm', 'md', 'lg', 'xl']})
})
