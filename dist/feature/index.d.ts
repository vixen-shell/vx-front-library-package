/// <reference types="react" />
import type { RouteItems } from '../router';
import type { GlobalStateType } from '../state';
import { SocketEventHandler } from '../api';
export interface HandlerInfo {
    name: string;
    args?: any[];
}
interface useActionProps {
    featureName?: string;
    actionHandler: HandlerInfo;
}
interface useDataProps {
    featureName?: string;
    dataHandlers: HandlerInfo[];
}
interface useDataStreamerProps {
    featureName?: string;
    dataHandlers: HandlerInfo[];
    interval?: number;
    auto?: boolean;
}
interface useImageFilesProps {
    featureName?: string;
    fileHandlers: Record<string, HandlerInfo>;
}
interface useSocketProps {
    featureName?: string;
    socketName: string;
    auto?: boolean;
}
export declare class Feature {
    static isInit: boolean;
    static featureName: string | undefined;
    static init(routes: RouteItems): (featureName: string, initialRoute: string, initialState: GlobalStateType | null) => import("react/jsx-runtime").JSX.Element;
    static get names(): string[] | undefined;
    static get Link(): import("react").FC<{
        className?: string | undefined;
        route: string;
        children: import("react").ReactNode;
    }>;
    static Use: {
        readonly Router: () => {
            route: string;
            setRoute: import("react").Dispatch<import("react").SetStateAction<string>>;
        };
        readonly State: () => {
            getItem: (key: string) => any;
            setItem: (key: string, value: unknown) => void;
            save: () => void;
        };
        Params(paramPaths: string[]): {
            params: Record<string, any>;
            setParam: (paramPath: string, value: any) => () => void;
        };
        Frames(featureName?: string): {
            ids: string[];
            actives: string[];
            toggle: (frameId: string) => () => void;
            open: (frameId: string) => () => void;
            close: (frameId: string) => () => void;
        };
        Action({ featureName, actionHandler, }: useActionProps): {
            run: () => () => void;
            isRunning: boolean;
            onTerminate: (callback: (data: any, error: any) => void) => void;
        };
        Data({ featureName, dataHandlers, }: useDataProps): {
            update: () => void;
            data: Record<string, any>;
        };
        DataStreamer({ featureName, dataHandlers, interval, auto, }: useDataStreamerProps): {
            data: Record<string, any>;
            start: () => void;
            stop: () => void;
        };
        ImageFiles({ featureName, fileHandlers, }: useImageFilesProps): Record<string, string | undefined>;
        Socket({ featureName, socketName, auto, }: useSocketProps): SocketEventHandler;
    };
}
export {};
