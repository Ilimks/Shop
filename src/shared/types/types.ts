export interface IProductCardProps {
    title: string;
    price: number;
    image: string;
    description: string;
    country: string;
    sizes: string[];
    colors: string[];
    sale?: number;
    category: string;
    sex: "male" | "female" | "unisex"
    maker: string;
    oldPrice: number;
};

export interface IProductCard extends IProductCardProps {
    id: string;
}

export interface ButtonProps {
    text: string | boolean;
    onClick?: () => void;
    variant?: 'card' | 'show' | 'modal';
    size?: 'cardSize' | 'showSize' | 'modalSize';
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    fullWidth?: boolean;
    className?: string;
    variant?:'headerSearch' | 'login' | 'register' | 'headerSearch2';
    inputSize?: 'headerSearchSize' | 'loginSize' | 'registerSize' | 'headerSearchSize2';
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

export interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  name?: string;
  size?: "modal" | "medium" | "large";
  variant?: "modalChecked" | "secondary";
}

export interface BurgerProps {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

export interface NavigationBurgerProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface SearchWithHistoryProps {
  inputProps?: Partial<InputProps>;
};

export interface PhotoSliderProps {
    images: string[]
}