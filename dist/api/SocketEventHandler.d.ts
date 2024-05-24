export type SocketEventData = Record<string, any>;
export type SocketEvent = {
    id: string;
    data?: SocketEventData;
};
type SocketEventListener = (data: SocketEventData) => void;
export declare class SocketEventHandler {
    private _websocket;
    private _listeners;
    constructor(socketRoute: string);
    private _handleInputEvents;
    addEventListener(eventId: string, listener: SocketEventListener): void;
    removeEventListener(eventId: string, listener: SocketEventListener): void;
    send_event(event: SocketEvent): void;
}
export {};
