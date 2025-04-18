"use client"
import { ProductCard } from "@/entities/product/ui/ProductCard";
import styles from "./RobesSection.module.scss";
import { mockProducts } from "@/mock/productMock";
import { Button } from "@/shared/ui/Button";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export const RobesSection: React.FC = () => {

  const [cardsToShow, setCardsToShow] = useState(16);  
  const router = useRouter();

  useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth <= 900) {
      setCardsToShow(12);
    } else {
      setCardsToShow(16);
    }
  };  

  handleResize();
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
  }, []);  
  return(
      <section className={styles.robes}>
          <div className="container">
              <div className={styles.robes__box}>
                  <h3 className={styles.robes__name}>Халаты</h3>
                  <div className={styles.robes__cards}>
                    {mockProducts.slice(8, cardsToShow).map((el,idx) => (
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
                    onClick={() => router.push('/robes')}
                    variant='show'
                    size='showSize'
                  />
              </div>
          </div>
      </section>
  )
}