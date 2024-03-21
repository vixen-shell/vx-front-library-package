import { ApiRoutes } from './ApiRoutes';
import { ApiEvents, EventData } from './ApiEvents';
import { GlobalStateType } from '../state';
declare class Logger {
    private static _logListener;
    private static get logListener();
    private static set logListener(value);
    static log(log: EventData.Log): Promise<void>;
    static get logs(): () => Promise<EventData.Log[]>;
    static addListener(callback: (data: EventData.Log) => void): void;
    static removeListener(callback: (data: EventData.Log) => void): void;
}
export declare class Api {
    private static _routes;
    private static _events;
    private static _isInit;
    static init(featureName: string, clientId: string): Promise<void>;
    static get isInit(): boolean;
    static ping(): Promise<Boolean>;
    static get events(): ApiEvents;
    static get routes(): ApiRoutes;
    static get featureState(): () => Promise<GlobalStateType>;
    static Logger: typeof Logger;
}
export {};
