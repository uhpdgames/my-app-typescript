import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { STATUS } from "../../utils/status";
import {
  fetchRecipes,
  fetchSearchRecipe,
  fetchSingleRecipe,
} from "../utils/recipeUtils";

const recipesAdapter = createEntityAdapter({});

const initialState = recipesAdapter.getInitialState({
  error: null,
  status: STATUS.IDLE,
  nextPage: null,
  searchResult: null,
  searchQuery: "",
  singleRecipe: null,
});

const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },

    clearSearch(state) {
      state.searchResult = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchRecipes.pending, (state:any) => {
        state.status = STATUS.LOADING;
      })
      .addCase(fetchRecipes.fulfilled, (state:any, action) => {
        state.status = STATUS.SUCCEEDED;
        state.nextPage = action.payload.nextPage;
        recipesAdapter.upsertMany(state, action.payload.data);
      })
      .addCase(fetchRecipes.rejected, (state:any, action) => {
        state.status = STATUS.FAILED;
        state.error = action.error.message;
      })

      // handling fetching of single recipe
      .addCase(fetchSingleRecipe.pending, (state:any) => {
        state.status = STATUS.LOADING;
      })
      .addCase(fetchSingleRecipe.fulfilled, (state:any, action) => {
        state.singleRecipe = action.payload;
        state.status = STATUS.SUCCEEDED;
      })
      .addCase(fetchSingleRecipe.rejected, (state:any, action) => {
        state.status = STATUS.FAILED;
        state.error = action.error.message;
      })


      .addCase(fetchSearchRecipe.pending, (state:any) => {
        state.status = STATUS.LOADING;
      })
      .addCase(fetchSearchRecipe.fulfilled, (state:any, action) => {
        state.searchResult = action.payload.data;
        state.nextPage = action.payload.nextPage;
        state.status = STATUS.SUCCEEDED;
      })
      .addCase(fetchSearchRecipe.rejected, (state:any, action) => {
        state.status = STATUS.FAILED;
        state.error = action.error.message;
      });
  },
});

export const { selectAll: selectAllRecipes } = recipesAdapter.getSelectors(
  (state:any) => state.recipes
);

export const getRecipesStatus = (state:any) => state.recipes.status;
export const getRecipesError = (state:any) => state.recipes.error;
export const getSearchQuery = (state:any) => state.recipes.searchQuery;
export const selectSearchResult = (state:any) => state.recipes.searchResult;
export const getRecipesNextPage = (state:any) => state.recipes.nextPage;
export const selectSingleRecipe = (state:any) => state.recipes.singleRecipe;

export const { setSearchQuery, clearSearch } = recipesSlice.actions;
export default recipesSlice.reducer;
