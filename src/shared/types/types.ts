import { ChangeEvent } from "react";

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

export interface InputProps {
    type: 'tel' | 'text' | 'email' | 'password' | 'address'
    label: string
    value: string | number
    name: string
    placeholder: string
    error: boolean
    disabled?: boolean
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    required?: boolean; 
    fullWidth?: boolean;
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