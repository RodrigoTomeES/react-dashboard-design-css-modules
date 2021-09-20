import React from 'react';
import * as Icons from 'react-feather';

import { usePrefers } from '@/lib/use-prefers';
import Avatar from '@/components/avatar/avatar';
import Submenu from '@/components/navigation/submenu';
import Button from '@/components/button/button';

import styles from './menu.module.scss';

const Menu: React.FC = () => {
  const prefers = usePrefers();

  return (
    <>
      <nav className={styles['menu-nav']}>
        <h1 className={styles['menu-nav__title']}>React Dashboard Design</h1>
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
          <button className={styles['menu-nav__avatar-button']}>
            <Avatar text="OA" />
          </button>
        </div>
      </nav>
      <Submenu />
    </>
  );
};

export default Menu;
