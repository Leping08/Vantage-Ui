// const devPresets = ['@vue/babel-preset-app'];
// const buildPresets = ['@babel/preset-env'];
module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"]
  //presets: (process.env.NODE_ENV === 'development' ? devPresets : buildPresets),
};
