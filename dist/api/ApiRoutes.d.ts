export declare class ApiRoutes {
    private _featureName;
    private _clientId;
    constructor(featureName: string, clientId: string);
    static readonly PING: string;
    readonly LOGS: string;
    readonly LOG: string;
    readonly FEATURE_NAME: string;
    get FEATURE_START(): string;
    get FEATURE_STOP(): string;
    get FEATURE_STATE(): string;
    get FEATURE_STATE_EVENTS(): string;
    get FEATURE_LOG_LISTENER(): string;
    get FEATURE_LOG_LISTENER_TOGGLE(): string;
    get FEATURE_PIPE(): string;
    get FRAME_IDS(): string;
    FRAME_TOGGLE(frameId: string): string;
    FRAME_OPEN(frameId: string): string;
    FRAME_CLOSE(frameId: string): string;
}
