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
            getStateItem: (key: string) => any;
            setStateItem: (key: string, value: unknown) => void;
            saveState: () => void;
        };
    };
    static get Link(): import("react").FC<{
        className?: string | undefined;
        route: string;
        children: import("react").ReactNode;
    }>;
}
