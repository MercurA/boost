import React from 'react';
import { FunctionComponent } from "react";

import RecipeCard from './components/recipie-card/RecipieCard';

const Home: FunctionComponent<unknown> = () => {
  return (
    <>
      <RecipeCard title="Some title" />
    </>
  )
}

export default Home;