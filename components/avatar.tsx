import React from 'react';

interface Props {
  src?: string;
  text?: string;
  isSquare?: boolean;
  className?: string;
};

const defaultProps = {
  text: '',
  isSquare: false,
  className: ''
};

type NativeAttrs = Omit<
  Partial<React.ImgHTMLAttributes<any> & React.HTMLAttributes<any>>,
  keyof Props
>;
export type AvatarProps = Props & NativeAttrs;

const safeText = (text: string): string => {
  if (text.length <= 4) return text;
  return text.slice(0, 3);
};

const Avatar: React.FC<AvatarProps> = ({
  src,
  text,
  isSquare,
  className,
  ...props
}: AvatarProps & typeof defaultProps) => {
  const showText = !src;
  const radius = isSquare ? '5px' : '50%';

  return (
    <span className={`avatar ${className}`}>
      {!showText && (
        <img alt="avatar" className="avatar-img" src={src} draggable={false} {...props} />
      )}
      {showText && (
        <span className="avatar-text" {...props}>
          {safeText(text)}
        </span>
      )}

      <style jsx>{`
        .avatar {
          display: inline-block;
          position: relative;
          overflow: hidden;
          border: 1px solid var(--theme-palette-accents-2);
          border-radius: ${radius};
          vertical-align: top;
          background-color: var(--theme-palette-background);
          box-sizing: border-box;
          width: calc(1.75 * 16px);
          height: calc(1.75 * 16px);
          padding: 0;
          margin: 0;
        }

        .avatar-img {
          display: inline-block;
          object-fit: cover;
          width: 100%;
          height: 100%;
          border-radius: ${radius};
          user-select: none;
        }

        .avatar-text {
          position: absolute;
          left: 50%;
          top: 50%;
          font-size: 16px;
          text-align: center;
          transform: translate(-50%, -50%) scale(0.65);
          white-space: nowrap;
          user-select: none;
        }
      `}</style>
    </span>
  )
}

Avatar.defaultProps = defaultProps;

export default Avatar;
