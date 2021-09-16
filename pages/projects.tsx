import React from 'react';
import { Grid, Input, useTheme } from '@geist-ui/react';
import * as Icons from 'react-feather';

import ProjectCard from '@/components/project-card';
import Button from '@/components/button/button';

const Page = () => {
  const theme = useTheme();

  return (
    <>
      <div className="page__wrapper">
        <div className="page__content">
          <div className="actions-stack">
            <Input
              scale={1.25}
              width="100%"
              icon={<Icons.Search size={16} aria-label="Search" color={theme.palette.accents_5} />}
              placeholder="Search..."
            />
            <Button auto type="secondary">
              New Project
            </Button>
            <Button iconRight={<Icons.UserPlus size={16} aria-label="Add User" />} />
          </div>
          <Grid.Container gap={2} marginTop={1} justify="flex-start">
            <Grid xs={24} sm={12} md={8}>
              <ProjectCard
                projectId="react-dashboard-design"
                framework="next"
                git={{
                  repo: 'ofekashery/react-dashboard-design',
                  commitMessage: 'Bump version'
                }}
                updatedAt="4m"
              />
            </Grid>
            <Grid xs={24} sm={12} md={8}>
              <ProjectCard
                projectId="personal-website"
                framework="react"
                productionHostname="ofek.ashery.me"
                git={{
                  repo: 'ofekashery/personal-website',
                  commitMessage: 'Improve homepage layout on smaller screens'
                }}
                updatedAt="2d"
              />
            </Grid>
            <Grid xs={24} sm={12} md={8}>
              <ProjectCard projectId="docs" framework="other" updatedAt="5d" />
            </Grid>
            <Grid xs={24} sm={12} md={8}>
              <ProjectCard
                projectId="geist"
                framework="react"
                productionHostname="react.geist-ui.dev"
                git={{
                  repo: 'geist-org/react',
                  commitMessage: 'chore: release v2.2.0'
                }}
                updatedAt="8d"
              />
            </Grid>
            <Grid xs={24} sm={12} md={8}>
              <ProjectCard
                projectId="github-blog"
                framework="next"
                productionHostname="github.blog"
                git={{
                  repo: 'github/blog',
                  commitMessage: 'Fix font-size in footer'
                }}
                updatedAt="8d"
              />
            </Grid>
          </Grid.Container>
        </div>
      </div>
      <style jsx>{`
        .page__wrapper {
          background-color: ${theme.palette.accents_1};
          min-height: calc(100vh - 172px);
        }
        .page__content {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          width: 782pt;
          max-width: 100%;
          margin: 0 auto;
          padding: calc(16px * 2) 16pt;
          box-sizing: border-box;
        }
        .actions-stack {
          display: flex;
          width: 100%;
        }
        .actions-stack :global(button) {
          margin-left: 16px;
        }
        .actions-stack :global(.input-wrapper) {
          background-color: ${theme.palette.background};
        }
        .actions-stack :global(input) {
          font-size: 14px;
        }
      `}</style>
    </>
  );
};
export default Page;
