export declare const useStream: (connect?: boolean, interval?: number) => {
    stream: (key: string, handler?: {
        name: string;
        args?: any[];
    }) => any;
};
