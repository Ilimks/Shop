// src/entities/color/ui/ColorForm/ColorForm.tsx
'use client';

import { useState } from 'react';
import styles from './ColorForm.module.scss';
import { Color } from '../../model/types';

interface ColorFormProps {
  color?: Color;
  onSubmit: (data: Omit<Color, 'id'>) => Promise<void>;
  onCancel?: () => void;
}

export const ColorForm = ({
  color,
  onSubmit,
  onCancel,
}: ColorFormProps) => {
  const [name, setName] = useState(color?.color || '');
  const [code, setCode] = useState(color?.code || '#000000');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await onSubmit({ color: name, code });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit color');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2>{color ? 'Редактировать цвет' : 'Создать новый цвет'}</h2>
      
      {error && <div className={styles.error}>{error}</div>}
      
      <div className={styles.formGroup}>
        <label>Название цвета:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      
      <div className={styles.formGroup}>
        <label>Цветовой код (HEX):</label>
        <div className={styles.colorInput}>
          <input
            type="color"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className={styles.colorPicker}
          />
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            pattern="^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$"
            required
            className={styles.colorText}
          />
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