export declare const useVxState: () => {
    state: import('../api').SocketEventData;
    getStateItemCopy: (key: string) => any;
    setStateItem: (key: string, value: any | ((prevValue: any) => any)) => void;
    saveState: () => void;
    saveStateItem: (key: string) => void;
};
