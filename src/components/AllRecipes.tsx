
import {addRecipe, loadData} from "../redux/storeRecipe"

import React, { useEffect } from 'react';
import FavoriteButton from "./FavoriteButton";
import Recipe from "./Recipe";

const favoriteIconURL = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/favorite.svg'

const AllRecipes = (props: any) => {

    const { state, dispatch } = props;
    const allRecipes = state.getState();

    console.log(allRecipes);

    const onFirstRender = () => {
       dispatch(loadData);
    }

    useEffect(onFirstRender, [])

    const onAddRecipeHandler = (recipe:any) => {
        dispatch(addRecipe(recipe));
    };

    return (
        <div className="recipes-container">
            {allRecipes.map((recipe:any) => (
                <Recipe recipe={recipe} key={recipe.id}>
                    <FavoriteButton
                        onClickHandler={() => onAddRecipeHandler(recipe)}
                        icon={favoriteIconURL}
                    >
                        Add to Favorites
                    </FavoriteButton>
                </Recipe>
            ))}
        </div>
    );
};

export default AllRecipes;

