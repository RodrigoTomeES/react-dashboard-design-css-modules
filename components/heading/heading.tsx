import React from 'react';
import NextLink from 'next/link';
import * as Icons from 'react-feather';

import Avatar from '@/components/avatar/avatar';
import Button from '@/components/button/button';

import styles from './heading.module.scss';

interface Props {
  user: { name: string; role: string; github?: string };
};

export type HeadingProps = Props;

const Heading: React.FC<HeadingProps> = ({ user }) => (
  <>
    <div className={styles.heading__wrapper}>
      <div className={styles.heading}>
        <Avatar alt="Your Avatar" className={styles['heading__user-avatar']} src="/assets/avatar.png" />
        <div className={styles.heading__name}>
          <div className={styles.heading__title}>
            <h2 className={styles['heading__user-name']}>
              {user.name}
            </h2>
            <span className={styles['heading__user-role']}>{user.role}</span>

            <div className={styles.heading__actions}>
              <NextLink href="/projects" passHref>
                <Button type="secondary" auto>
                  Create Project
                </Button>
              </NextLink>
            </div>
          </div>

          {user.github && (
            <div className={styles.heading__integration}>
              <p className={styles['heading__integration-title']}>Git Integrations</p>
              <a href={`https://github.com/${user.github}`} target="_blank" rel="noopener">
                <div className={styles['heading__integration-inner']}>
                  <Icons.GitHub size={16} aria-label="Github" />
                  <span>{user.github}</span>
                </div>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  </>
);

export default Heading;
