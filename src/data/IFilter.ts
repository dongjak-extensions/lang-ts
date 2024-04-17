import { Operator } from './Operator';

/**
 * 过滤器
 *
 * @author dongjak
 * @since 1.0
 * @date 2023/10/7
 */
export interface IFilter {
  /**
   * 过滤的属性
   */
  readonly property: string;

  /**
   * 操作符
   */
  readonly operator: Operator;

  /**
   * 过滤的值
   */
  readonly value: any;

  /**
   * 与下一个过滤器的关系
   */
  readonly and?: IFilter;

  /**
   * 或下一个过滤器的关系
   */
  readonly or?: IFilter;
}
