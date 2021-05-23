import React from 'react';
import { ThemeProvider } from "@material-ui/core";
import { FunctionComponent } from "react";

import theme from "../utils/theme";

const Home: FunctionComponent<unknown> = () => {
  return (
   <ThemeProvider theme={theme}>
      {''}
    </ThemeProvider>
  )
}

export default Home;