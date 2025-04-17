import './Button.scss';
import { ButtonProps } from '@/shared/types/types';
  
export const Button: React.FC<ButtonProps> = ({ text, onClick, variant = 'show', size = 'showSize', disabled = false }) => {
  return (
    <button 
    className={`Button ${variant} ${size}`} 
    onClick={onClick}
    disabled={disabled}
    >
      {text}
    </button>
  ) 
};