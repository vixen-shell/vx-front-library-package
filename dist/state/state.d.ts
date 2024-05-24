import React from 'react';
import type { SocketEventData } from '../api';
export type GlobalStateType = SocketEventData;
type ActionType = {
    type: string;
    payload: any;
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
    getStateItem: (key: string) => any;
    setStateItem: (key: string, value: unknown) => void;
    saveState: () => void;
};
export {};
