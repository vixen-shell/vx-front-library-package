export declare class ApiRoutes {
    static readonly ping: string;
    static readonly shutdown: string;
    static readonly gtk_fonts: string;
    static readonly locale: string;
    static readonly vx_state: string;
    static system_icons(iconName: string): string;
    static phosphor_icons(iconName: string, iconStyle?: 'bold' | 'duotone' | 'fill' | 'light' | 'regular' | 'thin' | undefined): string;
    static image_file(filePath: string): string;
    static readonly features_names: string;
    static feature_start(featureName: string): string;
    static feature_stop(featureName: string): string;
    static feature_get_param(featureName: string, paramPath: string): string;
    static feature_set_param(featureName: string, paramPath: string): string;
    static feature_save_params(featureName: string): string;
    static feature_action(featureName: string): string;
    static feature_data(featureName: string): string;
    static feature_menu(featureName: string): string;
    static feature_dbus_menu(featureName: string): string;
    static feature_state_socket(featureName: string): string;
    static feature_systray_socket(featureName: string): string;
    static feature_frames_socket(featureName: string): string;
    static feature_data_streamer_socket(featureName: string): string;
    static feature_socket(featureName: string, socketName: string): string;
    static frames_ids(featureName: string): string;
    static frame_toggle(featureName: string, frameId: string): string;
    static frame_open(featureName: string, frameId: string): string;
    static frame_close(featureName: string, frameId: string): string;
}
