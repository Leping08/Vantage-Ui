module.exports = {
  darkMode: false,
  purge: {
    content: [
      './src/**/*.html',
      './src/**/*.vue',
      './src/**/*.jsx',
      './dev/*.vue',
    ],
    options: {
      safelist: [],
    }
  },
  theme: {
    extend: {}
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
};
