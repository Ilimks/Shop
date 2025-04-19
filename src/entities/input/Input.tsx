import { InputProps } from '@/shared/types/types'
import styles from './Input.module.scss'

export const Input: React.FC<InputProps> = ({type, label, value, name, placeholder, error, disabled, onChange,}) => {
    return (
      <div className={styles.Input}>
        <label className={styles.Input__label} htmlFor={`${name}-${label}`}>{label}</label>
        <input
          type={type}
          id={`${name}-${label}`}
          value={value}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          disabled={disabled}
        />
        {error && <p className={styles.Input__error}>Поле для ввода не должно быть пустым!</p>}
      </div>
    )
  }