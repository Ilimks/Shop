import Image from "next/image";

export const Pay = ({ size = 99, className = "" }: { size?: number; className?: string }) => (
    <Image src="/assets/images/Badge4.svg" width={size} height={size} className={className} alt="cart" />
);