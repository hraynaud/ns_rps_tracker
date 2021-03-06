export interface PtStorageRepository {
    setItem<T>(key: string, value: T): void;
    getItem<T>(key: string): T;
    removeItem(key: string): void;
    clearAll(): void;
}
