import {IQueryPayload} from "./IQueryPayload";
import {IFilter} from "./IFilter";
import {ISort} from "./ISort";


/**
 * 查询载荷工具类
 *
 * @author dongjak
 * @since 1.0
 * @date 2023/10/7
 */
export class QueryPayloads {

    /**
     * 创建一个查询第一页的载荷
     */
    static firstPage(): IQueryPayload {
        return {
            pageNo: 1,
            pageSize: 10,
            filters: [],
            sorts: []
        }
    }

    /**
     *  构建一个分页查询载荷
     * @param pageNo  页码
     * @param pageSize 每页大小
     * @param filters 过滤器
     * @param sorts 排序器
     */
    static ofPage(pageNo: number, pageSize: number, filters: IFilter[] = [], sorts: ISort[] = []): IQueryPayload {
        return {
            pageNo: pageNo,
            pageSize: pageSize,
            filters: filters,
            sorts: sorts
        }
    }

    /**
     * 构建一个不分页的查询载荷
     * @param filters  过滤器
     * @param sorts     排序器
     */
    static of(filters: IFilter[] = [], sorts: ISort[] = []): IQueryPayload {
        return {
            filters: filters,
            sorts: sorts
        }
    }
}
