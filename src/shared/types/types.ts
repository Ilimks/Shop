export interface ProductCardProps {
    title: string;
    price: number;
    image: string;
    maker: string;
};

export interface ButtonProps {
    text: string | boolean;
    onClick?: () => void;
    variant?: 'show' | 'filter' | 'third';
    size?: 'showSize' | 'filterSize' | 'large';
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
    error?: string
    fullWidth?: boolean
    className?: string
    variant?: 'default' | 'headerSearch' | 'auth'
    inputSize?: 'small' | 'headerSearchSize' | 'large' // ✅ новое имя
}

export interface PaginationProps<T> {
    objects: T[];
    limit: number;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export interface PhotoSliderProps {
    images: string[]
}