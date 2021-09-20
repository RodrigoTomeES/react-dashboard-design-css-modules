import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import Tabs from '@/components/tabs/index';

import styles from './submenu.module.scss';

const Submenu: React.FC = () => {
  const router = useRouter();
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const scrollHandler = () => setSticky(document.documentElement.scrollTop > 54);
    document.addEventListener('scroll', scrollHandler);
    return () => document.removeEventListener('scroll', scrollHandler);
  }, [setSticky]);

  return (
    <nav className={styles.submenu__wrapper}>
      <div className={`submenu ${sticky && styles.submenu_sticky}`}>
        <div className={styles.submenu__inner}>
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
  );
};

export default Submenu;
