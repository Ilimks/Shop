// src/entities/size/ui/SizeList/SizeList.tsx
import { Size } from "../../model/types";
import { SizeCardAdmin } from "../SizeCardAdmin/SizeCardAdmin";
import styles from "./SizeList.module.scss";

interface SizeListProps {
  sizes: Size[];
  onSizeDeleted?: (deletedSizeId: number) => void;
  onEditSize?: (size: Size) => void;
}

export const SizeList = ({ 
  sizes, 
  onSizeDeleted,
  onEditSize 
}: SizeListProps) => {
  if (sizes.length === 0) {
    return <p className={styles.empty}>Размеров нет</p>;
  }

  return (
    <div className={styles.list}>
      {sizes.map((size) => (
        <SizeCardAdmin
          key={size.id}
          size={size}
          onSizeDeleted={onSizeDeleted}
          onEditSize={onEditSize}
        />
      ))}
    </div>
  );
};