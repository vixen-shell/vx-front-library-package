export declare const useParams: (paths: string[], feature?: string) => {
    get: (path: string) => any;
    set: (path: string, value: any | ((prevValue: any) => any)) => () => void;
    save: () => () => void;
};
