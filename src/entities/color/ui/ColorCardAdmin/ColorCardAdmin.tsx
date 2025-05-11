// src/entities/color/ui/ColorCardAdmin/ColorCardAdmin.tsx
import { Color } from '../../model/types';
import styles from './ColorCardAdmin.module.scss';
import { deleteColor } from '../../api/colorApi';
import { useAuthToken } from '@/shared/hooks/useAuthToken';
import { useState } from 'react';

interface ColorCardProps {
  color: Color;
  onColorDeleted?: (deletedColorId: number) => void;
  onEditColor?: (color: Color) => void;
}

export const ColorCardAdmin = ({ 
  color, 
  onColorDeleted,
  onEditColor 
}: ColorCardProps) => {
  const token = useAuthToken();
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDeleteColor = async () => {
    if (!token) return;
    
    setIsDeleting(true);
    setError(null);
    
    try {
      await deleteColor(token, color.id);
      if (onColorDeleted) {
        onColorDeleted(color.id);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete color');
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.colorSample} style={{ backgroundColor: color.code }} />
      
      <div className={styles.details}>
        <h3>{color.color}</h3>
        <p>ID: {color.id}</p>
        <p>HEX: {color.code}</p>
      </div>
      
      <div className={styles.actions}>
        <button 
          onClick={() => onEditColor?.(color)}
          className={styles.editButton}
        >
          Редактировать
        </button>
        
        <button 
          onClick={handleDeleteColor}
          disabled={isDeleting}
          className={styles.deleteButton}
        >
          {isDeleting ? 'Удаление...' : 'Удалить цвет'}
        </button>
        {error && <p className={styles.error}>{error}</p>}
      </div>
    </div>
  );
};