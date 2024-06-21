export declare class ApiRoutes {
    static readonly ping: string;
    static readonly shutdown: string;
    static readonly features_names: string;
    static feature_start(featureName: string): string;
    static feature_stop(featureName: string): string;
    static feature_state(featureName: string): string;
    static feature_state_socket(featureName: string): string;
    static feature_action(featureName: string): string;
    static feature_data(featureName: string): string;
    static feature_file(featureName: string): string;
    static feature_data_streamer(featureName: string, targetFeatureName: string): string;
    static feature_socket(featureName: string, targetFeatureName: string, socketName: string): string;
    static frames_ids(featureName: string): string;
    static frame_toggle(featureName: string, frameId: string): string;
    static frame_open(featureName: string, frameId: string): string;
    static frame_close(featureName: string, frameId: string): string;
}
