// src/entities/color/ui/ColorList/ColorList.tsx
import { Color } from "../../model/types";
import { ColorCardAdmin } from "../ColorCardAdmin/ColorCardAdmin";
import styles from "./ColorList.module.scss";

interface ColorListProps {
  colors: Color[];
  onColorDeleted?: (deletedColorId: number) => void;
  onEditColor?: (color: Color) => void;
}

export const ColorList = ({ 
  colors, 
  onColorDeleted,
  onEditColor 
}: ColorListProps) => {
  if (colors.length === 0) {
    return <p className={styles.empty}>Цветов нет</p>;
  }

  return (
    <div className={styles.list}>
      {colors.map((color) => (
        <ColorCardAdmin
          key={color.id}
          color={color}
          onColorDeleted={onColorDeleted}
          onEditColor={onEditColor}
        />
      ))}
    </div>
  );
};