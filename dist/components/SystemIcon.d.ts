interface SystemIconProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style'> {
    iconName: string;
    style?: React.CSSProperties;
    size?: string | number;
}
export declare const SystemIcon: React.FC<SystemIconProps>;
export {};
