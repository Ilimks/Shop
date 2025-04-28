import { ChangeEvent } from "react";

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

export interface InputProps {
    type: 'text' | 'number' | 'email' | 'password'
    label: string
    value: string | number
    name: string
    placeholder: string
    error: boolean
    disabled?: boolean
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export interface PaginationProps<T> {
    objects: T[];
    limit: number;
}