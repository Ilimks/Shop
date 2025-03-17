import Image from "next/image";

export const CartIcon = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
    <Image src="/assets/icons/cart_icon.svg" width={size} height={size} className={className} alt="Корзина" />
);