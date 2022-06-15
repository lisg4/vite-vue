/**
* https://www.cnblogs.com/zxin/archive/2013/01/26/2877765.html
*/
export default {
    /** 手机号 */
    mobilePhone: /^[1][3,4,5,6,7,8,9][0-9]{9}$/,
    /** 电话 */
    telephone: /\d{3}-\d{8}|\d{4}-\d{7}/,
    /** 邮箱 */
    email: /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/,
    /** 身份证 */
    cardID: /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/,
    /** 网址 url */
    url: /^((https|http|ftp|rtsp|mms)?:\/\/)[^\s]+/,
    /** 数字 */
    number: {
        /** 数字  */
        ordinary: /^[0-9]*$/,
        /** 正数 */
        just: /[1-9]\d*/,
        /** 负数 */
        negative: /-[1-9]\d*/,
        /** 价格 */
        price:/(^[1-9]\d*(\.\d{1,2})?$)|(^0\.(\d{1,2})?$)/,
        openBank:/^[-0-9]+$/
        // /^[0-9]+[-]?[0-9]+$/
    },
    /** 中文、英文、数字但不包括下划线等符号 */
    character: /^[\u4E00-\u9FA5A-Za-z0-9]+$/,
    isHtml: /<(S*?)[^>]*>.*?|<.*? \/>/,
    /** 英文 */
    english: /^[A-Za-z]+$/,
    /** 英文和数字 */
    englishFigures: /^[A-Za-z0-9]+$/,
    /** 中文字符 */
    chinese: /[\u4e00-\u9fa5]/,
    img: /\.(gif|jpg|jpeg|png|GIF|JPEG|JPG|PNG)$/,
    https: /^https:\/\//,
}