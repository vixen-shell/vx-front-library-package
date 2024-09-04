interface HandlerInfo {
    name: string;
    args?: any[];
}
export declare const useStream: (feature: string, target: string, handlers: HandlerInfo[], interval: number, auto: boolean) => {
    data: Record<string, any>;
    start: () => void;
    stop: () => void;
};
export {};
