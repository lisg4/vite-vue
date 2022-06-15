import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import compressDist, { CompressOptions } from 'rollup-plugin-compress-dist';
import proxy from './config/setuproxy'

const compressOpts: CompressOptions<'tar'> = {
   type: 'tar',
   archiverName: 'dist.tar',
   sourceName: 'dist',
 };


// https://vitejs.dev/config/
export default defineConfig({
  base:'./',
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    // [compressDist(compressOpts)]
  ],
  resolve:{
    alias: {
      '@': resolve(__dirname, 'src'),
      'public': resolve(__dirname, 'public'),
    }
  },
  server: {
    proxy,
    host: '0.0.0.0'
  }
})
