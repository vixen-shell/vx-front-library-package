interface PhosphorIconProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style'> {
    iconName: string;
    style?: React.CSSProperties;
    iconStyle?: 'bold' | 'duotone' | 'fill' | 'light' | 'regular' | 'thin';
    size?: string | number;
    color?: string;
}
export declare const PhosphorIcon: React.FC<PhosphorIconProps>;
export {};
