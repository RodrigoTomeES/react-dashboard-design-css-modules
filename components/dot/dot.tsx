import React from 'react';

import styles from './dot.module.scss';

interface Props {
  className?: string;
};

const defaultProps = {
  className: ''
};

const Dot: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  className,
  ...props
}: React.PropsWithChildren<Props> & typeof defaultProps) => (
  <span className={`${styles.dot} ${className}`} {...props}>
    <span className={styles.dot__icon} />
    <span className={styles.dot__label}>{children}</span>
  </span>
);

Dot.defaultProps = defaultProps;

export default Dot;
