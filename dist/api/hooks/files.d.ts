interface HandlerInfo {
    name: string;
    args?: any[];
}
export declare const useFiles: (feature: string, handlers: Record<string, HandlerInfo>) => Record<string, string | undefined>;
export {};
