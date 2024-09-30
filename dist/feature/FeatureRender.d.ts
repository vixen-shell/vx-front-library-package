declare const FeatureRender: React.FC<{
    initialTheme: {
        font_family: string;
        font_family_monospace: string;
        ui_scale: number;
        ui_color: string;
    };
    initialRoute: string;
    state: boolean;
}>;
export default FeatureRender;
