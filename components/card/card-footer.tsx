import React from 'react';

import styles from './card-footer.module.scss';

interface Props {
  disableAutoMargin?: boolean;
  className?: string;
};

const defaultProps = {
  disableAutoMargin: false,
  className: ''
};

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;
export type CardFooterProps = Props & NativeAttrs;

const CardFooter: React.FC<React.PropsWithChildren<CardFooterProps>> = ({
  children,
  className,
  disableAutoMargin,
  ...props
}: CardFooterProps & typeof defaultProps) => {
  return (
    <footer
      className={`${styles.footer} ${!disableAutoMargin && styles['auto-margin']} ${className}`}
      {...props}>
      {children}
    </footer>
  )
}

CardFooter.defaultProps = defaultProps;

export default CardFooter;
