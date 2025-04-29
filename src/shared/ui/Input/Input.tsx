import { InputProps } from '@/shared/types/types'
import styles from './Input.module.scss'

export const Input: React.FC<InputProps> = ({
  type,
  label,
  value,
  name,
  placeholder,
  error,
  disabled,
  onChange,
  required,
  fullWidth
}) => {
  return (
    <div className={`${styles.Input} ${fullWidth ? styles.Input_fullWidth : ''}`}>
      <label className={styles.Input__label} htmlFor={`${name}-${label}`}>
        {label}
        {required && <span className={styles.Input__required}>*</span>}
      </label>
      <input
        type={type}
        id={`${name}-${label}`}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        required={required}
        className={`${styles.Input__field} ${error ? styles.Input__field_error : ''}`}
      />
    </div>
  )
}