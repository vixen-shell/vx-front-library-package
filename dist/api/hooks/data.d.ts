export declare const useData: () => {
    get: (key: string, handler?: {
        name: string;
        args?: any[];
    }) => any;
    stream: (key: string, handler?: {
        name: string;
        args?: any[];
    }) => any;
    setInterval: (value: number) => void;
};
