import { Product } from "../../model/types";
import { ProductCardAdmin } from "../ProductCardAdmin/ProductCardAdmin";
import styles from "./ProductList.module.scss";

interface ProductListProps {
  products: Product[];
  onProductDeleted?: (deletedProductId: number) => void;
  onEditProduct?: (product: Product) => void;
}

export const ProductList = ({ 
  products, 
  onProductDeleted,
  onEditProduct 
}: ProductListProps) => {
  if (products.length === 0) {
    return <p className={styles.empty}>Продуктов нет</p>;
  }

  return (
    <div className={styles.list}>
      {products.map((product) => (
        <ProductCardAdmin
          key={product.id}
          product={product}
          onProductDeleted={onProductDeleted}
          onEditProduct={onEditProduct}
        />
      ))}
    </div>
  );
};