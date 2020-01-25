module.exports = {
  plugins: [
    require('postcss-preset-env')({
      browsers: [
        ...require('@brandwatch/axiom-materials/browsers'),
      ],
      features: {
        customProperties: false,
      },
    }),
  ],
};
