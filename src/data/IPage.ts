/**
 * 分页接口，用于描述分页数据的结构
 * @template T 分页数据的类型
 * @author dongjak
 * @since 1.0
 * @date 2023/10/7
 */
export interface IPage<T> {
  /**
   * 总页数
   */
  totalPages: number;

  /**
   * 总元素数量
   */
  totalElements: number;

  /**
   * 当前页码
   */
  pageNo: number;

  /**
   * 每页元素数量
   */
  pageSize: number;

  /**
   * 当前页的数据
   */
  data: T[];

  /**
   * 是否有下一页
   */
  hasNext: boolean;

  /**
   * 当前页的数据是否正在加载中
   */
  isLoading?: boolean;
}
