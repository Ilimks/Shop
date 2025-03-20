import Image from "next/image";
import './Icon.scss'
export const Instagram = ({ size = 38, className = "" }: { size?: number; className?: string }) => {

    return (
        <div className={className}>
        <Image
         src={"/assets/images/insta.svg"}
         width={size}
         height={size}
         alt="icon"
         className={className + '__not'}  />

         <Image 
         src={"/assets/images/i.svg"}
         width={size}
         height={size}
         className={className + '__hovered'}
         alt="icon" />
         
        </div>
    )
}

