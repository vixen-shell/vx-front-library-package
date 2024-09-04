import { default as React } from 'react';
export type RouteItemsType = {
    [key: string]: JSX.Element;
};
export declare class Routes {
    private static items;
    static define(items: RouteItemsType): void;
    static get(key: string): import("react/jsx-runtime").JSX.Element;
    static exists(key: string): boolean | undefined;
}
export declare const RouterContext: React.Context<{
    route: string;
    setRoute: React.Dispatch<React.SetStateAction<string>>;
} | undefined>;
export declare const RouterProvider: React.FC<{
    initialRoute: string;
    children: React.ReactNode;
}>;
