export declare class ApiRoutes {
    private _featureName;
    constructor(featureName: string);
    static readonly PING: string;
    readonly LOGS: string;
    readonly LOG: string;
    readonly FEATURE_NAME: string;
    get FEATURE_START(): string;
    get FEATURE_STOP(): string;
    get FEATURE_STATE(): string;
    get FEATURE_STATE_SOCKET(): string;
    get FRAME_IDS(): string;
    FRAME_TOGGLE(frameId: string): string;
    FRAME_OPEN(frameId: string): string;
    FRAME_CLOSE(frameId: string): string;
}
