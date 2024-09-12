import React from 'react';
import FavoriteButton from "./FavoriteButton";
import Recipe from "./Recipe";
import {removeRecipe} from "../redux/storeRecipe"


const unfavoriteIconUrl = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/unfavorite.svg'

export const FavoriteRecipes = (props:any ) =>{

    const { favoriteRecipes, dispatch } = props;

    const onRemoveRecipeHandler = (recipe:any) => {

        dispatch(removeRecipe(recipe));
    };

    return (
        <div className="recipes-container">
            {favoriteRecipes.map(createRecipeComponent)}
        </div>
    );

    // Helper Function
    function createRecipeComponent(recipe:any) {
        return (
            <Recipe recipe={recipe} key={recipe.id}>
                <FavoriteButton
                    onClickHandler={() => onRemoveRecipeHandler(recipe)}
                    icon={unfavoriteIconUrl}
                >
                    Remove Favorite
                </FavoriteButton>
            </Recipe>
        )
    }

};
export default FavoriteRecipes;