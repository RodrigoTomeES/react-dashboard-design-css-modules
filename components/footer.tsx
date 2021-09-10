import React from 'react';
import { useTheme } from '@geist-ui/react';

const Footer: React.FC = () => {
  const theme = useTheme();

  return (
    <>
      <footer>
        <p>
          Made with
          love
          🖤
        </p>
      </footer>
      <style jsx>{`
        footer {
          border-top: 1px solid ${theme.palette.border};
          padding: 4pt 16pt;
          text-align: center;
        }
      `}</style>
    </>
  );
};

export default Footer;
