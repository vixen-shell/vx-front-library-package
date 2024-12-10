type ImportCallback = (featureName: string | null) => Promise<any>;
export declare function create(container: HTMLElement): {
    render: (importCallback: ImportCallback) => Promise<void>;
};
export {};
