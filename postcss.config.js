module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      viewportWidth: 1920,
      unitPrecision: 3,
      viewportUnit: 'vw',
      selectorBlackList: ['.ignore', '.hairlines', '.am'],
      minPixelValue: 1,
      propList: ['!*'],
      mediaQuery: false,
    },
  },
}
