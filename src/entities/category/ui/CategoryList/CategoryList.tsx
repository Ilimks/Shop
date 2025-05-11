// src/entities/category/ui/CategoryList/CategoryList.tsx
import { Category } from "../../model/types";
import { CategoryCardAdmin } from "../CategoryCardAdmin/CategoryCardAdmin";
import styles from "./CategoryList.module.scss";

interface CategoryListProps {
  categories: Category[];
  onCategoryDeleted?: (deletedCategoryId: number) => void;
  onEditCategory?: (category: Category) => void;
}

export const CategoryList = ({ 
  categories, 
  onCategoryDeleted,
  onEditCategory 
}: CategoryListProps) => {
  if (categories.length === 0) {
    return <p className={styles.empty}>Категорий нет</p>;
  }

  return (
    <div className={styles.list}>
      {categories.map((category) => (
        <CategoryCardAdmin
          key={category.id}
          category={category}
          onCategoryDeleted={onCategoryDeleted}
          onEditCategory={onEditCategory}
        />
      ))}
    </div>
  );
};