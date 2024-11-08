export declare const useHidePopupFrame: () => {
    hide: () => void;
};
export declare const usePopupFrame: () => {
    show: ({ route, monitorId, position, size, resizable, exitOnMouseLeave, }: {
        route: string;
        monitorId?: number;
        position?: {
            x: number;
            y: number;
        };
        size?: {
            width: number;
            height: number;
        };
        resizable?: boolean;
        exitOnMouseLeave?: boolean;
    }) => void;
    onClosing: (callback: (lastPosition: {
        x: number;
        y: number;
    } | null, lastSize: {
        width: number;
        height: number;
    } | null) => void) => void;
};
