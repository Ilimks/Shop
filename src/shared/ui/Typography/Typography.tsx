import React from 'react';

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'small';

interface TypographyProps {
  variant?: Variant;
  children: React.ReactNode;
  className?: string;
}

const variantClasses: Record<Variant, string> = {
  h1: 'text-4xl font-bold',
  h2: 'text-3xl font-bold',
  h3: 'text-2xl font-bold',
  h4: 'text-xl font-bold',
  body: 'text-base',
  small: 'text-sm'
};

export const Typography: React.FC<TypographyProps> = ({
  variant = 'body',
  children,
  className = ''
}) => {
  const Tag = variant.startsWith('h') ? variant : 'p';
  
  return (
    <Tag className={`${variantClasses[variant]} ${className}`}>
      {children}
    </Tag>
  );
};