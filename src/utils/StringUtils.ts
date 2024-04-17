export class StringUtils {
  static isBlank(str: string): boolean {
    return str == null || str.trim().length === 0;
  }

  static isNotBlank(str: string): boolean {
    return !StringUtils.isBlank(str);
  }

  static isEmpty(str: string): boolean {
    return str == null || str.length === 0;
  }

  static isNotEmpty(str: string): boolean {
    return !StringUtils.isEmpty(str);
  }

  static equals(str1: string, str2: string): boolean {
    return str1 === str2;
  }

  static equalsIgnoreCase(str1: string, str2: string): boolean {
    return str1.toLowerCase() === str2.toLowerCase();
  }

  static contains(str: string, searchStr: string): boolean {
    return str.indexOf(searchStr) >= 0;
  }

  static startsWith(str: string, prefix: string): boolean {
    return str.startsWith(prefix);
  }

  static endsWith(str: string, suffix: string): boolean {
    return str.endsWith(suffix);
  }

  static toUpperCase(str: string): string {
    return str.toUpperCase();
  }

  static toLowerCase(str: string): string {
    return str.toLowerCase();
  }

  static trim(str: string): string {
    return str.trim();
  }

  static trimToNull(str: string): string | null {
    return StringUtils.isBlank(str) ? null : str.trim();
  }

  static trimToEmpty(str: string): string {
    return StringUtils.isBlank(str) ? '' : str.trim();
  }

  static substring(str: string, start: number, end: number): string {
    return str.substring(start, end);
  }

  static substringBefore(str: string, separator: string): string {
    if (StringUtils.isBlank(str) || StringUtils.isBlank(separator)) {
      return str;
    }
    const index = str.indexOf(separator);
    return index < 0 ? str : str.substring(0, index);
  }

  static substringAfter(str: string, separator: string): string {
    if (StringUtils.isBlank(str) || StringUtils.isBlank(separator)) {
      return str;
    }
    const index = str.indexOf(separator);
    return index < 0 ? str : str.substring(index + separator.length);
  }

  static substringBeforeLast(str: string, separator: string): string {
    if (StringUtils.isBlank(str) || StringUtils.isBlank(separator)) {
      return str;
    }
    const index = str.lastIndexOf(separator);
    return index < 0 ? str : str.substring(0, index);
  }

  static getOrOnBlank(str: string, onBlank?: string): string | undefined {
    return StringUtils.isBlank(str) ? onBlank : str;
  }
}
