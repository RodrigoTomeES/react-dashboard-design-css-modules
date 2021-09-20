import React from 'react';

const CssBaseline: React.FC<React.PropsWithChildren<unknown>> = ({ children }) => (
  <>
    {children}
    <style global jsx>{`
      html,
      body {
        background-color: var(--theme-palette-background);
        color: var(--theme-palette-foreground);
      }

      html {
        font-size: 16px;
        --geist-icons-background: var(--theme-palette-background);
      }

      body {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;
        font-size: 1rem;
        line-height: 1.5;
        margin: 0;
        padding: 0;
        min-height: 100%;
        position: relative;
        overflow-x: hidden;
        font-family: var(--theme-font-sans);
      }

      #__next {
        overflow-x: hidden;
      }

      *,
      *:before,
      *:after {
        box-sizing: inherit;
        text-rendering: geometricPrecision;
        -webkit-tap-highlight-color: transparent;
      }

      p,
      small {
        font-weight: 400;
        color: inherit;
        letter-spacing: -0.005625em;
        font-family: var(--theme-font-sans);
      }

      p {
        margin: 1em 0;
        font-size: 1em;
        line-height: 1.625em;
      }

      small {
        margin: 0;
        line-height: 1.5;
        font-size: 0.875em;
      }

      b {
        font-weight: 600;
      }

      span {
        font-size: inherit;
        color: inherit;
        font-weight: inherit;
      }

      img {
        max-width: 100%;
      }

      a {
        cursor: pointer;
        font-size: inherit;
        -webkit-touch-callout: none;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-box-align: center;
        align-items: center;
        color: var(--theme-palette-link);
        text-decoration: none;
      }

      a:hover {
        text-decoration: none;
      }

      ul,
      ol {
        padding: 0;
        list-style-type: none;
        margin: 8pt 8pt 8pt 16pt;
        color: var(--theme-palette-foreground);
      }

      ol {
        list-style-type: decimal;
      }

      li {
        margin-bottom: 0.625em;
        font-size: 1em;
        line-height: 1.625em;
      }

      ul li:before {
        content: '–';
        display: inline-block;
        color: var(--theme-palette-accents-4);
        position: absolute;
        margin-left: -0.9375em;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        color: inherit;
        margin: 0 0 0.7rem 0;
      }

      h1 {
        font-size: 3rem;
        letter-spacing: -0.02em;
        line-height: 1.5;
        font-weight: 700;
      }

      h2 {
        font-size: 2.25rem;
        letter-spacing: -0.02em;
        font-weight: 600;
      }

      h3 {
        font-size: 1.5rem;
        letter-spacing: -0.02em;
        font-weight: 600;
      }

      h4 {
        font-size: 1.25rem;
        letter-spacing: -0.02em;
        font-weight: 600;
      }

      h5 {
        font-size: 1rem;
        letter-spacing: -0.01em;
        font-weight: 600;
      }

      h6 {
        font-size: 0.875rem;
        letter-spacing: -0.005em;
        font-weight: 600;
      }

      button,
      input,
      select,
      textarea {
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
        color: inherit;
        margin: 0;
      }

      button:focus,
      input:focus,
      select:focus,
      textarea:focus {
        outline: none;
      }

      code {
        color: var(--theme-palette-code);
        font-family: var(--theme-font-mono);
        font-size: 0.9em;
        white-space: pre-wrap;
      }

      code:before,
      code:after {
        content: '\`';
      }

      pre {
        padding: calc(16pt * 0.75) 16pt;
        margin: 16pt 0;
        border: 1px solid var(--theme-palette-accents-2);
        border-radius: 5px;
        font-family: var(--theme-font-mono);
        white-space: pre;
        overflow: auto;
        line-height: 1.5;
        text-align: left;
        font-size: 13px;
        -webkit-overflow-scrolling: touch;
      }

      pre code {
        color: var(--theme-palette-foreground);
        font-size: 0.8125rem;
        line-height: 1.25em;
        white-space: pre;
      }

      pre code:before,
      pre code:after {
        display: none;
      }

      pre :global(p) {
        margin: 0;
      }

      pre::-webkit-scrollbar {
        display: none;
        width: 0;
        height: 0;
        background: transparent;
      }

      hr {
        border-color: var(--theme-palette-accents-2);
      }

      details {
        background-color: var(--theme-palette-accents-1);
        border: none;
      }

      details:focus,
      details:hover,
      details:active {
        outline: none;
      }

      summary {
        cursor: pointer;
        user-select: none;
        list-style: none;
        outline: none;
      }

      summary::marker,
      summary::before {
        display: none;
      }

      summary::-moz-list-bullet {
        font-size: 0;
      }

      summary:focus,
      summary:hover,
      summary:active {
        outline: none;
        list-style: none;
      }

      blockquote {
        padding: calc(0.667 * 16pt) 16pt;
        color: var(--theme-palette-accents-5);
        background-color: var(--theme-palette-accents-1);
        border-radius: 5px;
        margin: 1.5em 0;
        border: 1px solid var(--theme-palette-border);
      }

      blockquote :global(*:first-child) {
        margin-top: 0;
      }

      blockquote :global(*:last-child) {
        margin-bottom: 0;
      }

      ::selection {
        background-color: var(--theme-palette-selection);
        color: var(--theme-palette-foreground);
      }
    `}</style>
  </>
);

export default CssBaseline;
