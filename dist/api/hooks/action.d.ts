export interface HandlerInfo {
    name: string;
    args?: any[];
}
export declare const useFeatureAction: (featureName: string, actionHandler: HandlerInfo) => {
    run: () => () => void;
    isRunning: boolean;
    onTerminate: (callback: (data: any, error: any) => void) => void;
};
