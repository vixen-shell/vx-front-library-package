interface SysTrayProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style' | 'title'> {
    style?: React.CSSProperties;
    direction?: 'row' | 'column';
    iconSize?: string | number;
    gap?: string | number;
    tooltip?: boolean;
}
export declare const SysTray: React.FC<SysTrayProps>;
export {};
