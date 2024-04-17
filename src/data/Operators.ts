import { Operator } from './Operator';

/**
 * 操作符表达式
 */
const OperatorExpressions: { [key in Operator]: string[] } = {
  [Operator.LIKE]: ['like'],
  [Operator.EQUALS]: ['=', 'eq', 'equals'],
  [Operator.NOT_EQUALS]: ['!=', 'ne', 'notEquals'],
  [Operator.GREATER_THAN]: ['gt', 'greaterThan', '>'],
  [Operator.GREATER_THAN_OR_EQUAL_TO]: ['gte', 'greaterThanOrEqualTo', '>='],
  [Operator.LESS_THAN]: ['lt', 'lessThan', '<'],
  [Operator.LESS_THAN_OR_EQUAL_TO]: ['lte', 'lessThanOrEqualTo', '<='],
  [Operator.IN]: ['in'],
  [Operator.NOT_IN]: ['nin', 'notIn'],
  [Operator.BETWEEN]: ['between'],
  [Operator.IS_NULL]: ['isNull'],
  [Operator.IS_NOT_EMPTY]: ['isNotEmpty'],
  [Operator.CONTAINS]: ['contains'],
  [Operator.NOT_CONTAINS]: ['notContains'],
  [Operator.STARTS_WITH]: ['startsWith'],
  [Operator.ENDS_WITH]: ['endsWith'],
  [Operator.REGEX]: ['regex']
};

/**
 * 操作符工具类
 * @author dongjak
 * @since 1.0
 * @date 2023/10/7
 */
export class Operators {
  /**
   * 从字符串中解析操作符
   * @param operator
   */
  static fromString(operator: string): Operator {
    for (let key in OperatorExpressions) {
      if (OperatorExpressions[key as Operator].includes(operator)) {
        return key as Operator;
      }
    }
    throw new Error(`Unsupported operator: ${operator}`);
  }
}
