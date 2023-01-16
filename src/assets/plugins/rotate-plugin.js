const plugin = require('tailwindcss/plugin')

// @ts-ignore
module.exports = plugin(function({ addUtilities, e, theme, variants }) {
  const rotate = {
    '.rotate': {
      transform: "rotate(360deg)",
    },
  };

  addUtilities(rotate, {variants: ["dark"]})
})
