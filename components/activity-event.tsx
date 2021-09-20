import React from 'react';

import Avatar from '@/components/avatar';

interface Props {
  username: string;
  avatar: string;
  createdAt: string;
  children: string | React.ReactNode;
}

export type ActivityEventProps = Props;

const ActivityEvent: React.FC<ActivityEventProps> = ({ username, avatar, createdAt, children }) => {

  return (
    <>
      <div className="activity-event">
        <Avatar className="activity-event__avatar" src={avatar} alt={`${username} Avatar`} />
        <p className="activity-event__message">{children}</p>
        <p className="activity-event__created-at">{createdAt}</p>
      </div>
      <style jsx>{`
        .activity-event {
          display: flex;
          align-items: center;
          font-size: 0.875rem;
          padding: 8pt 0;
          border-bottom: 1px solid var(--theme-palette-border);
        }
        .activity-event :global(.activity-event__avatar) {
          width: 2rem;
          height: 2rem;
          margin-right: 8pt;
        }
        .activity-event :global(.activity-event__message) {
          flex: 1;
          margin: 0;
        }
        .activity-event :global(.activity-event__created-at) {
          color: var(--theme-palette-accents-4);
          margin: 0 0 0 auto;
          padding-left: 8pt;
          text-align: right;
        }
      `}</style>
    </>
  );
};

export default ActivityEvent;
