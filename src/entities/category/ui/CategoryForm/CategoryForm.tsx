'use client';

import { useState } from 'react';
import styles from './CategoryForm.module.scss';
import { Category } from '../../model/types';

interface CategoryFormProps {
  category?: Category;
  categories: Category[];
  onSubmit: (data: { name: string; parentId?: number }) => Promise<void>;
  onCancel?: () => void;
}

export const CategoryForm = ({
  category,
  categories,
  onSubmit,
  onCancel,
}: CategoryFormProps) => {
  const [name, setName] = useState(category?.name || '');
  const [parentId, setParentId] = useState<number | undefined>(category?.parent?.id);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await onSubmit({ name, parentId });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit category');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2>{category ? 'Редактировать категорию' : 'Создать новую категорию'}</h2>
      
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
        <label>Родительская категория (опционально):</label>
        <select
          value={parentId || ''}
          onChange={(e) => setParentId(e.target.value ? Number(e.target.value) : undefined)}
        >
          <option value="">-- Без родительской категории --</option>
          {categories
            .filter(c => !category || c.id !== category.id) 
            .map(category => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
        </select>
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