import Image from "next/image";

export const Git  = ({ size = 38, className = "" }: { size?: number; className?: string }) => {

    return (
        <div className={className}>
       <Image 
       src="/assets/images/git.svg"
       width={size}
       height={size} 
       alt="icon"
       className={className + '__not'}  />


<Image
        src={"/assets/images/gits.svg"} 
        width={size}
        height={size}
        className={className + '__hovered'}
        alt="face" />
        </div>
    )
}

    

