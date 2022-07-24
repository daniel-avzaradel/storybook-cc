import React, { ReactNode, HTMLAttributes } from 'react';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: 'primary' | 'secondary';
}

export const Button = ({ children, variant, ...props }: Props) => {
  return (
    <button
      {...props}
      style={{
        backgroundColor: variant === 'primary' ? 'dodgerblue' : 'grey',
        color: variant === 'primary' ? 'black' : 'white',
        borderRadius: '4px',
        padding: '6px 14px',
        border: 'none',
        cursor: 'pointer',
      }}
    >
      {children}
    </button>
  );
};

export default Button;
