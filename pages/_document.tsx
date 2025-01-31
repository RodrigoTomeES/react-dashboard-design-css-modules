import React from 'react';
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

import CssBaseline from '@/components/css-baseline';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <CssBaseline />
        </>
      )
    };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <script
            dangerouslySetInnerHTML={{
              __html: `
            (function(){
              if (!window.localStorage) return;
              if (window.localStorage.getItem('theme') === 'dark') {
                document.documentElement.style.background = '#000';
                document.body.style.background = '#000';
              } else {
                document.documentElement.style.background = '#fff';
                document.body.style.background = '#fff';
              }
            })()`
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
