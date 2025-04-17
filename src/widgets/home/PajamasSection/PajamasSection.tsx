"use client"
import { ProductCard } from "@/entities/product/ui/ProductCard";
import styles from "./PajamasSection.module.scss";
import { mockProducts } from "@/mock/productMock";
import { Button } from "@/shared/ui/Button";
import { useEffect, useState } from "react";

export const PajamasSection: React.FC = () => {

  const [cardsToShow, setCardsToShow] = useState(8);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 900) {
        setCardsToShow(4);
      } else {
        setCardsToShow(8);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className={styles.pajamas}>
      <div className="container">
          <div className={styles.pajamas__box}>
              <h3 className={styles.pajamas__name}>Пижамы</h3>
              <div className={styles.pajamas__cards}>
                {mockProducts.slice(0, cardsToShow).map((el,idx) => (
                    <ProductCard
                      title={el.title}
                      image={el.image}
                      price={el.price}
                      maker={el.maker}
                      key={idx}
                    />
                ))}
              </div>
              <Button
                text='Показать больше'
                onClick={() => console.log('Показать больше')}
                variant='show'
                size='showSize'
              />
          </div>
      </div>
    </section>
  );
};
