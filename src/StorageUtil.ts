import {CryptoUtil} from "./CryptoUtil";

export interface SessionStorage {
    test: string
}

export interface LocalStorage {

}

export type StorageType = 'sessionStorage' | 'localStorage';

export class StorageUtil<T extends SessionStorage | LocalStorage> {

    private readonly type: StorageType = "localStorage";


    constructor(type: StorageType) {
        this.type = type;
    }

    /**
     * 设置指定存储
     * @param key - 键
     * @param value - 值
     */
    set<K extends keyof T>(key: K, value: T[K]) {
        const json = CryptoUtil.encrypt(value);
        window[this.type].setItem(key as string, json);
    }


    /**
     * 获取指定存储
     * @param key - 键
     */
    get<K extends keyof T>(key: K) {
        const json = window[this.type].getItem(key as string);
        let data: T[K] | null = null;
        if (json) {
            try {
                data = CryptoUtil.decrypt(json);
            } catch {
                // 防止解析失败
            }
        }
        return data;
    }

    /**
     * 移除指定存储
     * @param key - 键
     */
    remove<K extends keyof T>(key: K) {
        window[this.type].removeItem(key as string);
    }


    /**
     * 清空所有存储
     */
    clear() {
        window[this.type].clear();
    }

}
