import React from 'react';
import { Grid, Input } from '@geist-ui/react';
import * as Icons from 'react-feather';

import ProjectCard from '@/components/project-card/project-card';
import Button from '@/components/button/button';

import styles from './projects.module.scss';

const Page = () => (
  <>
    <div className={styles.page__wrapper}>
      <div className={styles.page__content}>
        <div className={styles['actions-stack']}>
          <Input
            scale={1.25}
            width="100%"
            icon={<Icons.Search size={16} aria-label="Search" color={'var(--theme-palette-accents-5)'} />}
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
  </>
);

export default Page;
