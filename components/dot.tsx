import React from 'react';
import { useTheme } from '@geist-ui/react';

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
}: React.PropsWithChildren<Props> & typeof defaultProps) => {
  const theme = useTheme();

  return (
    <span className={`dot ${className}`} {...props}>
      <span className="icon" />
      <span className="label">{children}</span>

      <style jsx>{`
        .dot {
          display: inline-flex;
          align-items: center;
          font-size: 16px;
          width: auto;
          height: auto;
          padding: 0;
          margin: 0;
        }

        .icon {
          width: 0.625em;
          height: 0.625em;
          min-width: calc(0.625 * 12px);
          min-height: calc(0.625 * 12px);
          line-height: 0.625em;
          border-radius: 50%;
          background-color: ${theme.palette.success};
          user-select: none;
        }

        .label {
          margin-left: 0.5em;
          font-size: 1em;
          line-height: 1em;
          text-transform: capitalize;
        }
      `}</style>
    </span>
  )
}

Dot.defaultProps = defaultProps;

export default Dot;
