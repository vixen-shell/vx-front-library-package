interface ThemeContextProps {
    setThemeColor: (color: string) => void;
}
export declare const ThemeContext: import('react').Context<ThemeContextProps | undefined>;
interface ThemeProviderProps {
    initialTheme: {
        font_family: string;
        font_family_monospace: string;
        ui_scale: number;
        ui_color: string;
    };
    children: React.ReactNode;
}
export declare const ThemeProvider: React.FC<ThemeProviderProps>;
export {};
