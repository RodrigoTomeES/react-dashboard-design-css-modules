import React from 'react';

import styles from './card-content.module.scss';

interface Props {
  className?: string;
};

const defaultProps = {
  className: ''
};

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;
export type CardContentProps = Props & NativeAttrs;

const CardContent: React.FC<React.PropsWithChildren<CardContentProps>> = ({
  className,
  children,
  ...props
}: CardContentProps & typeof defaultProps) => (
  <div className={`${styles.content} ${className}`} {...props}>
    {children}
  </div>
);

CardContent.defaultProps = defaultProps;

export default CardContent;
