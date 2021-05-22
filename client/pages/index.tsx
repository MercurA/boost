import { ThemeProvider } from "@material-ui/core";
import React, { FunctionComponent } from "react";

import theme from "../utils/theme";
import RecipeCard from "./components/recipie-card/RecipieCard";

const Home: FunctionComponent<Object> = () => {
  return (
   <ThemeProvider theme={theme}>
     <div style={{marginTop: '20px'}}>
        <RecipeCard title="Title text"/>
     </div>
    </ThemeProvider>
  )
}

export default Home;