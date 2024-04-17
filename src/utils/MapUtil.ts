export default class MapUtil {
  /**
   * 将Map按照key排序,默认升序
   *
   * @param map  要排序的Map
   * @param compareFn 排序函数
   * @return 排序后的新Map
   */

  static sortByKeys = <K, V>(
    map: Map<K, V>,
    //@ts-ignore
    compareFn: (a: K, b: K) => number = (a, b) => a - b
  ) => {
    let sortedKeys = [...map.keys()].sort(compareFn);

    let sortedMap = new Map();

    for (let key of sortedKeys) {
      sortedMap.set(key, map.get(key));
    }

    return sortedMap;
  };

  /**
   * 将Map按照key排序,降序
   * @param map 要排序的Map
   * @return 排序后的新Map
   */
  static sortByKeysDesc = <K, V>(map: Map<K, V>) => {
    // @ts-ignore
    return MapUtil.sortByKeys(map, (a, b) => b - a);
  };
}
export type EnumMap = {
  name: string;
  title: string;
  [key: string]: any;
};
