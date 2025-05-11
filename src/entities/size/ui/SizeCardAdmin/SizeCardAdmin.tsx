import { Size } from '../../model/types';
import styles from './SizeCardAdmin.module.scss';
import { deleteSize } from '../../api/sizeApi';
import { useAuthToken } from '@/shared/hooks/useAuthToken';
import { useState } from 'react';

interface SizeCardProps {
  size: Size;
  onSizeDeleted?: (deletedSizeId: number) => void;
  onEditSize?: (size: Size) => void;
}

export const SizeCardAdmin = ({ 
  size, 
  onSizeDeleted,
  onEditSize 
}: SizeCardProps) => {
  const token = useAuthToken();
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDeleteSize = async () => {
    if (!token) return;
    
    setIsDeleting(true);
    setError(null);
    
    try {
      await deleteSize(token, size.id);
      if (onSizeDeleted) {
        onSizeDeleted(size.id);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete size');
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.sizeCircle}>
        {size.size}
      </div>
      
      <div className={styles.details}>
        <h3>Размер: {size.size}</h3>
        <p>ID: {size.id}</p>
      </div>
      
      <div className={styles.actions}>
        <button 
          onClick={() => onEditSize?.(size)}
          className={styles.editButton}
        >
          Редактировать
        </button>
        
        <button 
          onClick={handleDeleteSize}
          disabled={isDeleting}
          className={styles.deleteButton}
        >
          {isDeleting ? 'Удаление...' : 'Удалить размер'}
        </button>
        {error && <p className={styles.error}>{error}</p>}
      </div>
    </div>
  );
};