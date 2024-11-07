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
    hide: () => void;
    onHiding: (callback: (position: {
        x: number;
        y: number;
    } | null, size: {
        width: number;
        height: number;
    } | null) => void) => void;
};
