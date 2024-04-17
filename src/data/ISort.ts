import { SortDirection } from './SortDirection';

/**
 * 这个接口用来表示排序条件
 *
 * @author dongjak
 * @since 1.0
 * @date 2023/10/7
 */
export interface ISort {
  /**
   * 排序的属性
   */
  readonly property: string;

  /**
   * 排序的方向
   */
  readonly direction: SortDirection;
}
