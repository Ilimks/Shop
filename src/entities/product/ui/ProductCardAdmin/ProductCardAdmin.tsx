import { Product } from '../../model/types';
import styles from './ProductCardAdmin.module.scss';
import { deleteProduct } from '../../api/productApi';
import { useAuthToken } from '@/shared/hooks/useAuthToken';
import { useState } from 'react';
import { Color } from '@/entities/color/model/types';
import { Size } from '@/entities/size/model/types';

interface ProductCardProps {
  product: Product;
  onProductDeleted?: (deletedProductId: number) => void;
  onEditProduct?: (product: Product) => void;
}

export const ProductCardAdmin = ({ 
  product, 
  onProductDeleted,
  onEditProduct 
}: ProductCardProps) => {
  const token = useAuthToken();
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDeleteProduct = async () => {
    if (!token) return;
    
    setIsDeleting(true);
    setError(null);
    
    try {
      await deleteProduct(token, product.id);
      if (onProductDeleted) {
        onProductDeleted(product.id);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete product');
    } finally {
      setIsDeleting(false);
    }
  };

  const stockByColor = product.stock.reduce((acc, item) => {
    if (!acc[item.color.id]) {
      acc[item.color.id] = {
        color: item.color,
        sizes: {},
        total: 0
      };
    }
    acc[item.color.id].sizes[item.size.id] = {
      size: item.size,
      quantity: item.quantity
    };
    acc[item.color.id].total += item.quantity;
    return acc;
  }, {} as Record<number, {
    color: Color;
    sizes: Record<number, { size: Size; quantity: number }>;
    total: number;
  }>);

  const totalQuantity = product.stock.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3>{product.name}</h3>
        <span className={styles.price}>{product.price} сом</span>
        {product.oldPrice && (
          <span className={styles.oldPrice}>{product.oldPrice} сом</span>
        )}
      </div>
      
      <div className={styles.imageContainer}>
        <img 
          src={`${process.env.NEXT_PUBLIC_API_URL}/uploads/${product.mainImage}`} 
          alt={product.name} 
          className={styles.mainImage}
        />
      </div>
      
      <div className={styles.details}>
        <p>ID: {product.id}</p>
        <p>Категория: {product.category?.name || 'Не указана'}</p>
        <p>Бренд: {product.brand || 'Не указан'}</p>
        <p>Материал: {product.material || 'Не указан'}</p>
        <p>Страна производства: {product.madeIn || 'Не указана'}</p>
        <p>Дата создания: {new Date(product.createdAt).toLocaleDateString()}</p>
        <p>Описание: {product.description || 'Нет описания'}</p>
        <p>Общее количество на складе: {totalQuantity}</p>
      </div>
      
      <div className={styles.stockDetails}>
        <h4>Детализация стока:</h4>
        {Object.values(stockByColor).map(colorGroup => (
          <div key={colorGroup.color.id} className={styles.colorGroup}>
            <div className={styles.colorHeader}>
              <span 
                className={styles.colorSample} 
                style={{ backgroundColor: colorGroup.color.code }}
                title={colorGroup.color.color}
              />
              <span>{colorGroup.color.color}</span>
              <span>(Всего: {colorGroup.total})</span>
            </div>
            
            <div className={styles.sizesContainer}>
              {Object.values(colorGroup.sizes).map(sizeItem => (
                <div key={sizeItem.size.id} className={styles.sizeItem}>
                  <span>Размер: {sizeItem.size.size}</span>
                  <span>Количество: {sizeItem.quantity}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className={styles.actions}>
        <button 
          onClick={() => onEditProduct?.(product)}
          className={styles.editButton}
        >
          Редактировать
        </button>
        
        <button 
          onClick={handleDeleteProduct}
          disabled={isDeleting}
          className={styles.deleteButton}
        >
          {isDeleting ? 'Удаление...' : 'Удалить продукт'}
        </button>
        {error && <p className={styles.error}>{error}</p>}
      </div>
    </div>
  );
};