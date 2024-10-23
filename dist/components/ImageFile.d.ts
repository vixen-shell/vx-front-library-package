interface ImageFileProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'style' | 'width' | 'height' | 'src'> {
    filePath: string;
    style?: React.CSSProperties;
    width?: string | number;
    height?: string | number;
    minWidth?: string | number;
    minHeight?: string | number;
    radius?: string | number;
    fit?: 'fill' | 'contain' | 'cover';
}
export declare const ImageFile: React.FC<ImageFileProps>;
export {};
