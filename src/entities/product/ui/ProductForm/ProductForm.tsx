'use client';

import { useState, useEffect } from 'react';
import { useAuthToken } from '@/shared/hooks/useAuthToken';
import { Product, StockItem } from '@/entities/product/model/types';
import { Category } from '@/entities/category/model/types';
import { Color } from '@/entities/color/model/types';
import { Size } from '@/entities/size/model/types';
import styles from './ProductForm.module.scss';

interface ProductFormProps {
  product?: Product;
  categories: Category[];
  colors: Color[];
  sizes: Size[];
  onSubmit: (productData: FormData) => Promise<void>;
  onCancel?: () => void;
}

export const ProductForm = ({
  product,
  categories,
  colors,
  sizes,
  onSubmit,
  onCancel,
}: ProductFormProps) => {
  const [name, setName] = useState(product?.name || '');
  const [description, setDescription] = useState(product?.description || '');
  const [price, setPrice] = useState(product?.price.toString() || '');
  const [oldPrice, setOldPrice] = useState(product?.oldPrice?.toString() || '');
  const [madeIn, setMadeIn] = useState(product?.madeIn || '');
  const [brand, setBrand] = useState(product?.brand || '');
  const [material, setMaterial] = useState(product?.material || '');
  const [categoryId, setCategoryId] = useState<number>(product?.category?.id || categories[0]?.id || 0);
  const [mainImage, setMainImage] = useState<File | null>(null);
  const [additionalImages, setAdditionalImages] = useState<File[]>([]);
  const [stock, setStock] = useState<StockItem[]>(product?.stock || []);
  const [currentStockColor, setCurrentStockColor] = useState<number>(colors[0]?.id || 0);
  const [currentStockSize, setCurrentStockSize] = useState<number>(sizes[0]?.id || 0);
  const [currentStockQuantity, setCurrentStockQuantity] = useState('0');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAddStock = () => {
    const color = colors.find(c => c.id === currentStockColor);
    const size = sizes.find(s => s.id === currentStockSize);
    
    if (!color || !size) return;

    const existingItemIndex = stock.findIndex(
      item => item.color.id === color.id && item.size.id === size.id
    );

    const quantity = parseInt(currentStockQuantity) || 0;

    if (existingItemIndex >= 0) {
      const updatedStock = [...stock];
      updatedStock[existingItemIndex] = {
        ...updatedStock[existingItemIndex],
        quantity: updatedStock[existingItemIndex].quantity + quantity
      };
      setStock(updatedStock);
    } else {
      setStock([...stock, { color, size, quantity }]);
    }

    setCurrentStockQuantity('0');
  };

  const handleRemoveStock = (colorId: number, sizeId: number) => {
    setStock(stock.filter(item => !(item.color.id === colorId && item.size.id === sizeId)));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('description', description);
      formData.append('price', price);
      if (oldPrice) formData.append('oldPrice', oldPrice);
      formData.append('madeIn', madeIn);
      formData.append('brand', brand);
      formData.append('material', material);
      formData.append('categoryId', categoryId.toString());

      if (mainImage) {
        formData.append('mainImage', mainImage);
      }

      additionalImages.forEach((image, index) => {
        formData.append(`additionalImages`, image);
      });

      stock.forEach((item, index) => {
        formData.append(`stock[${index}][colorId]`, item.color.id.toString());
        formData.append(`stock[${index}][sizeId]`, item.size.id.toString());
        formData.append(`stock[${index}][quantity]`, item.quantity.toString());
      });

      await onSubmit(formData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit product');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2>{product ? 'Редактировать продукт' : 'Создать новый продукт'}</h2>
      
      {error && <div className={styles.error}>{error}</div>}
      
      <div className={styles.formGroup}>
        <label>Название:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      
      <div className={styles.formGroup}>
        <label>Описание:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      
      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label>Цена (сом):</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            min="0"
            required
          />
        </div>
        
        <div className={styles.formGroup}>
          <label>Старая цена (сом, опционально):</label>
          <input
            type="number"
            value={oldPrice}
            onChange={(e) => setOldPrice(e.target.value)}
            min="0"
          />
        </div>
      </div>
      
      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label>Страна производства:</label>
          <input
            type="text"
            value={madeIn}
            onChange={(e) => setMadeIn(e.target.value)}
          />
        </div>
        
        <div className={styles.formGroup}>
          <label>Бренд:</label>
          <input
            type="text"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
        </div>
        
        <div className={styles.formGroup}>
          <label>Материал:</label>
          <input
            type="text"
            value={material}
            onChange={(e) => setMaterial(e.target.value)}
          />
        </div>
      </div>
      
      <div className={styles.formGroup}>
        <label>Категория:</label>
        <select
          value={categoryId}
          onChange={(e) => setCategoryId(Number(e.target.value))}
          required
        >
          {categories.map(category => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      
      <div className={styles.formGroup}>
        <label>Главное изображение:</label>
        <input
          type="file"
          onChange={(e) => setMainImage(e.target.files?.[0] || null)}
          accept="image/*"
          required={!product}
        />
        {product && !mainImage && (
          <img 
            src={`${process.env.NEXT_PUBLIC_API_URL}/uploads/${product.mainImage}`} 
            alt="Current main" 
            className={styles.currentImage}
          />
        )}
      </div>
      
      <div className={styles.formGroup}>
        <label>Дополнительные изображения:</label>
        <input
          type="file"
          multiple
          onChange={(e) => setAdditionalImages(Array.from(e.target.files || []))}
          accept="image/*"
        />
        {product && product.additionalImages.length > 0 && additionalImages.length === 0 && (
          <div className={styles.currentImages}>
            {product.additionalImages.map((image, index) => (
              <img 
                key={index}
                src={`${process.env.NEXT_PUBLIC_API_URL}/uploads/${image}`} 
                alt={`Additional ${index}`}
                className={styles.currentImage}
              />
            ))}
          </div>
        )}
      </div>
      
      <div className={styles.stockSection}>
        <h3>Складские запасы</h3>
        
        <div className={styles.stockControls}>
          <select
            value={currentStockColor}
            onChange={(e) => setCurrentStockColor(Number(e.target.value))}
          >
            {colors.map(color => (
              <option key={color.id} value={color.id}>
                {color.color}
              </option>
            ))}
          </select>
          
          <select
            value={currentStockSize}
            onChange={(e) => setCurrentStockSize(Number(e.target.value))}
          >
            {sizes.map(size => (
              <option key={size.id} value={size.id}>
                {size.size}
              </option>
            ))}
          </select>
          
          <input
            type="number"
            min="0"
            value={currentStockQuantity}
            onChange={(e) => setCurrentStockQuantity(e.target.value)}
            placeholder="Количество"
          />
          
          <button 
            type="button" 
            onClick={handleAddStock}
            className={styles.addButton}
          >
            Добавить
          </button>
        </div>
        
        <div className={styles.stockList}>
          {stock.map((item, index) => (
            <div key={`${item.color.id}-${item.size.id}`} className={styles.stockItem}>
              <span>{item.color.color}</span>
              <span>{item.size.size}</span>
              <span>{item.quantity}</span>
              <button
                type="button"
                onClick={() => handleRemoveStock(item.color.id, item.size.id)}
                className={styles.removeButton}
              >
                ×
              </button>
            </div>
          ))}
        </div>
      </div>
      
      <div className={styles.actions}>
        <button 
          type="submit" 
          disabled={isSubmitting}
          className={styles.submitButton}
        >
          {isSubmitting ? 'Сохранение...' : 'Сохранить'}
        </button>
        
        {onCancel && (
          <button 
            type="button" 
            onClick={onCancel}
            className={styles.cancelButton}
          >
            Отмена
          </button>
        )}
      </div>
    </form>
  );
};