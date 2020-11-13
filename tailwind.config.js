module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    content: [
      './src/**/*.html',
      './src/**/*.vue',
      './src/**/*.jsx',
      './dev/*.vue',
    ],
    options: {
      whitelist: [],
    }
  },
  theme: {
    extend: {}
  },
  variants: {},
  plugins: [require("@tailwindcss/ui")]
};
