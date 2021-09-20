import React from 'react';
import NextLink from 'next/link';

import Heading from '@/components/heading/heading';
import EventListItem from '@/components/activity-event/activity-event';
import OverviewProject from '@/components/overview-project/overview-project';

import styles from './index.module.scss';

const Page = () => (
  <>
    <Heading user={{ name: 'Ofek Ashery', role: 'Admin', github: 'ofekashery' }} />
    <div className={styles.page__wrapper}>
      <div className={styles.page__content}>
        <div className={styles.projects}>
          <OverviewProject
            projectId="react-dashboard-design"
            repo="ofekashery/react-dashboard-design"
            createdAt="4m"
          />
          <OverviewProject projectId="personal-website" repo="ofekashery/personal-website" createdAt="2d" />
          <OverviewProject projectId="docs" repo="github/docs" createdAt="5d" />
          <NextLink href="/projects" passHref>
            <a className={styles['view-all']}>
              View All Projects
            </a>
          </NextLink>
        </div>
        <div className={styles['recent-activity']}>
          <h2 className={styles['recent-activity__title']}>
            Recent Activity
          </h2>
          <EventListItem username="ofekashery" avatar="/assets/avatar.png" createdAt="4m">
            You deployed react-dashboard-design to <b>production</b>
          </EventListItem>
          <EventListItem username="dependabot" avatar="/assets/dependabot.png" createdAt="2d">
            Dependabot deployed docs to <b>docs-git-dependabot-npmelliptic-653.vercel.app</b>
          </EventListItem>
          <EventListItem username="ofekashery" avatar="/assets/avatar.png" createdAt="3d">
            You deployed personal-website to <b>production</b>
          </EventListItem>
          <EventListItem username="ofekashery" avatar="/assets/avatar.png" createdAt="9d">
            You deployed personal-website to <b>production</b>
          </EventListItem>
          <EventListItem username="ofekashery" avatar="/assets/avatar.png" createdAt="9d">
            You created project <b>personal-website</b>
          </EventListItem>
          <NextLink href="/activity" passHref>
            <a className={styles['view-all']}>
              View All Activity
            </a>
          </NextLink>
        </div>
      </div>
    </div>
  </>
);

export default Page;
