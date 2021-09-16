import React from 'react';
import { Popover } from '@geist-ui/react';

const UserSettings: React.FC = () => (
  <>
    <Popover.Item title>
      <span>User Settings</span>
    </Popover.Item>
    <Popover.Item>
      <a href="#">Teams</a>
    </Popover.Item>
    <Popover.Item>
      <a href="https://github.com/RodrigoTomeES/react-dashboard-design-css-modules/">GitHub</a>
    </Popover.Item>
    <Popover.Item line />
    <Popover.Item>
      <a href="#">Logout</a>
    </Popover.Item>
    <style jsx>{`
      a {
        color: inherit;
      }
    `}</style>
  </>
);

export default UserSettings;
