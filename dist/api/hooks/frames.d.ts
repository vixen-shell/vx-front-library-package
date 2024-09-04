export declare const useFrames: (feature: string) => {
    ids: string[];
    actives: string[];
    toggle: (frameId: string) => () => void;
    open: (frameId: string) => () => void;
    close: (frameId: string) => () => void;
};
