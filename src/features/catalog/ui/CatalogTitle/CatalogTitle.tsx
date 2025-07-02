import React from "react"
import styles from "./CatalogTitle.module.scss"


type CatalogTitleProps = {
    goodsCounter: number,
}

export const CatalogTitle: React.FC<CatalogTitleProps> = ({goodsCounter}) => {


    function textConverter (number: number): string {

        
      const N = number % 100
        

        if (N % 10 === 1) {
            return `${number} товар найден`
        }
        if ([2, 3, 4].includes(N % 10) && (N < 10 || N > 20)) {
            return `${number} товара найдено`
        }
        return `${number} товаров найдено`
    }




    return (
        <>
            <h2 className={styles.mainTitle}>Результаты поиска</h2>
            <h6 className={styles.goodsCounter}>{textConverter(goodsCounter)}</h6>

        </>
    )
}