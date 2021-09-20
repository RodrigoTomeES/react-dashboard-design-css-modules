import React, { useEffect, useMemo } from 'react';

import { TabsInternalCellProps, useTabsContext } from './tabs-context';

import styles from './tabs-item.module.scss';

interface Props {
  label: string | React.ReactNode;
  value: string;
  disabled?: boolean;
};

const defaultProps = {
  disabled: false
};

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;
export type TabsItemProps = Props & NativeAttrs;

const TabsItem: React.FC<React.PropsWithChildren<TabsItemProps>> = ({
  children,
  value,
  label,
  disabled
}: React.PropsWithChildren<TabsItemProps> & typeof defaultProps) => {
  const { register, currentValue } = useTabsContext();
  const isActive = useMemo(() => currentValue === value, [currentValue, value]);

  const TabsInternalCell: React.FC<TabsInternalCellProps> = ({
    value: currentValue,
    onClick,
  }) => {
    const clickHandler = () => {
      if (disabled) return;
      onClick && onClick(value);
    };
    return (
      <div
        className={`${styles.tab} ${value === currentValue && styles.active} ${
          disabled && styles.disabled}`}
        role="button"
        key={value}
        onClick={clickHandler}>
        {label}
      </div>
    );
  };

  useEffect(() => {
    register && register({ value, cell: TabsInternalCell });
  }, [value, label, disabled, TabsInternalCell]);

  /* eslint-disable react/jsx-no-useless-fragment */
  return isActive ? <>{children}</> : null;
};

TabsItem.defaultProps = defaultProps;

export default TabsItem;
/* eslint-enable */
