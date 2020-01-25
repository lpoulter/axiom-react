module.exports = {
  plugins: [
    require('postcss-preset-env')({
      browsers: [
        ...require('@brandwatch/axiom-materials/browsers'),
        'IE 11',
      ],
      features: {
        autoprefixer: {
          grid: true,
        },
        customProperties: false,
      },
    }),
  ],
};
