import React from 'react';
import * as Icons from 'react-feather';

import Dot from '@/components/dot/dot';
import Button from '@/components/button/button';
import Card from '@/components/card/index';

import styles from './overview-project.module.scss';

interface Props {
  projectId: string;
  createdAt: string;
  repo: string;
};

export type OverviewProjectProps = Props;

const OverviewProject: React.FC<OverviewProjectProps> = ({ projectId, createdAt, repo }) => (
  <div className={styles.project}>
    <Card className={styles.project__card} shadow>
      <div className={styles.project__title}>
        <h3>{projectId}</h3>
        <Button className={styles['project__visit-button']} auto>
          Visit
        </Button>
      </div>
      <div>
        <Dot className={styles.project__deployment}>
          <a href="#">{projectId}.vercel.app</a>
          <span className={styles['project__environment-tag']}>
            Production
          </span>
          <span className={styles['project__created-at']}>{createdAt}</span>
        </Dot>
        <Dot className={styles.project__deployment}>
          <a href="#">{projectId}-oa71gi2.vercel.app</a>
          <span className={styles['project__environment-tag']}>
            Latest
          </span>
          <span className={styles['project__created-at']}>{createdAt}</span>
        </Dot>
      </div>
      <Card.Footer className={styles.project__footer}>
        <Icons.GitHub size={14} />
        <p className={styles.project__repo}>{repo}</p>
      </Card.Footer>
    </Card>
  </div>
);

export default OverviewProject;
