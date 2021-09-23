import React, { useImperativeHandle, useRef, useState } from 'react';
import { useTheme } from '@geist-ui/react';
import InputIcon from './input-icon';

interface Props {
  placeholder?: string;
  icon?: React.ReactNode;
};

const defaultProps = {
  placeholder: ''
};

type NativeAttrs = Omit<React.InputHTMLAttributes<any>, keyof Props>;
export type InputProps = Props & NativeAttrs;

const Input = React.forwardRef<
  HTMLInputElement,
  React.PropsWithChildren<InputProps>
>(
  (
    {
      icon,
      placeholder,
      ...props
    }: React.PropsWithChildren<InputProps> & typeof defaultProps,
    ref: React.Ref<HTMLInputElement | null>,
  ) => {
    const theme = useTheme();
    const inputRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(ref, () => inputRef.current);
    const [hover, setHover] = useState<boolean>(false);
    const [selfValue, setSelfValue] = useState<string>('');

    const focusHandler = (e: React.FocusEvent<HTMLInputElement>) => {
      setHover(true);
    };
    const blurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
      setHover(false);
    };
    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelfValue(event.target.value);
    };

    return (
      <div className="with-label">
        <div className={`input-container`}>
          <div
            className={`input-wrapper ${hover ? 'hover' : ''}`}>
            {icon && <InputIcon icon={icon} />}
            <input
              type='text'
              ref={inputRef}
              className='left-icon'
              placeholder={placeholder}
              onFocus={focusHandler}
              onBlur={blurHandler}
              onChange={changeHandler}
              defaultValue={selfValue}
              {...props}
            />
          </div>
        </div>
        <style jsx>{`
          .with-label {
            display: inline-block;
            box-sizing: border-box;
            -webkit-box-align: center;
            --input-height: calc(2.53125 * 16px);
            font-size: calc(0.984375 * 16px);
            width: 100%;
            height: var(--input-height);
            padding: 0;
            margin:0;
          }

          .input-container {
            display: inline-flex;
            align-items: center;
            width: 100%;
            height: var(--input-height);
          }

          .input-wrapper {
            display: inline-flex;
            vertical-align: middle;
            align-items: center;
            height: 100%;
            flex: 1;
            user-select: none;
            border-radius: ${theme.layout.radius};
            border: 1px solid ${theme.palette.border};
            transition: border 0.2s ease 0s, color 0.2s ease 0s;
          }

          .input-wrapper.left-label {
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
          }

          .input-wrapper.right-label {
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
          }

          .input-wrapper.disabled {
            background-color: ${theme.palette.accents_1};
            border-color: ${theme.palette.accents_2};
            cursor: not-allowed;
          }

          input.disabled {
            cursor: not-allowed;
          }

          .input-wrapper.hover {
            border-color: ${theme.palette.accents_5};
          }

          input {
            margin: 0.25em 0.625em;
            padding: 0;
            box-shadow: none;
            font-size: calc(0.984375 * 16px);
            background-color: transparent;
            border: none;
            color: ${theme.palette.foreground};
            outline: none;
            border-radius: 0;
            width: 100%;
            min-width: 0;
            -webkit-appearance: none;
          }

          input.left-icon {
            margin-left: 0;
          }

          input.right-icon {
            margin-right: 0;
          }

          ::placeholder,
          ::-moz-placeholder,
          :-ms-input-placeholder,
          ::-webkit-input-placeholder {
            color: ${theme.palette.accents_3};
          }

          ::-ms-reveal {
            display: none !important;
          }

          input:-webkit-autofill,
          input:-webkit-autofill:hover,
          input:-webkit-autofill:active,
          input:-webkit-autofill:focus {
            -webkit-box-shadow: 0 0 0 30px ${theme.palette.background} inset !important;
            -webkit-text-fill-color: ${theme.palette.foreground} !important;
          }
        `}</style>
      </div>
    );
  }
);

Input.defaultProps = defaultProps;

export default Input;
