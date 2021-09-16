import React from 'react';

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
  <div className={`content ${className}`} {...props}>
    {children}
    <style jsx>{`
      .content {
        width: 100%;
        height: auto;
        padding: 16px;
        margin: 0;
      }

      .content > :global(p:first-child) {
        margin-top: 0;
      }

      .content > :global(p:last-child) {
        margin-bottom: 0;
      }
    `}</style>
  </div>
);

CardContent.defaultProps = defaultProps;

export default CardContent;
