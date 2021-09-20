import React, { useMemo } from 'react';

import { hasChild, pickChild } from '@/utils/collections';

import CardFooter from './card-footer';
import CardContent from './card-content';

import styles from './card.module.scss';

interface Props {
  hoverable?: boolean;
  shadow?: boolean;
  className?: string;
};

const defaultProps = {
  hoverable: false,
  shadow: false,
  className: ''
};

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;
export type CardProps = Props & NativeAttrs;

const Card: React.FC<React.PropsWithChildren<CardProps>> = ({
  children,
  hoverable,
  className,
  shadow,
  ...props
}: CardProps & typeof defaultProps) => {
  const hoverShadow = useMemo(() => {
    if (shadow) return styles['card--shadow'];
    return hoverable ? styles['card--hoverable'] : '';
  }, [hoverable, shadow]);

  const [withoutFooterChildren, footerChildren] = pickChild(children, CardFooter);
  const hasContent = hasChild(withoutFooterChildren, CardContent);

  return (
    <div className={`${styles.card} ${shadow && styles['card--shadow']} ${hoverShadow} ${className}`} {...props}>
      {hasContent ? (
        withoutFooterChildren
      ) : (
        <CardContent>{withoutFooterChildren}</CardContent>
      )}
      {footerChildren}
    </div>
  )
}

Card.defaultProps = defaultProps;

export default Card;
