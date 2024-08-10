export declare const useParams: (featureName: string, paramPaths: string[]) => {
    params: Record<string, any>;
    setParam: (paramPath: string, value: any) => () => void;
};
