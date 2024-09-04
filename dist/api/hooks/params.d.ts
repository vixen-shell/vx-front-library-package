export declare const useParams: (feature: string, paths: string[]) => {
    params: Record<string, any>;
    setParam: (paramPath: string, value: any) => () => void;
};
