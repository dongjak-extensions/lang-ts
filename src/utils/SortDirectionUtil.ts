import { SortDirection } from '../data/SortDirection';

export default class SortDirectionUtil {
  static valueOf(value: string): SortDirection {
    switch (value.toUpperCase()) {
      case SortDirection.ASC.toUpperCase():
        return SortDirection.ASC;
      case SortDirection.DESC.toUpperCase():
        return SortDirection.DESC;
      default:
        throw new Error(`不支持的排序方向:${value}`);
    }
  }
}
