import { createSlice, configureStore } from '@reduxjs/toolkit'

import React, {useEffect} from 'react';

import FavoriteRecipes from "../components/FavoriteRecipes"
import AllRecipes from "../components/AllRecipes"
import SearchTerm from "../components/SearchTerm"

import {getFilteredRecipes} from "../utils/filter";
import {LOAD_RECIPES, loadData} from "../redux/storeRecipe";
import allRecipesData from "../data/recipe";
import {Dispatch, Store} from "redux";
import {useDispatch, useSelector, useStore,} from "react-redux";


//type Props = {};
const HomePage = (props: any) => {
    const dispatch: Dispatch<any> = useDispatch()
    const store: Store<any> = useStore();

    console.log(store);

    //fixed bug
    //state.allRecipes = state.allRecipes.length > 0 ? state.allRecipes : allRecipesData;

    //const visibleAllRecipes = getFilteredRecipes(state.allRecipes, state.searchTerm);
   // const visibleFavoriteRecipes = getFilteredRecipes(state.favoriteRecipes, state.searchTerm);

    return (
        <>
            <main>
                <section>
                    <SearchTerm
                        state={store.getState()}
                        dispatch={dispatch}
                    />
                </section>
                <section>
                    <h2>Favorite Recipes</h2>
                    <FavoriteRecipes
                        state={store.getState()}
                        dispatch={dispatch}
                    />
                </section>
                <hr/>
                <section>
                    <h2>All Recipes</h2>
                    <AllRecipes
                        state={store.getState()}
                        dispatch={dispatch}
                    />
                </section>
            </main>


        </>

    );
};

export default HomePage;