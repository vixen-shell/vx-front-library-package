interface ThemeProviderProps {
    fonts: {
        font_family: string;
        font_family_monospace: string;
    };
    children: React.ReactNode;
}
export declare const ThemeProvider: React.FC<ThemeProviderProps>;
export {};
