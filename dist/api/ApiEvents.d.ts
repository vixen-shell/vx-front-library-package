export declare namespace EventData {
    type StateItem = {
        key: string;
        value: null | string | number | boolean;
    };
    type Log = {
        level: 'DEBUG' | 'INFO' | 'WARNING' | 'ERROR' | 'CRITICAL';
        purpose: string;
        data?: {
            type: 'TEXT' | 'DATA';
            content: string | {
                [key: string]: string | number | boolean;
            };
            asset?: string;
        };
    };
}
export declare namespace Output {
    type Ids = 'GET_STATE' | 'SET_STATE' | 'SAVE_STATE' | 'LOG';
    type Data = EventData.StateItem | EventData.Log;
    type Event = {
        id: Ids;
        data?: Data;
    };
}
export declare namespace Input {
    type Ids = 'UPDATE_STATE' | 'LOG';
    type Data = EventData.StateItem | EventData.Log;
    type Event = {
        id: Ids;
        data?: Data;
    };
}
export type EventListenerCallback = (data: any) => void;
export type EventListeners = {
    [key in Input.Ids]: EventListenerCallback[];
};
export declare class ApiEvents {
    private _webSocket;
    private _listeners;
    constructor(pipeRoute: string);
    private _handleInputs;
    hasListeners(eventId: Input.Ids): boolean;
    addListener(eventId: Input.Ids, callback: EventListenerCallback): void;
    removeListener(eventId: Input.Ids, callback: EventListenerCallback): void;
    send(event: Output.Event): void;
}
