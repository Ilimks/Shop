import Image from "next/image";

export const Google = ({ size = 99, className = "" }: { size?: number; className?: string }) => (
    <Image src="/assets/images/Badge5.svg" width={size} height={size} className={className} alt="icon" />
);