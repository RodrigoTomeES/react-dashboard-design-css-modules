import React from 'react';

import Avatar from '@/components/avatar/avatar';

import styles from './activity-event.module.scss';

interface Props {
  username: string;
  avatar: string;
  createdAt: string;
  children: string | React.ReactNode;
}

export type ActivityEventProps = Props;

const ActivityEvent: React.FC<ActivityEventProps> = ({ username, avatar, createdAt, children }) => (
  <div className={styles['activity-event']}>
    <Avatar className={styles['activity-event__avatar']} src={avatar} alt={`${username} Avatar`} />
    <p className={styles['activity-event__message']}>{children}</p>
    <p className={styles['activity-event__created-at']}>{createdAt}</p>
  </div>
);

export default ActivityEvent;
