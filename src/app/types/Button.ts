interface IButton {
  onClick: () => void;  
  children: React.ReactNode;  
  className?: string;  // Дополнительные классы для стилизации
  disabled?: boolean;  
  selected?: boolean;  
}