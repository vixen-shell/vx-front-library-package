import { RouteItems } from '../router';
export declare class Feature {
    static isInit: boolean;
    static init(routes: RouteItems): () => import("react/jsx-runtime").JSX.Element;
    static get names(): string[];
    static get current(): {
        feature: string;
        frame: string;
        route: string;
        popup: boolean;
    };
    static get Link(): import('react').FC<{
        route: string;
        children: React.ReactNode;
    }>;
    static Use: {
        readonly Router: () => {
            route: string;
            setRoute: import('react').Dispatch<import('react').SetStateAction<string>>;
        };
        readonly State: () => {
            readonly get: import('../api').SocketEventData;
            getCopy: (key: string) => any;
            set: (key: string, value: unknown) => void;
            save: () => void;
            saveItem: (key: string) => void;
        };
        readonly Params: (paths: string[], feature?: string) => {
            get: (path: string) => any;
            set: (path: string, value: any) => () => void;
            save: () => () => void;
        };
        readonly Frames: (feature?: string) => {
            ids: string[];
            actives: string[];
            toggle: (frameId: string) => () => void;
            open: (frameId: string) => () => void;
            close: (frameId: string) => () => void;
        };
        readonly Task: () => {
            run: (name: string, args?: any[]) => () => void;
            afterRun: (callback: (data: any, error: any) => void) => void;
        };
        readonly Data: (options?: {
            UseStream?: boolean;
            interval?: number;
        }) => {
            get: (key: string, handler?: {
                name: string;
                args?: any[];
            }) => any;
            stream: (key: string, handler?: {
                name: string;
                args?: any[];
            }) => any;
        };
        readonly Menu: () => {
            popup: (name: string) => () => void;
        };
        readonly PopupFrame: () => {
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
        readonly Socket: (name: string) => import('../api').SocketEventHandler;
    };
}
