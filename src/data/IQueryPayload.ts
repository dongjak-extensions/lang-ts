import {IFilter} from "./IFilter";
import {ISort} from "./ISort";


/**
 * 这个接口用来表示一个查询载荷
 * @author dongjak
 * @since 1.0
 * @date 2023/10/7
 */
export interface IQueryPayload {

    /**
     * 页码
     */
    pageNo?: number;


    /**
     * 每页大小
     */
    pageSize?: number;


    /**
     * 过滤器
     */
    filters?: IFilter[];


    /**
     * 排序器
     */
    sorts?: ISort[];
}
