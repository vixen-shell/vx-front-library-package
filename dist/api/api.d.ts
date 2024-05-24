import { ApiRoutes } from './ApiRoutes';
import { SocketEventHandler } from './SocketEventHandler';
export declare class Api {
    private static _routes;
    private static _stateEvents;
    private static _isInit;
    static init(featureName: string, clientId: string): Promise<void>;
    static get isInit(): boolean;
    static ping(): Promise<Boolean>;
    static get routes(): ApiRoutes;
    static get stateEvents(): SocketEventHandler;
    static get featureState(): () => Promise<import("./SocketEventHandler").SocketEventData>;
}
