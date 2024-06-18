export interface HandlerInfo {
    name: string;
    args?: any[];
}
export declare const useFeatureData: (featureName: string, dataHandlers: HandlerInfo[]) => {
    update: () => () => void;
    data: Record<string, any>;
};
