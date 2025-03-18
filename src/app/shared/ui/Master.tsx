import Image from "next/image";

export const Master = ({ size = 99, className = "" }: { size?: number; className?: string }) => (
    <Image src="/assets/images/Badge1.svg" width={size} height={size} className={className} alt="cart" />
);