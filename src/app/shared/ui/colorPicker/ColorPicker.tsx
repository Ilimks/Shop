import styles from "./ColorPicker.module.scss";
import { ColorPickerProps } from "../../../types/ColorPicker";
import Image from "next/image";
import isdoneIcon from '../../../../../public/assets/icons/isDoneIcon.svg'

export default function ColorPicker({
  colors,
  selectedColor,
  onSelect,
}: ColorPickerProps) {
  return (
    <div className={styles.colorPicker}>
      {colors.map((color) => (
        <button
          key={color}
          className={`${styles.colorPicker__button} ${
            selectedColor === color
              ? styles["colorPicker__button--selected"]
              : ""
          }`}
          style={{ backgroundColor: color }}
          onClick={() => onSelect(color)}
        >
          {selectedColor === color && (
            <span className={styles.colorPicker__icon}>
                <Image src={isdoneIcon} width={16} height={16} alt="isdoneIcon"/>
            </span>
          )}
        </button>
      ))}
    </div>
  );
}
