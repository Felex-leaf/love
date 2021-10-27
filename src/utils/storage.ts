const MAX_MEMORTY_VALUE_LENGTH = 300;
let _store: Storage | null = window.localStorage;
let _prefix = `_felex_blog_`;
const _cache: ICache<any> = {};

try {
    // IE 8 或移动端的隐身模式 下直接调用 window.localStorage 会报错（其实也不用支持 IE8）
    _store.setItem('bs_:)_', '__');
    _store.removeItem('bs_:)_');
} catch {
    /* istanbul ignore next */
    _store = null;
}

interface IMap<T> {
    [key: string]: T;
}

interface ICache<T> {
    [key: string]: T;
}

export interface IStorage {
    sync?: (products: string[], fn: <T>(...arg: T[]) => void) => void;
    set: <T>(key: string, val: T, seconds?: number) => void;
    setAll?: <T>(map: IMap<T>) => void;
    get: <T>(key: string, defaultValue?: T) => T | undefined;
    del: (key: string) => void;
    clear: () => void;
    has: (key: string) => boolean;
}

function getStorage(): IStorage {
    if (_store) {
        return {
            // 同时更新不同的 Product 下的 storage
            sync(products, fn): void {
                const lastPrefix = _prefix;

                products.forEach((product) => {
                    _prefix = `__ta/${product}_`;
                    fn();
                });
                _prefix = lastPrefix;
            },
            set(key, val, seconds): void {
                const expiredAt = seconds ? Date.now() + seconds * 1000 : 0;
                const valMod = JSON.stringify([val, expiredAt]);
                if (valMod.length <= MAX_MEMORTY_VALUE_LENGTH) _cache[key] = valMod;
                else delete _cache[key];
                _store?.setItem(_prefix + key, valMod);
            },
            setAll(map): void {
                Object.keys(map).forEach((key) => {
                    this.set(key, map[key]);
                });
            },
            get<T>(key: string, defaultValue?: T): T | undefined {
                // const rawVal = _cache[key] || _store.getItem(_prefix + key); // 从cache取token会无法更新新的token
                const rawVal = _store?.getItem(_prefix + key);
                if (!rawVal) return defaultValue;

                try {
                    const [val, expiredAt] = JSON.parse(rawVal);
                    if (expiredAt && Date.now() > expiredAt) {
                        return defaultValue;
                    }
                    return val;
                } catch (e) {
                    return defaultValue;
                }
            },

            del(key): void {
                delete _cache[key];
                if (key.indexOf(_prefix) > -1) {
                    _store?.removeItem(key);
                } else {
                    _store?.removeItem(_prefix + key);
                }
            },
            clear(): void {
                Object.keys(_cache).forEach((key) => delete _cache[key]);
                // 防止同源情况清空其他项目存储的数据
                Object.keys(_store || {}).forEach((key) => {
                    if (key.indexOf(_prefix) > -1) {
                        this.del(key);
                    }
                });
            },
            has(key: string): boolean {
                return key in _cache || !!_store?.getItem(_prefix + key);
            },
        };
    }
    return {
        set<T>(key: string, val: T): void {
            _cache[key] = val;
        },
        get<T>(key: string): T {
            return _cache[key];
        },
        del(key: string): void {
            delete _cache[key];
        },
        clear(): void {
            Object.keys(_cache).forEach((key) => delete _cache[key]);
        },
        has(key: string): boolean {
            return key in _cache;
        },
    };
}
const storage = getStorage();
export default storage;
