import Image from "next/image";

export const PayPal = ({ size = 99, className = "" }: { size?: number; className?: string }) => (
    <Image src="/assets/images/Badge3.svg" width={size} height={size} className={className} alt="cart" />
);