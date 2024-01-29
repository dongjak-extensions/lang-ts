import {diff} from "deep-diff";
import lodashGet from "lodash/get";
import lodashSet from "lodash/set";

/**
 * 对象工具类
 * @author dongjak
 * @created 2024/01/29
 * @version 1.0
 * @since 1.0
 */
export class ObjectUtils {

    /**
     * 安全获取对象的属性值,如果属性不存在,则返回默认值
     *
     * ### 示例
     *
     * ```js
     *
     * const obj = {a:{b:2}}
     *
     * const value = ObjectUtils.safeGet(obj,"a.b",1)
     * //value = 2
     *
     * const value2 = ObjectUtils.safeGet(obj,"a.b.c",1)
     * //value2 = 1
     * ```
     *
     * @param obj  对象
     * @param path 属性路径
     * @param defaultValue 默认值
     */
    static safeGet = (obj: any, path: string, defaultValue: any = null) => {
        return lodashGet(obj, path, defaultValue)
    }

    /**
     * 安全设置对象的属性值
     *
     * 如果路径的一部分不存在,则会创建它.为缺少的索引属性创建数组,为所有其他缺少的属性创建对象
     *
     * ### 示例
     *
     * ```js
     *
     * const obj = {a:{b:2}}
     *
     * ObjectUtils.safeSet(obj,"a.b",3)
     * //obj = {a:{b:3}}
     *
     * ObjectUtils.safeSet(obj,"a.b.c",3)
     * //obj = {a:{b:{c:3}}}
     *
     * ObjectUtils.safeSet(obj,"a.b.c[1]",3)
     * //obj = {a:{b:{c:[null,3]}}}
     * ```
     *
     * @param obj  对象
     * @param path 属性路径
     * @param value 值
     */
    static safeSet = (obj: any, path: string, value: any) => {
        return lodashSet(obj, path, value)
    }

    /**
     * 获取两个对象之间的差异
     *
     * 差异对象的格式如下:
     * ```json
     * [
     *   {
     *     "kind": "E", //差异类型, A:数组,N:新增,D:删除,E:编辑
     *     "path": [    //差异路径
     *       "originalPrice"
     *     ],
     *     "lhs": 18,   //原值
     *     "rhs": 1     //新值
     *   },
     *   {
     *     "kind": "N",
     *     "path": [
     *       "features",
     *       1,
     *       "maxDosage"
     *     ],
     *     "rhs": null
     *   },
     *   {
     *     "kind": "N",
     *     "path": [
     *       "features",
     *       0,
     *       "maxDosage"
     *     ],
     *     "rhs": null
     *   }
     * ]
     * ```
     * @param oldValues
     * @param newValues
     */
    static getDifferences = (oldValues: any, newValues: any) => {
        return diff(oldValues, newValues)
    }

    /**
     * 比较两个对象之间的差异,并返回差异部分
     *
     * ### 示例
     * ```js
     *  const oldValues = {
     *     k1: 1
     *     k2: 2
     * }
     *
     * const newValues = {
     *    k1: 1
     *    k2: 3
     * }
     *
     * const updateObject = ObjectUtils.getUpdatedValues(oldValues,newValues)
     * //updateObject = {k2:3}
     * ```
     * @param oldValues
     * @param newValues
     */
    static getUpdatedValues = <T>(oldValues: T, newValues: T) => {
        let updateObject = newValues
        let differences = ObjectUtils.getDifferences(oldValues, newValues);
        if (!differences) return updateObject //如果没有差异,则直接返回
        const diffPathToObjectPath = (diffPath: any[]) => {
            return diffPath.map(it => {
                if (typeof it === "number") return `[${it}]`
                return it
            }).join(".")
        }
        //把差异部分转成新对象,提交的时候只提交这个差异对象
        updateObject = differences.reduce((acc, diff) => {
            const diffPropPath = diffPathToObjectPath(diff.path)
            if (diff.path.length > 0) {
                ObjectUtils.safeSet(acc, diff.path[0], ObjectUtils.safeGet(newValues, diff.path[0]))
            }
            ObjectUtils.safeSet(acc, diffPropPath, ObjectUtils.safeGet(newValues, diffPropPath))
            return acc;
        }, {} as any);

        return updateObject
    }
}
