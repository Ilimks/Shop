import React from 'react'
import cn from 'classnames'
import { InputProps } from '@/shared/types/types'
import styles from './Input.module.scss'

export const Input: React.FC<InputProps> = ({
  type = 'text',
  label,
  name,
  value,
  placeholder,
  error,
  disabled,
  required,
  fullWidth = false,
  className,
  onChange,
  variant = 'default',
  inputSize = 'medium',
  ...rest
}) => {
  const inputId = `${name || 'input'}-${label || 'label'}`

  return (
    <div className={cn(styles.InputWrapper, fullWidth && styles.fullWidth, className)}>
      {label && (
        <label className={styles.label} htmlFor={inputId}>
          {label}
        </label>
      )}
      <input
        id={inputId}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        required={required}
        className={cn(
          styles.input,
          styles[variant],
          styles[inputSize],
          error && styles.error
        )}
        {...rest}
      />
      {error && <span className={styles.errorText}>{error}</span>}
    </div>
  )
}
