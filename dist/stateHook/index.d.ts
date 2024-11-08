export declare const useVxState: () => {
    readonly get: import('../api').SocketEventData;
    getCopy: (key: string) => any;
    set: (key: string, value: any | ((prevValue: any) => any)) => void;
    save: () => void;
    saveItem: (key: string) => void;
};
