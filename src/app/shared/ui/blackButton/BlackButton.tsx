import React from "react";
import styles from "./BlackButtonutton.module.scss";

interface ButtonProps {
  onClick: () => void;  
  children: React.ReactNode;  
  className?: string;  
  disabled?: boolean;  
  selected?: boolean;  
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  className = "",
  disabled = false,
  selected = false,
}) => {
  return (
    <button
      className={`${styles.button} ${className} ${selected ? styles.selected : ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
