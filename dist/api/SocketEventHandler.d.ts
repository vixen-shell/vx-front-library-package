export type SocketEventData = Record<string, any>;
export type SocketEvent = {
    id: string;
    data?: SocketEventData;
};
type SocketEventListener = (data: SocketEventData) => void;
export declare class SocketEventHandler {
    private _uri;
    private _socket;
    private _listeners;
    private _eventQueue;
    constructor(uri: string);
    private _afterConnection;
    connect(): void;
    disconnect(): void;
    addEventListener(eventId: string, listener: SocketEventListener): void;
    removeEventListener(eventId: string, listener: SocketEventListener): void;
    send_event(event: SocketEvent): void;
}
export {};
