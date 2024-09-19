import { LazyLoadImage } from 'react-lazy-load-image-component';

const RecipeItem = ({ recipe }:any) => {
  const { image, name, cuisineType, mealType, id, calories } = recipe || {};

  return (
    <div className="recipe-list-item group">
      <div className="recipe-item-top">


        <LazyLoadImage
            alt={name}
            className="recipe-item-img group-hover:scale-125"
            src={image}
          />

      </div>
      <div className="recipe-item-bottom">
        <div className="p-4">
          <h3 className="recipe-item-name">{name}</h3>
          <ul>
            <li>
              <span>calories: &nbsp;</span>
              <span>{Math.round(calories) ||0}</span>
            </li>
    
          </ul>
        </div>

      </div>
    </div>
  );
};

export default RecipeItem;
 