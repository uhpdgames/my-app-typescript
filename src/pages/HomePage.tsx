import { createSlice, configureStore } from '@reduxjs/toolkit'

import React, {useEffect} from 'react';

import FavoriteRecipes from "../components/FavoriteRecipes"
import AllRecipes from "../components/AllRecipes"
import SearchTerm from "../components/SearchTerm"

import {getFilteredRecipes} from "../utils/filter";
import {LOAD_RECIPES, loadData} from "../redux/storeRecipe";
import allRecipesData from "../data/recipe";


//type Props = {};
const HomePage = (props: any) => {
    const {state, dispatch} = props;

    const onFirstRender = () => {
        dispatch({
            type: LOAD_RECIPES,
            payload: allRecipesData,
        });
    }

    useEffect(onFirstRender, [])


    //fixed bug
    state.allRecipes = state.allRecipes.length > 0 ? state.allRecipes : allRecipesData;

    const visibleAllRecipes = getFilteredRecipes(state.allRecipes, state.searchTerm);
    const visibleFavoriteRecipes = getFilteredRecipes(state.favoriteRecipes, state.searchTerm);

    return (
        <>
            <main>
                <section>
                    <SearchTerm
                        searchTerm={state.searchTerm}
                        dispatch={dispatch}
                    />
                </section>
                <section>
                    <h2>Favorite Recipes</h2>
                    <FavoriteRecipes
                        favoriteRecipes={visibleFavoriteRecipes}
                        dispatch={dispatch}
                    />
                </section>
                <hr/>
                <section>
                    <h2>All Recipes</h2>
                    <AllRecipes
                        allRecipes={visibleAllRecipes}
                        dispatch={dispatch}
                    />
                </section>
            </main>


        </>

    );
};


//test//redux
const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        incremented: state => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1
        },
        decremented: state => {
            state.value -= 1
        }
    }
})

export const { incremented, decremented } = counterSlice.actions

const store = configureStore({
    reducer: counterSlice.reducer
})

// Can still subscribe to the store
store.subscribe(() => console.log(store.getState()))

// Still pass action objects to `dispatch`, but they're created for us
store.dispatch(incremented())
// {value: 1}
store.dispatch(incremented())
// {value: 2}
store.dispatch(decremented())
// {value: 1}

export default HomePage;