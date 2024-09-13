import { pattern_one } from "../../utils/images";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchRecipes } from "../../redux/utils/recipeUtils";
import {
  getRecipesError,
  getRecipesStatus,
  selectAllRecipes,
} from "../../redux/store/recipesSlice";
import { STATUS } from "../../utils/status";
import { RecipeList } from "../../components/recipes";
import { scrollToTop } from "../../utils/scrollToTop";

const HomePage = () => {
  const dispatch = useDispatch();
  const recipes = useSelector(selectAllRecipes);
  const recipesStatus = useSelector(getRecipesStatus);
  const recipesError = useSelector(getRecipesError);

  useEffect(() => {
      // @ts-ignore
    dispatch(fetchRecipes());
  }, [dispatch]);

  useEffect(() => scrollToTop(), []);

    // @ts-ignore
  return (
    <main className="home-page custom-min-h pt-[32px]">

      <section
        className="categories"
        style={{
          background: `url('${pattern_one}') center/cover no-repeat`,
        }}
      >

      </section>

      <section className="showcase-recipes">
        <div className="container">
            <span>Some Recipes</span>
              {/* recipes list */}
          {STATUS.LOADING === recipesStatus ? (
            <div>Loading...</div>
          ) : STATUS.FAILED === recipesStatus ? (
            <div>{recipesError}</div>
          ) : (
            <RecipeList recipes={recipes} recipesLength={12}></RecipeList>
          )}
        </div>
      </section>


    </main>
  );
};

export default HomePage;
