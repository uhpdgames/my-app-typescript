import PropTypes from "prop-types";
import { AiOutlineArrowRight } from "react-icons/ai";
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { Link } from "react-router-dom";

const RecipeItem = ({ recipe }:any) => {
  const { image, name, cuisineType, mealType, id, calories } = recipe || {};

  return (
    <div className="recipe-list-item group">
      <div className="recipe-item-top">


        <LazyLoadImage
            alt={name}
            className="recipe-item-img group-hover:scale-125"
            src={image} // use normal <img> attributes as props
          />

      </div>
      <div className="recipe-item-bottom">
        <div className="p-4">
          <h3 className="recipe-item-name">{name}</h3>
          <ul className="recipe-item-info">
            <li>
              <span>Cuisine: &nbsp;</span>
              <span>{cuisineType || "Unknown"}</span>
            </li>
            <li>
              <span>{mealType || "Unknown"}</span>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default RecipeItem;

RecipeItem.propTypes = {
  recipe: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    cuisineType: PropTypes.array,
    mealType: PropTypes.array,
    id: PropTypes.string.isRequired,
  }),
};
