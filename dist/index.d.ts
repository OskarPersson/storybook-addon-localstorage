type LocalStorageRecord = Record<string, string>;
type LocalStorageParameters = {
    localStorage?: LocalStorageRecord;
};

declare const withLocalStorage: (...args: any) => any;

declare const localStorageForStorybook: (params: Record<string, unknown>) => Record<string, string>;

export { type LocalStorageParameters, type LocalStorageRecord, localStorageForStorybook, withLocalStorage };
