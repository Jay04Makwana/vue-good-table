const { version } = require('./package');

const banner = `/**
 * vue-good-table v${version}
 * (c) 2018-present xaksis <shay@crayonbits.com>
 * https://github.com/xaksis/vue-good-table
 * Released under the MIT License.
 */
`;

module.exports = {
  name: 'vue-table-draggable',
  banner,
  format: [
    'cjs',
    'es',
    'umd',
    'umd-min',
  ],
  compress: 'umd',
  plugins: ['vue'],
  vue: {
    css: 'dist/vue-table-draggable.css',
    cssSourceMap: false,
  },
  buble: {
    transforms: {
      generator: true,
      dangerousForOf: true,
    },
  },
};
