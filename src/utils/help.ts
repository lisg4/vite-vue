import { ElMessage } from 'element-plus'

/**获取url路径传参 */
export const getQueryString = (name:string, params:string) => {
    const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
    const r = params.substr(1).match(reg)
    if (r != null) {
      return unescape(r[2])
    }
    return ''
  }
/**复制 */
export const clickCopy = (str: string)=>{
    const save = function(e: ClipboardEvent){
        e.clipboardData?.setData('text/plain', str);
        e.preventDefault();
    }
    document.addEventListener('copy', save);
    document.execCommand('copy');
    document.removeEventListener('copy',save);
    ElMessage.success('复制成功')
}