import React from 'react';

export interface InputIconProps {
  icon: React.ReactNode;
};

const InputIcon: React.FC<InputIconProps> = ({ icon }) => {
  return (
    <span className="input-icon">
      {icon}
      <style jsx>{`
        .input-icon {
          box-sizing: border-box;
          display: inline-flex;
          width: calc(var(--input-height) - 2px);
          flex-shrink: 0;
          height: 100%;
          align-items: center;
          justify-content: center;
          margin: 0;
          padding: 0;
          line-height: 1;
          position: relative;
          cursor: 'default';
          pointer-events:'none';
        }
        .input-icon :global(svg) {
          width: calc(var(--input-height) - 2px);
          height: calc(var(--input-height) - 2px);
          transform: scale(0.44);
        }
      `}</style>
    </span>
  );
};

export default React.memo(InputIcon);
