const systemApi = 'https://b2badmin.lenovo.com.cn/api'
const proxy = {
    '/api': {
        target: systemApi,
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/api/, '')
      }
}

export default proxy