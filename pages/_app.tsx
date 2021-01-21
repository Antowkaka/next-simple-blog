import React, { FC } from 'react';
import { wrapper } from '../store/store';

import type { AppContext, AppProps } from 'next/app';

import '../styles/globals.css';
import { getPostsRequestAction } from '../store/actions/getPostsAction';
import { GET_POSTS_REQUEST } from '../store/actionTypes';
import { SagaStore } from '../type';

function WrappedApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

WrappedApp.getInitialProps = async ({ Component, ctx }: AppContext) => {
  return {
    pageProps: {
      // Call page-level getInitialProps
      ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
      // Some custom thing for all pages
      pathname: ctx.pathname,
    },
  };
};

export default wrapper.withRedux(WrappedApp);
