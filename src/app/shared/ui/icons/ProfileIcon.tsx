import Image from "next/image";

export const ProfileIcon = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
    <Image src="/assets/icons/profile_icon.svg" width={size} height={size} className={className} alt="Профиль" />
);