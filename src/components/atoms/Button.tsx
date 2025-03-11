import { classNames } from '@/utils/functions';
import React, { HTMLAttributes } from 'react';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant: keyof typeof variants;
}

const variants = {
  contained: 'bg-primary text-white',
  outlined: 'bg-transparent text-primary',
};

const Button = ({ variant, children, className, ...rest }: ButtonProps) => {
  return (
    <button
      className={classNames(
        'border-2 rounded-lg px-10 py-3 border-primary font-semibold cursor-pointer hover:opacity-90',
        variants[variant],
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
