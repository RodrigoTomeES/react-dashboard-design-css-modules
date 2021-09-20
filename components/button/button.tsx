import React, { useRef, useMemo, useImperativeHandle } from 'react';

import { ButtonTypes } from '@/utils/prop-types';
import { getButtonChildrenWithIcon } from './utils';

import styles from './button.module.scss';

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
        className={`${styles.btn} ${auto && styles['btn--auto']} ${shadow && styles['btn--shadow']} ${className}`}
        disabled={disabled}
        onClick={onClick}
        data-type={type}
        {...props}>
        {childrenWithIcon}
      </button>
    )
  },
)

Button.defaultProps = defaultProps;

export default Button;
