import React from 'react';
import { ThemeProvider } from "@material-ui/core";
import { FunctionComponent } from "react";
import CustomButton from "../components/customButton/CustomButton";
import {Add} from '@material-ui/icons';

import theme from "../utils/theme";

const Home: FunctionComponent<unknown> = () => {
  return (
   <ThemeProvider theme={theme}>
      <CustomButton name="Add Recipes" color="secondary">
        <Add/>
        </CustomButton>
    </ThemeProvider>
  )
}

export default Home;