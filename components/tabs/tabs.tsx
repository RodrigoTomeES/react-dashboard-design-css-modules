import React, { useEffect, useMemo, useState } from 'react';

import { TabsHeaderItem, TabsConfig, TabsContext } from './tabs-context';

import styles from './tabs.module.scss';

interface Props {
  initialValue?: string;
  value?: string;
  hideDivider?: boolean;
  onChange?: (val: string) => void;
  className?: string;
};

const defaultProps = {
  className: '',
  hideDivider: false,
};

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;
export type TabsProps = Props & NativeAttrs;

const Tabs: React.FC<React.PropsWithChildren<TabsProps>> = ({
  initialValue: userCustomInitialValue,
  value,
  hideDivider,
  children,
  onChange,
  className,
  ...props
}: React.PropsWithChildren<TabsProps> & typeof defaultProps) => {
  const [selfValue, setSelfValue] = useState<string | undefined>(userCustomInitialValue);
  const [tabs, setTabs] = useState<Array<TabsHeaderItem>>([]);

  const register = (next: TabsHeaderItem) => {
    setTabs(last => {
      const hasItem = last.find(item => item.value === next.value);
      if (!hasItem) return [...last, next];
      return last.map(item => {
        if (item.value !== next.value) return item;
        return {
          ...item,
          ...next
        };
      })
    })
  };

  const initialValue = useMemo<TabsConfig>(
    () => ({
      register,
      currentValue: selfValue,
      inGroup: true
    }),
    [selfValue],
  );

  useEffect(() => {
    if (typeof value === 'undefined') return;
    setSelfValue(value);
  }, [value]);

  const clickHandler = (value: string) => {
    setSelfValue(value);
    onChange && onChange(value);
  };

  return (
    <TabsContext.Provider value={initialValue}>
      <div className={`${styles.tabs} ${className}`} {...props}>
        <header className={styles.header}>
          <div className={`${styles['scroll-container']} ${hideDivider && styles['hide-divider']}`}>
            {tabs.map(({ cell: Cell, value }) => (
              <Cell key={value} value={selfValue} onClick={clickHandler} />
            ))}
          </div>
        </header>
        <div className={styles.content}>{children}</div>
      </div>
    </TabsContext.Provider>
  )
}

Tabs.defaultProps = defaultProps;

export default Tabs;
