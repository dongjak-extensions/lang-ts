import {IPage} from "./IPage";

/**
 * 分页工具类
 * @author dongjak
 * @since 1.0
 * @date 2023/10/7
 */
export class Pages {
    /**
     * 空页面工厂函数
     * @template T 数据类型
     * @returns {IPage<T>} 空页面对象
     */
    static emptyPage<T>(): IPage<T> {
        return {
            totalPages: 0,
            totalElements: 0,
            pageNo: 1,
            pageSize: 10,
            hasNext: false,
            data: []
        };
    }
}
