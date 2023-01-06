module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@data': './src/data',
            '@domain': './src/domain',
            '@presentation': './src/presentation',
            '@main': './src/main',
            '@validation': './src/validation',
          },
        },
      ],
    ],
  };
};
