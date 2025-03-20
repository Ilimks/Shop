import './Icon.scss'
import Image from "next/image";

export const Web = ({ size = 38, className = "" }: { size?: number; className?: string }) => {

    return (

        <div className={className}>
        <Image 
        src="/assets/images/web.svg"
        width={size}
        height={size}
        className={className + '__not'}
        alt="icon" 
        />
        
        <Image
        src={"/assets/images/webs.svg"} 
        width={size}
        height={size}
        className={className + '__hovered'}
        alt="icon" />
         
        </div>
    )
}
