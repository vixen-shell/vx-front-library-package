/// <reference types="react" />
import type { RouteItems } from '../router';
import type { GlobalStateType } from '../state';
export declare class Feature {
    static isInit: boolean;
    static init(routes: RouteItems): (initialRoute: string, initialState: GlobalStateType) => import("react/jsx-runtime").JSX.Element;
    static Use: {
        readonly Router: () => {
            route: string;
            setRoute: import("react").Dispatch<import("react").SetStateAction<string>>;
        };
        readonly State: () => {
            getStateItem: (key: string) => string | number | boolean | null;
            setStateItem: (key: string, value: string | number | boolean | null) => void;
            saveState: () => void;
        };
        readonly LogListener: () => {
            logListening: boolean;
            setLogListening: import("react").Dispatch<import("react").SetStateAction<boolean>>;
            logData?: import("../api").EventData.Log | undefined;
        };
        readonly LogHistory: () => {
            logHistory: import("../api").EventData.Log[];
            latestLog?: import("../api").EventData.Log | undefined;
        };
    };
    static get Link(): import("react").FC<{
        className?: string | undefined;
        route: string;
        children: import("react").ReactNode;
    }>;
    static get log(): (log: import("../api").EventData.Log) => Promise<void>;
}
