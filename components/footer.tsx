import React from 'react';

const Footer: React.FC = () => (
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
        border-top: 1px solid var(--theme-palette-border);
        padding: 4pt 16pt;
        text-align: center;
      }
    `}</style>
  </>
);

export default Footer;
