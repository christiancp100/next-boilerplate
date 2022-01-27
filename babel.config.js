module.exports = function (api) {
  api.cache(true);
  return {
    plugins: [
      '@babel/plugin-syntax-jsx',
      [
        'module-resolver',
        {
          alias: {
            components: './src/components',
            api: './src/pages/api',
            errors: './src/errors',
            context: './src/context',
            hooks: './src/hooks',
            utils: './src/utils',
            pages: './src/pages',
            public: './public',
            public: './styles',
            root: './',
          },
        },
      ],
    ],
    presets: ['@babel/preset-react', 'next/babel'],
  };
};
