import React, { useMemo } from 'react';

import { hasChild, pickChild } from '@/utils/collections';

import CardFooter from './card-footer';
import CardContent from './card-content';

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
    if (shadow) return 'var(--theme-expressiveness-shadowMedium)';
    return hoverable ? 'var(--theme-expressiveness-shadowSmall)' : 'none';
  }, [hoverable, shadow]);

  const [withoutFooterChildren, footerChildren] = pickChild(children, CardFooter);
  const hasContent = hasChild(withoutFooterChildren, CardContent);

  return (
    <div className={`card ${className}`} {...props}>
      {hasContent ? (
        withoutFooterChildren
      ) : (
        <CardContent>{withoutFooterChildren}</CardContent>
      )}
      {footerChildren}
      <style jsx>{`
        .card {
          background: var(--theme-palette-background);
          transition: all 0.2s ease;
          border-radius: 5px;
          box-shadow: ${shadow ? 'var(--theme-expressiveness-shadowSmall)' : 'none'};
          box-sizing: border-box;
          color: var(--theme-palette-foreground);
          background-color: var(--theme-palette-background);
          border: 1px solid transparent;
          width: auto;
          height: auto;
          padding: 0;
          margin: 0;
        }

        .card:hover {
          box-shadow: ${hoverShadow};
        }

        .card :global(img) {
          width: 100%;
        }

        .card :global(.image) {
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
        }
      `}</style>
    </div>
  )
}

Card.defaultProps = defaultProps;

export default Card;
