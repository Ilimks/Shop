"use client";
import { useState } from "react";
import SelectImage from "./SelectImage/SelectImage";
import { IProduct } from "../../../types/Product";
import styles from "./MainProductSection.module.scss";
import Rating from "@/app/shared/ui/rating/rating";
import Divider from "@/app/shared/ui/divider";
import ColorPicker from "@/app/shared/ui/colorPicker/ColorPicker";
import { Button } from "@/app/shared/ui/blackButton/BlackButton";

interface MainProductSectionProps {
  product: IProduct;
}

const MainProductSection: React.FC<MainProductSectionProps> = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState<string | undefined>();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [count, setCount] = useState(1);

  const handleSizeClick = (size: string) => {
    setSelectedSize(size);
  };

  const handleCountChange = (increment: boolean) => {
    setCount((prevCount) => {
      if (increment) {
        return prevCount + 1;
      } else {
        return prevCount > 1 ? prevCount - 1 : 1;
      }
    });
  };

  const handleAddToCart = () => {
    console.log("отпрвака в карт");
  };

  return (
    <section className={styles.single_product}>
      <div className="container">
        <div className={styles.single_product_box}>
          <SelectImage product={product} />
          <div className={styles.single_product_left}>
            <div className={styles.product_info}>
              <h3>{product.title}</h3>
              <div className={styles.rating}>
                <Rating
                  value={product.rating}
                  activeColor="#ffd700"
                  isEditable={false}
                  size={24.71}
                />
                <p>{product.rating}/5</p>
              </div>
              <div className={styles.price}>
                {product.oldPrice && (
                  <span className={styles.currentPrice}>{product.price}₽</span>
                )}
                <span className={styles.oldPrice}>{product.oldPrice}₽</span>
              </div>
              <div className={styles.description}>
                <p>{product.description}</p>
              </div>
            </div>
            <div className={styles.select_section}>
              <Divider />
              <div className={styles.select_color}>
                <p>Select Colors</p>
                <ColorPicker
                  colors={["#31344F", "#4F4631", "", "yellow"]}
                  selectedColor={selectedColor}
                  onSelect={setSelectedColor}
                />
              </div>
              <Divider />
              <div className={styles.select_size}>
                <p>Choose Size</p>
                <div className={styles.sizes}>
                  {product.sizes.map((size) => (
                    <Button
                      key={size}
                      onClick={() => handleSizeClick(size)}
                      selected={selectedSize === size}
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </div>
              <Divider />
            </div>
            <div className={styles.counter}>
              <div className={styles.counter_left}>
                <button onClick={() => handleCountChange(false)}>-</button>
                <p>{count}</p>
                <button onClick={() => handleCountChange(true)}>+</button>
              </div>
              <Button onClick={handleAddToCart} className={styles.add_cart}>Add to Cart</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainProductSection;
