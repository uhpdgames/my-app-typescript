import {createStore, combineReducers}     from "redux";

import allRecipesData    from "../data/recipe";

export const ADD_RECIPE = "ADD_RECIPE";

export const REMOVE_RECIPE = "REMOVE_RECIPE";

export const SET_SEARCH = "SET_SEARCH";

export const CLEAR_SEARCH = "CLEAR_SEARCH";

export const LOAD_RECIPES = "LOAD_RECIPES";

//action
export const addRecipe = (recipe:any) => {
    return {
        type: ADD_RECIPE,
        payload: recipe,
    };
};

export const removeRecipe = (recipe:any) => {
    return {
        type: REMOVE_RECIPE,
        payload: recipe,
    };
};
export const setSearch = (search:any) => {
    return {
        type: SET_SEARCH,
        payload: search,
    };
};

export const clearSearch = () => {
    return {
        type: CLEAR_SEARCH,
        payload: "",
    };
};

export const loadData = () => {
    console.log('zzz')
   return {
        type: LOAD_RECIPES,
        payload: allRecipesData,
    };
};


//redux

const initialAllRecipes:any = [];
export const allRecipesReducer = (state = initialAllRecipes, action:any) => {

    switch (action.type) {
        case ADD_RECIPE:
            return [...state, action.payload];
        case REMOVE_RECIPE:
            return state.filter((recipe:any) => recipe.id !== action.payload.id);
        case LOAD_RECIPES:
            return action.payload;

        default:
            return state;
    }
}
export const searchTermReducer = (state = initialAllRecipes, action:any) => {
    switch (action.type) {
        case SET_SEARCH:
            return action.payload;
        case CLEAR_SEARCH:
            return '';
        default:
            return state;
    }
}
export const favoriteRecipesReducer = (favoriteRecipes = initialAllRecipes, action:any) => {
    switch (action.type) {
        case ADD_RECIPE:
            return [...favoriteRecipes, action.payload]
        case REMOVE_RECIPE:
            return favoriteRecipes.filter((recipe:any) => recipe.id !== action.payload.id)
        default:
            return favoriteRecipes;
    }
}


// const dataRedure = (state = {}, action) => {
//     const nextState = {
//         allRecipes: allRecipesReducer(state.allRecipes, action),
//         searchTerm: searchTermReducer(state.searchTerm, action),
//     }
//         return nextState;
// }
// export const  storeRecipe = createStore(dataRedure);
//



const reducers ={
    allRecipes: allRecipesReducer,
    searchTerm: searchTermReducer,
    favoriteRecipes: favoriteRecipesReducer,
};

export const  storeRecipe = createStore(combineReducers(reducers));
