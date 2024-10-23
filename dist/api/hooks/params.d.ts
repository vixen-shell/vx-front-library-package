export declare const useParams: (paths: string[], feature?: string) => {
    get: (path: string) => any;
    set: (path: string, value: any) => () => void;
    save: () => () => void;
};
