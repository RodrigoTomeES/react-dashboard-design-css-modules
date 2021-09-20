import React from 'react';

import styles from './button-icon.module.scss';

interface Props {
  isRight?: boolean;
  isSingle?: boolean;
  className?: string;
};

const defaultProps = {
  isRight: false,
  className: ''
};

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;
export type ButtonIconProps = Props & NativeAttrs;

const ButtonIcon: React.FC<React.PropsWithChildren<ButtonIconProps>> = ({
  isRight,
  isSingle,
  children,
  className,
  ...props
}: ButtonIconProps & typeof defaultProps) => (
  <span
    className={`${styles.icon} ${isRight && styles.right} ${
      isSingle && styles.single} ${className}`}
    {...props}>
    {children}
  </span>
)

ButtonIcon.defaultProps = defaultProps;

export default ButtonIcon;
