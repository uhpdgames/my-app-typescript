import { useDispatch, useSelector } from "react-redux";
import {
  getRecipesError,
  getRecipesStatus,
  getSearchQuery,
  selectSearchResult,
  getRecipesNextPage,
  clearSearch,
} from "../../redux/store/recipesSlice";
import { useCallback, useEffect, useState } from "react";
import { scrollToTop } from "../../utils/scrollToTop";
import { fetchSearchRecipe } from "../../redux/utils/recipeUtils";
import { no_results } from "../../utils/images";
import { AiOutlineClose } from "react-icons/ai";
import { STATUS } from "../../utils/status";
import { RecipeList } from "../../components/recipes";
import Search from "../../components/common/Search";

const RecipeSearchPage = () => {
  const dispatch = useDispatch();
  const queryText = useSelector(getSearchQuery);
  const searchRecipes = useSelector(selectSearchResult);
  const searchStatus = useSelector(getRecipesStatus);
  const searchError = useSelector(getRecipesError);
  const nextPageLink = useSelector(getRecipesNextPage);


  
  const [results, setResults] = useState([]);

  useEffect(() => {
    scrollToTop() 

    setResults(searchRecipes);
  }, []);

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchSearchRecipe({ queryText, nextPageLink }));
    console.log(searchRecipes)
  }, [queryText, dispatch]);



  const handleChange = useCallback((event:any) => {
    const filrerRecipes = searchRecipes.filter((recipe:any) => recipe.name.toLowerCase().includes(event.target.value.toLowerCase()));
    setResults(filrerRecipes)
  }, [searchRecipes]);

  if (!searchRecipes || searchRecipes.length === 0) {
    return (
      <div className="container py-8 custom-min-h no-results-msg">
        <img src={no_results} alt="no results image" />
        <p>No search results found!</p>
      </div>
    );
  }
  return (
    <main className="recipe-search-page custom-min-h pt-[4px]">
      <section>
        <div className="recipes-list">
          <div className="container">
            {searchRecipes?.length > 0 && (
              <button
                type="button"
                className="clear-btn"
                onClick={() => dispatch(clearSearch())}
              >
                <AiOutlineClose className="clear-btn-icon" /> clear Result
              </button>
            )}

            {STATUS.LOADING === searchStatus ? (
                <div>Loading...</div>
            ) : STATUS.FAILED === searchStatus ? (
              searchError
            ) : (
             <>
                 <Search onChange = { handleChange } />
                 <RecipeList recipes={results} />
             </>
            )}

           
          </div>
        </div>
      </section>
    </main>
  );
};

export default RecipeSearchPage;
