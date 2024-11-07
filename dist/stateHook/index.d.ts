export declare const useVxState: () => {
    readonly get: import('../api').SocketEventData;
    getCopy: (key: string) => any;
    set: (key: string, value: unknown) => void;
    save: () => void;
    saveItem: (key: string) => void;
};
