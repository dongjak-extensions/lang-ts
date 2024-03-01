/**
 * 操作符
 * @author dongjak
 * @since 1.0
 * @date 2023/10/7
 */
export enum Operator {
    /**
     * 模糊匹配
     */
    LIKE = "like",

    /**
     * 等于
     */
    EQUALS = "=",

    /**
     * 不等于
     */
    NOT_EQUALS = "!=",

    /**
     * 大于
     */
    GREATER_THAN = ">",

    /**
     * 大于等于
     */
    GREATER_THAN_OR_EQUAL_TO = ">=",

    /**
     * 小于
     */
    LESS_THAN = "<",

    /**
     * 小于等于
     */
    LESS_THAN_OR_EQUAL_TO = "<=",

    /**
     * 在...之中
     */
    IN = "in",

    /**
     * 不在...之中
     */
    NOT_IN = "nin",

    /**
     * 在...之间
     */
    BETWEEN = "between",

    /**
     * 为空
     */
    IS_NULL = "isNull",

    /**
     * 不为空
     */
    IS_NOT_EMPTY = "isNotEmpty",

    /**
     * 包含
     */
    CONTAINS = "contains",

    /**
     * 不包含
     */
    NOT_CONTAINS = "notContains",

    /**
     * 以...开始
     */
    STARTS_WITH = "startsWith",

    /**
     * 以...结束
     */
    ENDS_WITH = "endsWith",

    /**
     * 正则表达式
     */
    REGEX = "regex"
}

