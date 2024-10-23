export declare const useStream: () => {
    stream: (key: string, handler?: {
        name: string;
        args?: any[];
    }) => any;
    setInterval: (value: number) => void;
};
