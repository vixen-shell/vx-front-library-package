export declare const useTask: () => {
    run: (name: string, args?: any[]) => () => void;
    afterRun: (callback: (data: any, error: any) => void) => void;
};
