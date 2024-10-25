export declare const useData: (options?: {
    UseStream?: boolean;
    interval?: number;
}) => {
    get: (key: string, handler?: {
        name: string;
        args?: any[];
    }) => any;
    stream: (key: string, handler?: {
        name: string;
        args?: any[];
    }) => any;
};
