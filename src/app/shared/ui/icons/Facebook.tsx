import './Icon.scss'
import Image from "next/image";

export const Facebook = ({ size = 38, className = "" }: { size?: number; className?: string }) => {


  return (
    <div className={className}>
        <Image
        src={"/assets/images/face.svg" }
        width={size}
        height={size}
        alt="face"
        className={className + '__not'}/>

        <Image
        src={"/assets/images/icon.svg"} 
        width={size}
        height={size}
        className={className + '__hovered'}
        alt="face" />
    </div>
    
  );
};
