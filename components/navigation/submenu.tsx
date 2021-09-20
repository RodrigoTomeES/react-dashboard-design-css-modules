import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { usePrefers } from '@/lib/use-prefers';
import Tabs from '@/components/tabs/index';

const Submenu: React.FC = () => {
  const { themeType } = usePrefers();
  const router = useRouter();
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const scrollHandler = () => setSticky(document.documentElement.scrollTop > 54);
    document.addEventListener('scroll', scrollHandler);
    return () => document.removeEventListener('scroll', scrollHandler);
  }, [setSticky]);

  return (
    <>
      <nav className="submenu__wrapper">
        <div className={`submenu ${sticky ? 'submenu_sticky' : ''}`}>
          <div className="submenu__inner">
            <Tabs value={router.asPath} onChange={(route) => router.push(route)}>
              <Tabs.Item label="Overview" value="/" />
              <Tabs.Item label="Projects" value="/projects" />
              <Tabs.Item label="Integrations" value="/integrations" />
              <Tabs.Item label="Activity" value="/activity" />
              <Tabs.Item label="Domains" value="/domains" />
              <Tabs.Item label="Usage" value="/usage" />
              <Tabs.Item label="Settings" value="/settings" />
            </Tabs>
          </div>
        </div>
      </nav>
      <style jsx>{`
        .submenu__wrapper {
          height: 48px;
          position: relative;
          overflow: hidden;
          box-shadow: inset 0 -1px var(--theme-palette-border);
        }
        .submenu_sticky {
          transition: box-shadow 0.2s ease;
        }
        .submenu_sticky {
          position: fixed;
          z-index: 1100;
          top: 0;
          right: 0;
          left: 0;
          background: var(--theme-palette-background);
          box-shadow: ${themeType === 'dark'
            ? `inset 0 -1px var(--theme-palette-border)`
            : 'rgba(0, 0, 0, 0.1) 0 0 15px 0'};
        }
        .submenu__inner {
          display: flex;
          width: 782pt;
          max-width: 100%;
          margin: 0 auto;
          padding: 0 16pt;
          height: 48px;
          box-sizing: border-box;
          overflow-y: hidden;
          overflow-x: auto;
          overflow: -moz-scrollbars-none;
          -ms-overflow-style: none;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          box-sizing: border-box;
        }
        .submenu__inner::-webkit-scrollbar {
          display: none;
        }
        .submenu__inner :global(.content) {
          display: none;
        }
        .submenu__inner :global(.tabs),
        .submenu__inner :global(header) {
          height: 100%;
          border: none;
        }
        .submenu__inner :global(.tab) {
          height: calc(100% - 2px);
          padding-top: 0;
          padding-bottom: 0;
          color: var(--theme-palette-accents-5);
          font-size: 0.875rem;
        }
        .submenu__inner :global(.tab):hover {
          color: var(--theme-palette-foreground);
        }
        .submenu__inner :global(.active) {
          color: var(--theme-palette-foreground);
        }
      `}</style>
    </>
  );
};

export default Submenu;
