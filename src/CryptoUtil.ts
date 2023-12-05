import CryptoJS from 'crypto-js';
const CryptoSecret = '__CryptoJS_Secret__';
export class CryptoUtil{

    /**
     * 加密数据
     * @param data - 数据
     * @param secret - 密钥
     */
  static  encrypt (data: any , secret:string = CryptoSecret ) {
        const newData = JSON.stringify(data);
        return CryptoJS.AES.encrypt(newData, secret).toString();
    }

    /**
     * 解密数据
     * @param cipherText - 密文
     * @param secret - 密钥
     */
    static decrypt(cipherText: string, secret:string = CryptoSecret) {
        const bytes = CryptoJS.AES.decrypt(cipherText, secret);
        const originalText = bytes.toString(CryptoJS.enc.Utf8);
        if (originalText) {
            return JSON.parse(originalText);
        }
        return null;
    }

}
