"use client";
import { ProductCard } from "@/entities/product/ui/ProductCard";
import styles from "./SuitsSection.module.scss";
import { mockProducts } from "@/mock/productMock";
import { Button } from "@/shared/ui/Buttons/ui/Button";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export const SuitsSection: React.FC = () => {
  const [cardsToShow, setCardsToShow] = useState(24);
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 900) {
        setCardsToShow(20);
      } else {
        setCardsToShow(24);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className={styles.suits}>
      <div className="container">
        <div className={styles.suits__box}>
          <h3 className={styles.suits__name}>Костюмы</h3>
          <div className={styles.suits__cards}>
            {mockProducts.slice(16, cardsToShow).map((el, idx) => (
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
            text="Показать больше"
            onClick={() => router.push("/suits")}
            variant="show"
            size="showSize"
          />
        </div>
      </div>
    </section>
  );
};
