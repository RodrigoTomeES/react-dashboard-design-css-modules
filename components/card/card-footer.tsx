import React from 'react';
import { useTheme } from '@geist-ui/react';

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
  const theme = useTheme();

  return (
    <footer
      className={`${disableAutoMargin ? '' : 'auto-margin'} ${className}`}
      {...props}>
      {children}
      <style jsx>{`
        footer {
          padding: calc(0.66 * 16px) calc(1.31 * 16px);
          display: flex;
          align-items: center;
          overflow: hidden;
          color: inherit;
          background-color: inherit;
          font-size: calc(0.875 * 16px);
          border-top: 1px solid ${theme.palette.border};
          border-bottom-left-radius: ${theme.layout.radius};
          border-bottom-right-radius: ${theme.layout.radius};
          min-height: calc(3.3 * 16px);
          width: auto;
          height: auto;
          margin: 0;
        }

        .auto-margin :global(*) {
          margin-top: 0;
          margin-bottom: 0;
          margin-right: ${theme.layout.gapQuarter};
        }
      `}</style>
    </footer>
  )
}

CardFooter.defaultProps = defaultProps;

export default CardFooter;
