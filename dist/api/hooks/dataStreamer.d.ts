export interface HandlerInfo {
    name: string;
    args?: any[];
}
export declare const useFeatureDataStreamer: (featureName: string, targetFeatureName: string, dataHandlers: HandlerInfo[], interval: number, auto: boolean) => {
    data: Record<string, any>;
    start: () => void;
    stop: () => void;
};
