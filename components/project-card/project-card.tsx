import React from 'react';

import GitHubIcon from '@/components/icons/github';
import Avatar from '@/components/avatar/avatar';
import Card from '@/components/card/index';

import styles from './project-card.module.scss';

interface Props {
  projectId: string;
  productionHostname?: string;
  framework: string;
  git?: {
    repo: string;
    commitMessage: string;
  };
  updatedAt: string;
}

export type ProjectCardProps = Props;

const ProjectCard: React.FC<ProjectCardProps> = ({ projectId, productionHostname, updatedAt, git, framework }) => {
  return (
    <>
      <div className={styles.project}>
        <Card className={styles.project__card} shadow>
          <div className={styles.project__title__wrapper}>
            <Avatar
              src={`https://raw.githubusercontent.com/vercel/vercel/main/packages/frameworks/logos/${framework}.svg`}
              className={styles.project__icon}
            />
            <div>
              <p style={{ fontWeight: 500, lineHeight: '1.5rem', margin: 0 }}>
                {projectId}
              </p>
              <p style={{ color: 'var(--theme-palette-accents-6)', lineHeight: '1.25rem', margin: 0, fontSize: '0.875rem' }}>
                {productionHostname || `${projectId}.vercel.app`}
              </p>
            </div>
          </div>
          {git ? (
            <div className={styles['project__git-commit']}>
              <p style={{ color: 'var(--theme-palette-accents-6)', fontWeight: 500, margin: 0 }}>
                {git?.commitMessage}
              </p>
            </div>
          ) : (
            <div className={styles['project__git-commit-error']}>No Git Repository connected.</div>
          )}
          <p style={{ color: 'var(--theme-palette-accents-5)', marginBottom: 0, fontSize: '0.875rem' }}>
            {updatedAt} ago
            {git && (
              <>
                {' '}
                via
                <GitHubIcon
                  color={'var(--theme-palette-foreground)'}
                  height="1rem"
                  width="1rem"
                  strokeWidth={2}
                  style={{ verticalAlign: 'middle', marginLeft: `calc(16px * 0.375)` }}
                />
              </>
            )}
          </p>
        </Card>
      </div>
    </>
  );
};

export default ProjectCard;
