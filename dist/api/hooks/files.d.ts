export interface HandlerInfo {
    name: string;
    args?: any[];
}
export declare const useImageFiles: (featureName: string, fileHandlers: Record<string, HandlerInfo>) => Record<string, string | undefined>;
