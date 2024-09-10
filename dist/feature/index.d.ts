import { RouteItems } from '../router';
import { GlobalStateType } from '../state';
import { SocketEventHandler } from '../api';
interface HandlerInfo {
    name: string;
    args?: any[];
}
export declare class Feature {
    static isInit: boolean;
    static featureName: string | undefined;
    static init(routes: RouteItems): (featureName: string, initialRoute: string, initialState: GlobalStateType | null) => import("react/jsx-runtime").JSX.Element;
    static get names(): string[] | undefined;
    static get Link(): import('react').FC<{
        className?: string;
        route: string;
        children: React.ReactNode;
    }>;
    static Use: {
        readonly Router: () => {
            route: string;
            setRoute: import('react').Dispatch<import('react').SetStateAction<string>>;
        };
        readonly State: () => {
            getItem: (key: string) => any;
            setItem: (key: string, value: unknown) => void;
            save: () => void;
        };
        Params(paths: string[]): {
            params: Record<string, any>;
            setParam: (paramPath: string, value: any) => () => void;
        };
        Frames(feature?: string): {
            ids: string[];
            actives: string[];
            toggle: (frameId: string) => () => void;
            open: (frameId: string) => () => void;
            close: (frameId: string) => () => void;
        };
        Task(handler: HandlerInfo): {
            run: (args?: any[]) => () => void;
            afterRun: (callback: (data: any, error: any) => void) => void;
        };
        Data(handlers: HandlerInfo[]): {
            update: () => void;
            data: Record<string, any>;
        };
        Stream(handlers: HandlerInfo[], interval?: number, auto?: boolean): {
            data: Record<string, any>;
            start: () => void;
            stop: () => void;
        };
        Files(handlers: Record<string, HandlerInfo>): Record<string, string | undefined>;
        Socket(name: string, auto?: boolean): SocketEventHandler;
    };
}
export {};
