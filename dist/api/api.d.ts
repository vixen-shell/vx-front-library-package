import { SocketEventHandler } from './SocketEventHandler';
import { GlobalStateType } from '../state';
export declare class Api {
    static featureNames: string[] | undefined;
    static currentFeatureName: string | undefined;
    private static _stateEvents;
    private static _isInit;
    static init(featureName: string): Promise<void>;
    static get isInit(): boolean;
    static ping(): Promise<boolean>;
    static get stateEvents(): SocketEventHandler;
    static getInitialState(): Promise<GlobalStateType | null>;
    static getInitialTheme(): Promise<{
        font_family: string;
        font_family_monospace: string;
        ui_scale: number;
        ui_color: string;
    }>;
}
