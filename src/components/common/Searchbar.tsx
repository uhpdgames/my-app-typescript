import { useEffect, useState, useCallback } from "react";
import { BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectAllRecipes, setSearchQuery } from "../../redux/store/recipesSlice";
import { fetchSearchRecipe } from "../../redux/utils/recipeUtils";
import Search from "./Search";

const Searchbar = () => {
  const [error, setError] = useState("");
  const [queryText, setQueryText] = useState("");

  const [searchResults, setSearchResults] = useState<any[]>([]);

  const allRecipes = useSelector(selectAllRecipes);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit =  (e:any) => {
    e.preventDefault();

    if (queryText.trim().length > 0) {
      dispatch(fetchSearchRecipe({ queryText }) as any);
      dispatch(setSearchQuery(queryText));
     // setQueryText("");
      navigate("/recipes/search");
    } else {
      setError("Please enter search term.");
    }
    
  }
 
//  console.log('allRecipes', allRecipes );

  //search input changes
  const handleChange = useCallback((event:any) => {
    setQueryText(event.target.value);
    if (event.target.value.length === 0) {
      setError("Please enter search term.");
    }


    console.log(event.target.value);


  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setError("");
    }, 250);

    return () => {
      clearTimeout(timer);
    };
  }, [error]);

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
     <Search onChange={ handleChange }/>

      <button type="submit" className="search-btn">
        <BsSearch className="text-white" size={16} />
      </button>
      { error && <span className="error-message">{error}</span>}
    </form>
  );
};

export default Searchbar;
