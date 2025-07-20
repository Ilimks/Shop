import styles from "./Checkbox.module.scss";
import { CheckboxProps } from "@/shared/types/types";

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  onChange,
  disabled = false,
  name,
  size = "medium",
  variant = "primary",
}) => {
  const classNames = [
    styles.checkbox,
    styles[size],
    styles[variant],
    disabled ? styles.disabled : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <label className={classNames}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
        name={name}
      />
      <span className={styles.customCheckbox} />
      <span className={styles.labelText}>{label}</span>
    </label>
  );
};
