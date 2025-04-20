export interface ProductCardProps {
    title: string;
    price: number;
    image: string;
    maker: string;
};

export interface ButtonProps {
    text: string;
    onClick: () => void;
    variant?: 'show' | 'filter' | 'third';
    size?: 'showSize' | 'filterSize' | 'large';
    disabled?: boolean;
};