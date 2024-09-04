interface HandlerInfo {
    name: string;
    args?: any[];
}
export declare const useData: (feature: string, handlers: HandlerInfo[]) => {
    update: () => () => void;
    data: Record<string, any>;
};
export {};
