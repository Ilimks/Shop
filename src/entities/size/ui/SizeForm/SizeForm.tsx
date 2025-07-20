'use client';

import { useState } from 'react';
import styles from './SizeForm.module.scss';
import { Size } from '../../model/types';

interface SizeFormProps {
  size?: Size;
  onSubmit: (size: string) => Promise<void>;
  onCancel?: () => void;
}

export const SizeForm = ({
  size,
  onSubmit,
  onCancel,
}: SizeFormProps) => {
  const [sizeValue, setSizeValue] = useState(size?.size || '');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await onSubmit(sizeValue);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit size');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2>{size ? 'Редактировать размер' : 'Создать новый размер'}</h2>
      
      {error && <div className={styles.error}>{error}</div>}
      
      <div className={styles.formGroup}>
        <label>Размер:</label>
        <input
          type="text"
          value={sizeValue}
          onChange={(e) => setSizeValue(e.target.value)}
          required
        />
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