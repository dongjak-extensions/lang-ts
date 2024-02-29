export default class RandomUtil {


    /**
     * 生成一个随机的整数
     * @param end 最大值
     * @param start 最小值,默认为0
     */
    static nextInt = (end: number, start = 0) => parseInt((Math.random() * (end - start) + start).toFixed(0))
}
