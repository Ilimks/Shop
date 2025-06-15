import { Category } from '../../model/types';
import styles from './CategoryCardAdmin.module.scss';
import { deleteCategory } from '../../api/categoryApi';
import { useAuthToken } from '@/shared/hooks/useAuthToken';
import { useState } from 'react';

interface CategoryCardProps {
  category: Category;
  onCategoryDeleted?: (deletedCategoryId: number) => void;
  onEditCategory?: (category: Category) => void;
}

export const CategoryCardAdmin = ({ 
  category, 
  onCategoryDeleted,
  onEditCategory 
}: CategoryCardProps) => {
  const token = useAuthToken();
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDeleteCategory = async () => {
    if (!token) return;
    
    setIsDeleting(true);
    setError(null);
    
    try {
      await deleteCategory(token, category.id);
      if (onCategoryDeleted) {
        onCategoryDeleted(category.id);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete category');
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3>{category.name}</h3>
        {category.parent && (
          <p className={styles.parent}>Родитель: {category.parent.name}</p>
        )}
      </div>
      
      <div className={styles.details}>
        <p>ID: {category.id}</p>
        {category.children && category.children.length > 0 && (
          <div className={styles.children}>
            <h4>Подкатегории:</h4>
            <ul>
              {category.children.map(child => (
                <li key={child.id}>{child.name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      
      <div className={styles.actions}>
        <button 
          onClick={() => onEditCategory?.(category)}
          className={styles.editButton}
        >
          Редактировать
        </button>
        
        <button 
          onClick={handleDeleteCategory}
          disabled={isDeleting}
          className={styles.deleteButton}
        >
          {isDeleting ? 'Удаление...' : 'Удалить категорию'}
        </button>
        {error && <p className={styles.error}>{error}</p>}
      </div>
    </div>
  );
};