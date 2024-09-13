import PropTypes from "prop-types";
import RecipeItem from "./RecipeItem";

// @ts-ignore
const RecipeList:RecipeList.propTypes = ({ recipes, recipesLength=0 }) => {
  return (
    <div className="recipe-list">
      {recipes?.slice(0, recipesLength).map((recipe:any) => (
        <RecipeItem recipe={recipe} key={recipe.id} />
      ))}
    </div>
  );
};

export default RecipeList;

RecipeList.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      image: PropTypes.string,
      name: PropTypes.string.isRequired,
      cuisineType: PropTypes.array,
      mealType: PropTypes.array,
    })
  ).isRequired,
  recipesLength: PropTypes.number,
};

RecipeList.defaultProps = {
  recipesLength: 20, // no recipes to show by default
};
