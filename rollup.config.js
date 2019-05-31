import vue from 'rollup-plugin-vue'
import commonjs from 'rollup-plugin-commonjs';

export default {
    input: 'src/Chartless.vue',
    output: {
      format: 'esm',
      file: 'dist/vue-chartless.js'
    },
    plugins: [
      vue(),
      commonjs()
    ]
  }