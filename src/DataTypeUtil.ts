  const dataTypeLabels: { [K in  DataTypeStringKey]:  DataTypeString<K> } = {
    string: '[object String]',
    number: '[object Number]',
    boolean: '[object Boolean]',
    null: '[object Null]',
    undefined: '[object Undefined]',
    symbol: '[object Symbol]',
    bigInt: '[object BigInt]',
    object: '[object Object]',
    function: '[object Function]',
    array: '[object Array]',
    date: '[object Date]',
    regExp: '[object RegExp]',
    promise: '[object Promise]',
    set: '[object Set]',
    map: '[object Map]',
    file: '[object File]'
};
export class DataTypeUtil{

    /**
     * 获取数据类型字符串
     * @param value
     */
    static getDataTypeString<K extends  DataTypeStringKey>(value: unknown) {
        return Object.prototype.toString.call(value) as  DataTypeString<K>;
    }

    /**
     * 是否是数字
     * @param value
     */
    static isNumber<T extends number>(value: T | unknown): value is T {
        return DataTypeUtil.getDataTypeString(value) === dataTypeLabels.number;
    }

    /**
     * 是否是字符串
     * @param value
     */
    static isString<T extends string>(value: T | unknown): value is T {
        return DataTypeUtil.getDataTypeString(value) === dataTypeLabels.string;
    }

    /**
     * 是否是布尔值
     * @param value
     */
  static isBoolean<T extends boolean>(value: T | unknown): value is T {
        return DataTypeUtil.getDataTypeString(value) === dataTypeLabels.boolean;
    }

    /**
     * 是否是null
     * @param value
     */
    static isNull<T extends null>(value: T | unknown): value is T {
        return DataTypeUtil.getDataTypeString(value) === dataTypeLabels.null;
    }



    /**
     * 是否是undefined
     * @param value
     */
    static isUndefined<T extends undefined>(value: T | unknown): value is T {
        return DataTypeUtil.getDataTypeString(value) === dataTypeLabels.undefined;
    }

    /**
     * 是否是symbol
     * @param value
     */
    static isSymbol<T extends symbol>(value: T | unknown): value is T {
        return DataTypeUtil.getDataTypeString(value) === dataTypeLabels.symbol;
    }

    /**
     * 是否是bigint
     * @param value
     */
    static isBigInt<T extends bigint>(value: T | unknown): value is T {
        return DataTypeUtil.getDataTypeString(value) === dataTypeLabels.bigInt;
    }

    /**
     * 是否是对象
     * @param value
     */
    static isObject<T extends Record<string, any>>(value: T | unknown): value is T {
        return DataTypeUtil.getDataTypeString(value) === dataTypeLabels.object;
    }

    /**
     * 是否是数组
     * @param value
     */
    static isArray<T extends any[]>(value: T | unknown): value is T {
        return DataTypeUtil.getDataTypeString(value) === dataTypeLabels.array;
    }

    /**
     * 是否是函数
     * @param value
     */
    static isFunction<T extends (...args: any[]) => any | void>(value: T | unknown): value is T {
        return DataTypeUtil.getDataTypeString(value) === dataTypeLabels.function;
    }

    /**
     * 是否是日期
     * @param value
     */
    static isDate<T extends Date>(value: T | unknown): value is T {
        return DataTypeUtil.getDataTypeString(value) === dataTypeLabels.date;
    }

    /**
     * 是否是正则
     * @param value
     */
    static isRegExp<T extends RegExp>(value: T | unknown): value is T {
        return DataTypeUtil.getDataTypeString(value) === dataTypeLabels.regExp;
    }

    /**
     * 是否是Promise
     * @param value
     */
    static isPromise<T extends Promise<any>>(value: T | unknown): value is T {
        return DataTypeUtil.getDataTypeString(value) === dataTypeLabels.promise;
    }

    /**
     * 是否是Set
     * @param value
     */
    static isSet<T extends Set<any>>(value: T | unknown): value is T {
        return DataTypeUtil.getDataTypeString(value) === dataTypeLabels.set;
    }


    /**
     * 是否是Map
     * @param value
     */
    static isMap<T extends Map<any, any>>(value: T | unknown): value is T {
        return DataTypeUtil.getDataTypeString(value) === dataTypeLabels.map;
    }


    /**
     * 是否是文件
     * @param value
     */
    static isFile<T extends File>(value: T | unknown): value is T {
        return DataTypeUtil.getDataTypeString(value) === dataTypeLabels.file;
    }

}
interface DataType {
    number: number;
    string: string;
    boolean: boolean;
    null: null;
    undefined: undefined;
    symbol: symbol;
    bigInt: bigint;
    object: Record<string, any>;
    array: Array<any>;
    function: (...args: any[]) => any | void;
    date: Date;
    regExp: RegExp;
    promise: Promise<any>;
    set: Set<any>;
    map: Map<any, any>;
    file: File;
}

type DataTypeStringKey = keyof DataType;
type DataTypeString<T extends DataTypeStringKey = DataTypeStringKey> = `[object ${Capitalize<T>}]`;
