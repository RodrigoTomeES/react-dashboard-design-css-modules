import React, { useRef, useMemo, useImperativeHandle } from 'react';
import { useTheme } from '@geist-ui/react';
import { ButtonTypes } from '@/utils/prop-types';
import { getButtonChildrenWithIcon } from './utils';

interface Props {
  type?: ButtonTypes;
  shadow?: boolean;
  auto?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

const defaultProps = {
  type: 'default' as ButtonTypes,
  shadow: false,
  auto: false,
  disabled: false,
  className: ''
};

type NativeAttrs = Omit<React.ButtonHTMLAttributes<any>, keyof Props>;
export type ButtonProps = Props & NativeAttrs;

const Button = React.forwardRef<
  HTMLButtonElement,
  React.PropsWithChildren<ButtonProps>
>(
  (
    btnProps: ButtonProps & typeof defaultProps,
    ref: React.Ref<HTMLButtonElement | null>,
  ) => {
    const theme = useTheme();
    const buttonRef = useRef<HTMLButtonElement>(null);
    useImperativeHandle(ref, () => buttonRef.current);

    /* eslint-disable @typescript-eslint/no-unused-vars */
    const {
      children,
      disabled,
      type,
      shadow,
      onClick,
      auto,
      icon,
      iconRight,
      className,
      ...props
    } = btnProps;
    /* eslint-enable @typescript-eslint/no-unused-vars */

    /* istanbul ignore next */
    const childrenWithIcon = useMemo(
      () =>
        getButtonChildrenWithIcon(auto, children, {
          icon,
          iconRight,
        }),
      [auto, children, icon, iconRight],
    );

    return (
      <button
        ref={buttonRef}
        className={`btn ${className}`}
        disabled={disabled}
        onClick={onClick}
        data-type={type}
        {...props}>
        {childrenWithIcon}
        <style jsx>{`
          .btn {
            box-sizing: border-box;
            display: inline-block;
            line-height: calc(2.5 * 16px);
            border-radius: ${theme.layout.radius};
            font-weight: 400;
            font-size: calc(0.875 * 16px);
            user-select: none;
            outline: none;
            text-transform: capitalize;
            justify-content: center;
            text-align: center;
            white-space: nowrap;
            transition:
              background-color 200ms ease 0ms,
              box-shadow 200ms ease 0ms,
              border 200ms ease 0ms,
              color 200ms ease 0ms;
            position: relative;
            overflow: hidden;
            color: ${theme.palette.accents_5};
            --button-color: ${theme.palette.accents_5};
            background-color: ${theme.palette.background};
            border: 1px solid ${theme.palette.border};
            cursor: pointer;
            pointer-events: auto;
            box-shadow: ${shadow ? theme.expressiveness.shadowSmall : 'none'};
            min-width: min-content;
            width: ${auto ? 'auto' : 'initial'};
            height: calc(2.5 * 16px);
            --button-height: calc(2.5 * 16px);
            padding: 0 calc(1.15 * 16px) 0 calc(1.15 * 16px);
            --button-icon-padding: 0 calc(1.15 * 16px) 0 calc(1.15 * 16px);
            margin: 0;
          }

          .btn[data-type="abort"] {
            color: ${theme.palette.accents_5};
            --button-color: ${theme.palette.accents_5};
            background-color: transparent;
            border: transparent;
          }

          .btn[data-type="secondary"] {
            color: ${theme.palette.background};
            --button-color: ${theme.palette.background};
            background-color: ${theme.palette.foreground};
            border: 1px solid ${theme.palette.foreground};
          }

          .btn:hover,
          .btn:focus {
            color: ${theme.palette.foreground};
            --button-color: ${theme.palette.foreground};
            background-color: ${theme.palette.background};
            border-color: ${theme.palette.foreground};
            cursor: pointer;
            pointer-events: auto;
            box-shadow: ${shadow ? theme.expressiveness.shadowMedium : 'none'};
            transform: translate3d(0px, ${shadow ? '-1px' : '0px'}, 0px);
          }

          .btn:hover[data-type="abort"],
          .btn:focus[data-type="abort"] {
            color: ${theme.palette.accents_5};
            --button-color: ${theme.palette.accents_5};
            background-color: transparent};
            border-color: transparent;
          }

          .btn:hover[data-type="secondary"],
          .btn:focus[data-type="secondary"] {
            color: ${theme.palette.foreground};
            --button-color: ${theme.palette.foreground};
            background-color: ${theme.palette.background}};
            border-color: 1px solid ${theme.palette.foreground};
          }

          .btn :global(.text) {
            position: relative;
            z-index: 1;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            line-height: inherit;
            top: -1px;
          }

          .btn :global(.text p),
          .btn :global(.text pre),
          .btn :global(.text div) {
            margin: 0;
          }
        `}</style>
      </button>
    )
  },
)

Button.defaultProps = defaultProps;

export default Button;
