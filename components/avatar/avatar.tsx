import React from 'react';

import styles from './avatar.module.scss';

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

  return (
    <span className={`${styles.avatar} ${isSquare && styles['avatar--square']} ${className}`}>
      {!showText && (
        <img alt="avatar" className={styles.avatar__img} src={src} draggable={false} {...props} />
      )}
      {showText && (
        <span className={styles.avatar__text} {...props}>
          {safeText(text)}
        </span>
      )}
    </span>
  )
}

Avatar.defaultProps = defaultProps;

export default Avatar;
