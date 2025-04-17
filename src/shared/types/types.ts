export interface ProductCardProps {
    title: string;
    price: number;
    image: string;
    maker: string;
};

export interface ButtonProps {
    text: string;
    onClick: () => void;
    variant?: 'show' | 'second' | 'third';
    size?: 'showSize' | 'medium' | 'large';
    disabled?: boolean;
};