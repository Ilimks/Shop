import Image from "next/image";

export const Visa = ({ size = 99, className = "" }: { size?: number; className?: string }) => (
    <Image src="/assets/images/Badge.svg" width={size} height={size} className={className} alt="cart" />
);