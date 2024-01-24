import { resolve } from 'node:path'

module.exports = {
  webpack: {
    alias: {
      '@': resolve('src'),
    },
  },
}
