import React, { useEffect, useMemo, useState } from 'react';

import { TabsHeaderItem, TabsConfig, TabsContext } from './tabs-context';

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
      <div className={`tabs ${className}`} {...props}>
        <header>
          <div className={`scroll-container ${hideDivider ? 'hide-divider' : ''}`}>
            {tabs.map(({ cell: Cell, value }) => (
              <Cell key={value} value={selfValue} onClick={clickHandler} />
            ))}
          </div>
        </header>
        <div className="content">{children}</div>
        <style jsx>{`
          .tabs {
            font-size: 16px;
            width: initial;
            height: auto;
            padding: 0;
            margin: 0;
          }
          header {
            display: flex;
            flex-wrap: nowrap;
            align-items: center;
            overflow-y: hidden;
            overflow-x: scroll;
            scrollbar-width: none;
            position: relative;
          }
          .scroll-container {
            width: 100%;
            height: 100%;
            flex: 1;
            display: flex;
            flex-wrap: nowrap;
            align-items: center;
            border-bottom: 1px solid 5px;
          }
          header::-webkit-scrollbar {
            display: none;
          }
          .hide-divider {
            border-color: transparent;
          }
          .content {
            padding-top: 0.625rem;
          }
        `}</style>
      </div>
    </TabsContext.Provider>
  )
}

Tabs.defaultProps = defaultProps;

export default Tabs;
