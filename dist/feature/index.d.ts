import { RouteItems } from '../router';
export declare class Feature {
    static isInit: boolean;
    static init(routes: RouteItems): () => import("react/jsx-runtime").JSX.Element;
    static get names(): string[];
    static get current(): {
        feature: string;
        frame: string;
        route: string;
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
            get: (key: string) => any;
            set: (key: string, value: unknown) => void;
            save: () => void;
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
        readonly Data: () => {
            get: (key: string, handler?: {
                name: string;
                args?: any[];
            }) => any;
            stream: (key: string, handler?: {
                name: string;
                args?: any[];
            }) => any;
            setInterval: (value: number) => void;
        };
        readonly Menu: () => {
            popup: (name: string) => () => void;
        };
        readonly Socket: (name: string) => import('../api').SocketEventHandler;
    };
}
