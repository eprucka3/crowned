module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['transform-export-extensions', '@babel/plugin-proposal-export-namespace-from'],
  };
};
