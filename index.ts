import {ArrayUtil} from "./src/ArrayUtil";
import {MapUtil} from "./src/MapUtil";

export * from './src/ArrayUtil';
export * from './src/RandomUtil';
export * from './src/MapUtil';
export * from './src/RegexUtil';
export * from './src/CryptoUtil';
export * from './src/StorageUtil'
export * from './src/ColorUtil'
export {LocalStorage} from './src/StorageUtil'
if (!Array.prototype.groupBy$ext) {
    Array.prototype.groupBy$ext = function <T, K extends keyof T>(this: T[], key: K): Map<T[K], T[]> {
        return ArrayUtil.groupBy(this, key)
    }
}
if (!Array.prototype.transformItemsToTree$ext) {

    // @ts-ignore
    Array.prototype.transformItemsToTree$ext = function <T, K extends keyof T>(this: T[], idField: K = "id", parentField: K = "parentId", childrenField: K = "children"): T[] {
        return ArrayUtil.transformItemsToTree(this, idField, parentField, childrenField)
    }
}
if (!Array.prototype.random$ext) {

    Array.prototype.random$ext = function <T>(this: T[]): T {
        return ArrayUtil.random(this)
    }
}

if (!Array.prototype.getSingleOrArray$ext) {

    Array.prototype.getSingleOrArray$ext = function <T>(this: T[]): T | T[] {
        return ArrayUtil.getSingleOrArray(this)
    }
}

if (!Map.prototype.sortByKeys$ext) {
    // @ts-ignore
    Map.prototype.sortByKeys$ext = function <K, V>(this: Map<K, V>, compareFn: (a: K, b: K) => number = (a, b) => a - b): Map<K, V> {
        return MapUtil.sortByKeys(this, compareFn)
    }
}
if (!Map.prototype.sortByKeysDesc$ext) {
    Map.prototype.sortByKeysDesc$ext = function <K, V>(this: Map<K, V>): Map<K, V> {
        return MapUtil.sortByKeysDesc(this)
    }
}
declare global {
    interface Array<T> {


        /**
         * 根据指定的键分组
         *
         * ```typescript
         * const array = ExtArray.from([{  name: 'a', age: 1 }, { name: 'b', age: 2 }]);
         * const result = array.groupBy('age');
         * // { 1: [{  name: 'a', age: 1 }], 2: [{ name: 'b', age: 2 }] }
         * ```
         *
         * @param groupKey  分组的键
         */
        groupBy$ext<K extends keyof T>(groupKey: K): Map<T[K], T[]>

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
         * @param idField id字段
         * @param parentField 父id字段
         * @param childrenField 子元素字段
         */
        transformItemsToTree$ext<K extends keyof T>(idField?: K, parentField?: K, childrenField?: K): T[]

        /**
         * 从数组中随机取出一个元素
         */
        random$ext(): T

        /**
         * 如果数组长度为1,则返回第一个元素,否则返回数组本身
         */
        getSingleOrArray$ext(): T | T[]
    }

    interface Map<K, V> {

        /**
         * 将Map按照key排序,默认升序
         *
         * @param compareFn 排序函数
         * @return 排序后的新Map
         */
        sortByKeys$ext(compareFn?: (a: K, b: K) => number): Map<K, V>


        /**
         * 将Map按照key排序,降序
         * @return 排序后的新Map
         */
        sortByKeysDesc$ext(): Map<K, V>
    }
}
