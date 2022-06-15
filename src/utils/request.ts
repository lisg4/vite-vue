import axios from 'axios'
import { ElMessage } from 'element-plus'

axios.interceptors.request.use((config)=>{
    if(config.headers) config.headers.address = 1
    return config
},(err)=>{
    Promise.reject(err)
})

axios.interceptors.response.use((res)=>{
    let data = res.data;
    return data;
},(err)=>{
    ElMessage.error(err.message)
    Promise.reject(err)
})

const request = axios.request

export default request