import React from 'react';
type GlobalStateItemType = string | number | boolean | null;
export type GlobalStateType = {
    [key: string]: GlobalStateItemType;
};
type ActionType = {
    type: string;
    payload: GlobalStateItemType;
};
type ReducerType = (state: GlobalStateType, action: ActionType) => GlobalStateType;
export declare class GlobalState {
    private static _initialState;
    private static _reducer;
    static set initialState(value: GlobalStateType);
    static get initialState(): GlobalStateType;
    static get reducer(): ReducerType;
}
export declare const GlobalStateProvider: React.FC<{
    children: React.ReactNode;
}>;
export declare const useGlobalState: () => {
    getStateItem: (key: string) => GlobalStateItemType;
    setStateItem: (key: string, value: GlobalStateItemType) => void;
    saveState: () => void;
};
export {};
