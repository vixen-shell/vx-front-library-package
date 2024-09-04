interface HandlerInfo {
    name: string;
    args?: any[];
}
export declare const useTask: (feature: string, handler: HandlerInfo) => {
    run: () => () => void;
    isRunning: boolean;
    onTerminate: (callback: (data: any, error: any) => void) => void;
};
export {};
