module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    maxWidth:{
      '1/2':'50%',
      '1/3':'33%'
    },
    extend: {
      colors: {
        primary: '#fff',
        secondary: {
          100: "#212121",
          200: '#07f8ff',
          300: '#b95dfa',
          400: '#52ff00',
          500:'#ee18b6'
        },
        accent:{
          100: '#351431',
          200:'#823c3a',
          300:'#f5a578',
          400: '#002d50',
          500: '#01778c',
          600: '#52b69a',
          700: '#818588',
          800:'#000'
        }
      },
      backgroundImage: {
        'split-100': "linear-gradient(to bottom, #351431 50% , white 50%);",
        'split-200': "linear-gradient(to bottom, #823c3a 50% , white 50%);",
        'split-300': "linear-gradient(to bottom, #f5a578 50% , white 50%);",
        'split-400': "linear-gradient(to bottom, #002d50 50% , white 50%);",
        'split-500': "linear-gradient(to bottom, #01778c 50% , white 50%);",
        'split-600': "linear-gradient(to bottom, #52b69a 50% , white 50%);",
        'split-700': "linear-gradient(to bottom, #818588 50% , white 50%);",
        'split-800': "linear-gradient(to bottom, #000 50% , white 50%);",

      },
      fontFamily: {
        body: ['Roboto Slab'],
        accent: ['Source Code Pro']
      },
      boxShadow: {
        '3xl': '0 30px 55px -12px rgb(0 0 0 / 0.25)',
        '4xl': '0 40px 60px -12px rgb(0 0 0 / 0.25)'
      }
    },
    textSize:{
      'im':'0.55rem',
    },
    textIndent: { // defaults to {}
      '1': '0.25rem',
      '2': '0.5rem',
    },
    textShadow: { // defaults to {}
      'default': '0 2px 5px rgba(0, 0, 0, 0.5)',
      'lg': '0 2px 10px rgba(0, 0, 0, 0.5)',
    },
    textDecorationStyle: { // defaults to these values
      'solid': 'solid',
      'double': 'double',
      'dotted': 'dotted',
      'dashed': 'dashed',
      'wavy': 'wavy',
    },
    textDecorationColor: { // defaults to theme => theme('colors')
      'red': '#f00',
      'green': '#0f0',
      'blue': '#00f',
    },
    fontVariantCaps: { // defaults to these values
      'normal': 'normal',
      'small': 'small-caps',
      'all-small': 'all-small-caps',
      'petite': 'petite-caps',
      'unicase': 'unicase',
      'titling': 'titling-caps',
    },
    fontVariantNumeric: { // defaults to these values
      'normal': 'normal',
      'ordinal': 'ordinal',
      'slashed-zero': 'slashed-zero',
      'lining': 'lining-nums',
      'oldstyle': 'oldstyle-nums',
      'proportional': 'proportional-nums',
      'tabular': 'tabular-nums',
      'diagonal-fractions': 'diagonal-fractions',
      'stacked-fractions': 'stacked-fractions',
    },
    fontVariantLigatures: { // defaults to these values
      'normal': 'normal',
      'none': 'none',
      'common': 'common-ligatures',
      'no-common': 'no-common-ligatures',
      'discretionary': 'discretionary-ligatures',
      'no-discretionary': 'no-discretionary-ligatures',
      'historical': 'historical-ligatures',
      'no-historical': 'no-historical-ligatures',
      'contextual': 'contextual',
      'no-contextual': 'no-contextual',
    },
    textRendering: { // defaults to these values
      'rendering-auto': 'auto',
      'optimize-legibility': 'optimizeLegibility',
      'optimize-speed': 'optimizeSpeed',
      'geometric-precision': 'geometricPrecision'
    },
  },

  variants: { // all the following default to ['responsive']
    textIndent: ['responsive'],
    textShadow: ['responsive'],
    textDecorationStyle: ['responsive'],
    textDecorationColor: ['responsive'],
    ellipsis: ['responsive'],
    hyphens: ['responsive'],
    kerning: ['responsive'],
    textUnset: ['responsive'],
    fontVariantCaps: ['responsive'],
    fontVariantNumeric: ['responsive'],
    fontVariantLigatures: ['responsive'],
    textRendering: ['responsive'],
  },

  plugins: [ require('@tailwindcss/typography')({
    // all these options default to the values specified here
    ellipsis: true,         // whether to generate ellipsis utilities
    hyphens: true,          // whether to generate hyphenation utilities
    kerning: true,          // whether to generate kerning utilities
    textUnset: true,        // whether to generate utilities to unset text properties
    componentPrefix: 'c-',  // the prefix to use for text style classes
  }),],
}
