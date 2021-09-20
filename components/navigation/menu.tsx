import React from 'react';
import * as Icons from 'react-feather';

import { usePrefers } from '@/lib/use-prefers';
import Avatar from '@/components/avatar';
import Submenu from '@/components/navigation/submenu';
import Button from '@/components/button/button';

const Menu: React.FC = () => {
  const prefers = usePrefers();

  return (
    <>
      <nav className="menu-nav">
        <h1 className="menu-nav__title">React Dashboard Design</h1>
        <div>
          <Button
            aria-label="Toggle Dark mode"
            className="theme-button"
            auto
            type="abort"
            onClick={() => prefers.switchTheme(prefers.themeType === 'dark' ? 'light' : 'dark')}
          >
            {prefers.themeType === 'dark' ? <Icons.Sun size={16} /> : <Icons.Moon size={16} />}
          </Button>
          <button className="user-settings__button">
            <Avatar text="OA" />
          </button>
        </div>
      </nav>
      <Submenu />
      <style jsx>{`
        .menu-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 782pt;
          max-width: 100%;
          margin: 0 auto;
          padding: 0 16pt;
          background-color: var(--theme-palette-background);
          font-size: 16px;
          height: 54px;
          box-sizing: border-box;
        }
        .menu-nav__title {
          font-size: 1rem;
          font-weight: 500;
          margin: 0;
          letter-spacing: 0;
        }
        .menu-nav > div {
          display: flex;
          align-items: center;
        }
        .menu-nav :global(.theme-button) {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2.25rem;
          height: 2.25rem;
          padding: 0;
          margin: 0 8pt;
        }
        .user-settings__button {
          border: none;
          background: none;
          padding: 0;
          margin: 0;
          appearance: none;
          cursor: pointer;
        }
        :global(.user-settings__popover) {
          width: 180px !important;
        }
      `}</style>
    </>
  );
};

export default Menu;
