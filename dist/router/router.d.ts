import React from 'react';
export type RouteItemsType = {
    [key: string]: JSX.Element;
};
export declare class Routes {
    private static items;
    static define(items: RouteItemsType): void;
    static get(key: string): import("react/jsx-runtime").JSX.Element;
    static exists(key: string): boolean | undefined;
}
export declare const RouterProvider: React.FC<{
    initialRoute: string;
    children: React.ReactNode;
}>;
export declare const useRouter: () => {
    route: string;
    setRoute: React.Dispatch<React.SetStateAction<string>>;
};
export declare const RouterRender: () => import("react/jsx-runtime").JSX.Element;
export declare const RouterLink: React.FC<{
    className?: string;
    route: string;
    children: React.ReactNode;
}>;
