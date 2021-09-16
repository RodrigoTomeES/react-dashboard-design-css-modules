import React, { ReactNode } from 'react';

import ButtonIcon from './button-icon';

export const getButtonChildrenWithIcon = (
  auto: boolean,
  children: ReactNode,
  icons: {
    icon?: React.ReactNode,
    iconRight?: React.ReactNode
  }
) => {
  const { icon, iconRight } = icons;
  const hasIcon = icon || iconRight;
  const isRight = Boolean(iconRight);
  const paddingForAutoMode = auto
    ? `calc(var(--geist-ui-button-height) / 2 + var(--geist-ui-button-icon-padding) * .5)`
    : 0;
  if (!hasIcon) return <div className="text">{children}</div>;
  if (React.Children.count(children) === 0) {
    return (
      <ButtonIcon isRight={isRight} isSingle>
        {hasIcon}
      </ButtonIcon>
    );
  }

  return (
    <>
      <ButtonIcon isRight={isRight}>{hasIcon}</ButtonIcon>
      <div className={`text ${isRight ? 'right' : 'left'}`}>
        {children}
        <style jsx>{`
          .left {
            padding-left: ${paddingForAutoMode};
          }
          .right {
            padding-right: ${paddingForAutoMode};
          }
        `}</style>
      </div>
    </>
  );
}
