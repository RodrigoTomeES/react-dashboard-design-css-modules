import React from 'react';
import * as Icons from 'react-feather';

import Dot from '@/components/dot';
import Button from '@/components/button/button';
import Card from '@/components/card/index';

interface Props {
  projectId: string;
  createdAt: string;
  repo: string;
};

export type OverviewProjectProps = Props;

const OverviewProject: React.FC<OverviewProjectProps> = ({ projectId, createdAt, repo }) => (
  <>
    <div className="project__wrapper">
      <Card className="project__card" shadow>
        <div className="project__title">
          <h3>{projectId}</h3>
          <Button className="project__visit-button" auto>
            Visit
          </Button>
        </div>
        <div>
          <Dot className="project__deployment">
            <a href="#">{projectId}.vercel.app</a>
            <span className="project__environment-tag">
              Production
            </span>
            <span className="project__created-at">{createdAt}</span>
          </Dot>
          <Dot className="project__deployment">
            <a href="#">{projectId}-oa71gi2.vercel.app</a>
            <span className="project__environment-tag">
              Latest
            </span>
            <span className="project__created-at">{createdAt}</span>
          </Dot>
        </div>
        <Card.Footer className="project__footer">
          <Icons.GitHub size={14} />
          <p className="project__repo">{repo}</p>
        </Card.Footer>
      </Card>
    </div>
    <style jsx>{`
      a {
        color: inherit;
      }
      .project__wrapper :global(.project__card) {
        padding: 0 !important;
      }
      .project__title {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 16pt;
      }
      .project__title :global(h3) {
        margin: 0;
      }
      .project__wrapper :global(.project__deployment) {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 4pt;
      }
      .project__wrapper :global(.project__deployment) :global(.icon) {
        background-color: #50e3c2;
      }
      .project__wrapper :global(.project__deployment) :global(.label) {
        display: flex;
        align-items: center;
        flex: 1;
        overflow: hidden;
        text-transform: unset;
      }
      .project__wrapper :global(.project__deployment) :global(a) {
        font-size: 0.875rem;
        font-weight: 500;
        display: inline-block;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .project__wrapper :global(.project__environment-tag) {
        color: var(--theme-palette-foreground);
        background: var(--theme-palette-accents-1);
        border: 1px solid var(--theme-palette-accents-2);
        border-radius: 1rem;
        padding: 2px 6px;
        height: unset;
        font-size: 0.75rem;
        font-weight: 500;
        margin-left: 8pt;
      }
      .project__wrapper :global(.project__created-at) {
        color: var(--theme-palette-accents-4);
        font-size: 0.875rem;
        text-align: right;
        margin: 0 0 0 8pt;
      }
      .project__wrapper :global(.project__footer) {
        display: flex;
        align-items: center;
        font-weight: 500;
      }
      .project__wrapper :global(.project__repo) {
        font-size: 0.875rem;
        font-weight: 500;
        margin-left: 4pt;
      }
      .project__wrapper :global(.project__visit-button) {
        height: calc(2 * 16px);
        line-height: calc(2 * 16px);
      }
      @media (max-width: 650px) {
        .project__wrapper :global(.project__visit-button) {
          display: none;
        }
      }
    `}</style>
  </>
);

export default OverviewProject;
