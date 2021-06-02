import { ThemeProvider } from "@material-ui/core";
import React, { FunctionComponent } from "react";

import theme from "../utils/theme";
import RecipeCard from "./components/recipie-card/RecipieCard";

const Home: FunctionComponent<Object> = () => {
  return (
   <ThemeProvider theme={theme}>
     <RecipeCard title={"Some"}/>
    </ThemeProvider>
  )
}

export default Home;