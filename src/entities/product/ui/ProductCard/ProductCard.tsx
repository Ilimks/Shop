import Image from "next/image";
import styles from './ProductCard.module.scss';
import { ProductCardProps } from '@/shared/types/types';
import aplySale from "@/shared/functions/aplySale";

export const ProductCard: React.FC<ProductCardProps> = ({sale, colors, sizes, title, price, image, maker }: ProductCardProps) => {
  
  
  function sizePrinter (sizes: string[]): string {

    if (sizes.length === 1) {
      return sizes[0]
    }
    
    let minSize = ""
    let maxSize = ""
    let minSizeNumber = 9999
    let maxSizeNumber = 0

    for(let i = 0; i < sizes.length; i++) {
        switch (sizes[i]){
          case "XS":
            if (minSizeNumber > 1) {
              minSizeNumber = 1
              minSize = "XS"
            }
            if (maxSizeNumber < 1) {
              maxSizeNumber = 1
              maxSize = "XS"
            } 
            break
          case "S":
            if (minSizeNumber > 2) {
              minSizeNumber = 2
              minSize = "S"
            }
            if (maxSizeNumber < 2) {
              maxSizeNumber = 2
              maxSize = "S"
            } 
            break
          case "M":
            if (minSizeNumber > 3) {
              minSizeNumber = 3
              minSize = "M"
            }
            if (maxSizeNumber < 3) {
              maxSizeNumber = 3
              maxSize = "M"
            } 
            break
          case "L":
            if (minSizeNumber > 4) {
              minSizeNumber = 4
              minSize = "L"
            }
            if (maxSizeNumber < 4) {
              maxSizeNumber = 4
              maxSize = "L"
            } 
            break
          case "XL":
            if (minSizeNumber > 5) {
              minSizeNumber = 5
              minSize = "XL"
            }
            if (maxSizeNumber < 5) {
              maxSizeNumber = 5
              maxSize = "XL"
            } 
            break
          case "2XL":
            if (minSizeNumber > 6) {
              minSizeNumber = 6
              minSize = "2XL"
            }
            if (maxSizeNumber < 6) {
              maxSizeNumber = 6
              maxSize = "2XL"
            } 
            break
          case "3XL":
            if (minSizeNumber > 7) {
              minSizeNumber = 7
              minSize = "3XL"
            }
            if (maxSizeNumber < 7) {
              maxSizeNumber = 7
              maxSize = "3XL"
            } 
            break
          case "4XL":
            if (minSizeNumber > 8) {
              minSizeNumber = 8
              minSize = "4XL"
            }
            if (maxSizeNumber < 8) {
              maxSizeNumber = 8
              maxSize = "4XL"
            } 
            break
          case "5XL":
            if (minSizeNumber > 9) {
              minSizeNumber = 9
              minSize = "5XL"
            }
            if (maxSizeNumber < 9) {
              maxSizeNumber = 9
              maxSize = "5XL"
            } 
            break
        }

    };
    return `${minSize} - ${maxSize}`
  }
  
  
  return (
    <div className={styles.card}>
      <Image className={styles.card__img} src={image} alt={title} width={300} height={200}/>
      <div className={styles.card__box}>
        <h3 className={styles.card__box__title}>{title}</h3>
        <div className={styles.card__box__sizesAndColors}>
          <div className={styles.card__box__sizes}>{sizePrinter(sizes)}</div>
          <div className={styles.card__box__colors}>
            {colors.map((color, index )=> (
              index < 3 &&
              <div 
                className={styles.card__box__colorMark}
                style={{backgroundColor: color}} key={color}>

              </div>
            ))}

          </div>

        </div>
        
        <p className={styles.card__box__maker}>{maker}</p>
        <div className={styles.card__box__prices}>
          {sale ? <>
            <div className={styles.card__box__actualPrice}>{aplySale(price, sale)} сом</div>
            <div className={styles.card__box__oldPrice}>{price} сом</div>
          </> :
            <div className={styles.card__box__actualPrice}>{price} сом</div>
          }
        </div>
        <button className={styles.card__box__takeButton}>В корзину</button>
      </div>
    </div>
  );
}