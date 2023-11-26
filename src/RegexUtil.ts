/**
 * 正则表达式工具类
 */
export class RegexUtil {
    /** 手机号码正则 */
    static  PHONE =
        /^[1](([3][0-9])|([4][01456789])|([5][012356789])|([6][2567])|([7][0-8])|([8][0-9])|([9][012356789]))[0-9]{8}$/;

    /** 邮箱正则 */
    static EMAIL = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

    /** 密码正则(密码为6-18位数字/字符/符号的组合) */
    static PWD =
        /^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)]|[()])+$)(?!^.*[\u4E00-\u9FA5].*$)([^(0-9a-zA-Z)]|[()]|[a-z]|[A-Z]|[0-9]){6,18}$/;

    /** 6位数字验证码正则 */
    static CODE_SIX = /^\d{6}$/;

    /** 4位数字验证码正则 */
    static CODE_FOUR = /^\d{4}$/;

    /** url链接正则 */
    static URL =
        /(((^https?:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[\w]*))?)$/;

}
