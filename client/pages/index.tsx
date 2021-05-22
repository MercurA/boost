import { ThemeProvider } from "@material-ui/core";
import React, { FunctionComponent } from "react";

import theme from "../utils/theme";

const Home: FunctionComponent<Object> = () => {
  return (
   <ThemeProvider theme={theme}>
    
    </ThemeProvider>
  )
}

export default Home;