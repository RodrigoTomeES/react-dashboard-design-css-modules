import React, { useMemo } from 'react';
import GridBasicItem, { GridBasicItemProps } from './basic-item';
import { GridWrap } from './grid-types';
import css from 'styled-jsx/css';

interface Props {
  gap?: number;
  wrap?: GridWrap;
  className?: string;
};

const defaultProps = {
  gap: 0,
  wrap: 'wrap' as GridWrap,
  className: ''
};

export type GridContainerProps = Props & GridBasicItemProps;

const GridContainer: React.FC<React.PropsWithChildren<GridContainerProps>> = ({
  gap,
  wrap,
  children,
  className,
  ...props
}: React.PropsWithChildren<GridContainerProps> & typeof defaultProps) => {
  const gapUnit = useMemo(() => `calc(${gap} * 16px * 1/3)`, [gap]);
  const { className: resolveClassName, styles } = css.resolve`
    --gaid-gap-unit: ${gapUnit};
    --gaid-container-margin: calc(-1 * var(--gaid-gap-unit));
    --gaid-container-width: calc(100% + var(--gaid-gap-unit) * 2);
    display: flex;
    flex-wrap: ${wrap};
    box-sizing: border-box;
    width: var(--gaid-container-width);
    margin: calc(1 * 16px) var(--gaid-container-margin) var(--gaid-container-margin) var(--gaid-container-margin);
  `;

  return (
    <GridBasicItem className={`${resolveClassName} ${className}`} {...props}>
      {children}
      {styles}
    </GridBasicItem>
  );
};

GridContainer.defaultProps = defaultProps;

export default GridContainer;
