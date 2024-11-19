import { SocketEventHandler, SocketEventData } from './SocketEventHandler';
interface DefaultFonts {
    font_family: string;
    font_family_monospace: string;
}
export declare class BaseApi {
    private static _isInit;
    private static _features;
    private static _initialState;
    private static _stateEventHandler;
    private static _defaultFonts;
    private static _locale;
    private static _locales;
    static init(): Promise<void>;
    static ping(): Promise<boolean>;
    static get isInit(): boolean;
    static get features(): string[];
    static get urlParams(): {
        feature: string;
        frame: string;
        route: string;
        popup: boolean;
    };
    static get state(): {
        initial: SocketEventData;
        eventHandler: SocketEventHandler;
    };
    static get defaultFonts(): DefaultFonts;
    static get locales(): {
        [key: string]: string;
    };
    static locale(dayjs?: boolean): string;
}
export {};
