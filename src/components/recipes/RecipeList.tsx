import RecipeItem from "./RecipeItem";

import { memo, useMemo} from 'react';

const RecipeList = ({ recipes }:any ) => {

  //Phan trang
  const start = 0;
  const end = 10;

  const displayRecipes = useMemo(()=>{
    return recipes?.slice(start, end) || [];
  }, [recipes]);


  const TotalCalories = useMemo(()=>{ 
    return displayRecipes.reduce((acc:any, recipe:any) => acc + recipe.calories, 0);
  }

  ,[displayRecipes]);

  return (
    <>
    <br />
    <b>Total Calories:</b><span>{ Math.round(TotalCalories)  }</span>
    <div className="recipe-list">
      {displayRecipes.map((recipe:any) => (
        <RecipeItem recipe={recipe} key={recipe.id} />
      ))}
    </div>
    </>
  );
};

export default memo(RecipeList);
 