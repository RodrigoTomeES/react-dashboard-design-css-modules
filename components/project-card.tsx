import React from 'react';
import { useTheme } from '@geist-ui/react';

import GitHubIcon from '@/components/icons/github';
import Avatar from '@/components/avatar';
import Card from '@/components/card/index';

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
  const theme = useTheme();

  return (
    <>
      <div className="project__wrapper">
        <Card className="project__card" shadow>
          <div className="project-title__wrapper">
            <Avatar
              src={`https://raw.githubusercontent.com/vercel/vercel/main/packages/frameworks/logos/${framework}.svg`}
              className="project-icon"
            />
            <div className="project-title__content">
              <p style={{ fontWeight: 500, lineHeight: '1.5rem', margin: 0 }}>
                {projectId}
              </p>
              <p style={{ color: theme.palette.accents_6, lineHeight: '1.25rem', margin: 0, fontSize: '0.875rem' }}>
                {productionHostname || `${projectId}.vercel.app`}
              </p>
            </div>
          </div>
          {git ? (
            <div className="project-git-commit">
              <p style={{ color: theme.palette.accents_6, fontWeight: 500, margin: 0 }}>
                {git?.commitMessage}
              </p>
            </div>
          ) : (
            <div className="project-git-commit-error">No Git Repository connected.</div>
          )}
          <p style={{ color: theme.palette.accents_5, marginBottom: 0, fontSize: '0.875rem' }}>
            {updatedAt} ago
            {git && (
              <>
                {' '}
                via
                <GitHubIcon
                  color={theme.palette.foreground}
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
      <style jsx>{`
        .project__wrapper {
          width: 100%;
        }
        .project__wrapper :global(.project__card) {
          box-shadow: ${theme.type === 'dark' ? theme.expressiveness.shadowSmall : '0px 2px 4px rgba(0,0,0,0.1)'};
        }
        .project__wrapper :global(.project__card):hover {
          box-shadow: ${theme.type === 'dark'
            ? `0 0 0 1px ${theme.palette.foreground}`
            : '0px 4px 8px rgba(0,0,0,0.12)'};
        }
        .project-title__wrapper {
          display: flex;
          flex-direction: row;
          align-items: center;
        }
        .project-title__wrapper :global(.project-icon) {
          background: #fff;
          border-radius: 50%;
          border: ${theme.type === 'dark' ? `1px solid ${theme.palette.foreground}` : 'none'};
          margin-right: calc(0.75 * 16px);
        }
        .project-git-commit,
        .project-git-commit-error {
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-height: 3rem;
          margin: 1rem 0;
          font-size: 0.875rem;
        }
        .project-git-commit-error {
          padding: 0 16px;
          border-radius: 5px;
          background: ${theme.palette.accents_1};
          border: 1px solid ${theme.palette.border};
          color: ${theme.palette.accents_5};
        }
      `}</style>
    </>
  );
};

export default ProjectCard;
