import React, { FC } from 'react';
import { CssBaseline } from "@material-ui/core";

interface IManiAppProps {
  Component: React.ElementType;
  pageProps: unknown;
}

const MainApp: FC<IManiAppProps> = ({ Component, pageProps }: {Component: React.ElementType, pageProps: unknown}) => {
  return (
    <>
      <CssBaseline />
      <Component {...pageProps} />
    </>
    )
}

export default MainApp;
