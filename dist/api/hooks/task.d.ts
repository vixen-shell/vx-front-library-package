interface HandlerInfo {
    name: string;
    args?: any[];
}
export declare const useTask: (feature: string, handler: HandlerInfo) => {
    run: (args?: any[]) => () => void;
    afterRun: (callback: (data: any, error: any) => void) => void;
};
export {};
