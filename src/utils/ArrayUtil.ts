import {RandomUtil} from "./RandomUtil";

export default class ArrayUtil {
    /**
     * 根据指定的键分组
     *
     * ```typescript
     * const array = ExtArray.from([{  name: 'a', age: 1 }, { name: 'b', age: 2 }]);
     * const result = array.groupBy('age');
     * // { 1: [{  name: 'a', age: 1 }], 2: [{ name: 'b', age: 2 }] }
     * ```
     *
     * @param arr  数组
     * @param groupKey  分组的键
     */
    static groupBy = <T, K extends keyof T>(arr: T[], groupKey: K) => {
        const map = new Map<T[K], T[]>();
        arr.forEach(item => {
            const value = item[groupKey];
            if (map.has(value)) {
                map.get(value)?.push(item);
            } else {
                map.set(value, [item]);
            }
        });
        return map;
    }

    /**
     * 将数组中的元素按照`parentField`进行分组,并将分组后的元素作为父元素的`childrenField`
     *
     * ### 示例
     * ```typescript
     * const array = ExtArray.from([
     * { id: 1, parentId: null, name: 'a' },
     * { id: 2, parentId: null, name: 'b' },
     * { id: 3, parentId: 1, name: 'c' },
     * { id: 4, parentId: 2, name: 'd' },
     * { id: 5, parentId: 2, name: 'e' }]);
     *
     * const result = array.nestItems();
     * //  [ { id: 1, parentId: null, name: 'a', children: [{ id: 3, parentId: 1, name: 'c' }] },
     * //     { id: 2, parentId: null, name: 'b', children: [{ id: 4, parentId: 2, name: 'd' }, { id: 5, parentId: 2, name: 'e' }] } ]
     *
     *  ```
     *
     * @param arr  数组
     * @param idField id字段
     * @param parentField 父id字段
     * @param childrenField 子元素字段
     */
    static transformItemsToTree = <T, K extends keyof T>(arr: T[], idField: K, parentField: K, childrenField: K) => {
        return arr.reduce((result: T[], item) => {
            if (item[parentField]) {
                const parent = result.find(i => i[idField] === item[parentField]);
                if (parent) {
                    parent[childrenField] = (parent[childrenField] as NonNullable<T>[K]) || ([] as NonNullable<T>[K]);
                    (parent[childrenField] as Array<T>).push(item);
                }
            } else {
                result.push(item);
            }
            return result;
        }, [])
    }


    /**
     * 从数组中随机取出一个元素
     * @param arr 数组
     */
    static random = <T>(arr: T[]) => {
        return arr[RandomUtil.nextInt(arr.length)]
    }


    /**
     * 如果数组长度为1,则返回第一个元素,否则返回数组本身
     * @param arr
     */
    static getSingleOrArray<T>(arr: T[]): T | T[] {
        if (arr.length === 1) {
            return arr[0]
        }
        return arr
    }


    /**
     * 判断是否是一个有效的数组
     * @param arr
     */
    static isValidArray = (arr: any[]) => {
        return arr && Array.isArray(arr) && arr.length > 0
    }
}


