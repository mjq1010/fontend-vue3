import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 解决运行时路由组件不显示的问题
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js' // 定义vue的别名，如果使用其他的插件，可能会用到别名
    }
  },
  server: {
    proxy: {
      // 选项写法
      '/api': {
        target: 'https://pvp.qq.com', // 所要代理的目标地址
        rewrite: (path) => path.replace(/^\/api/, ''), // 重写传过来的path路径，比如 `/api/index/1?id=10&name=zs`（注意:path路径最前面有斜杠（/），因此，正则匹配的时候不要忘了是斜杠（/）开头的；选项的 key 也是斜杠（/）开头的）
        changeOrigin: true // true/false, Default: false - changes the origin of the host header to the target URL
      }
    }
  }
});
