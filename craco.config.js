const { resolve } = require('node:path')

module.exports = {
  webpack: {
    alias: {
      '@': resolve('src'),
    },
  },
  style: {
    postcss: {
      mode: 'file',
    },
  },
}
