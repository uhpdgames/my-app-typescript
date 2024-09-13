import { createAsyncThunk } from "@reduxjs/toolkit";
import { APP_ID, APP_KEY } from "../../api/apiConstants";
import { extractRecipeData } from "../../utils/helpers";
import fetchData from "../../api/axios";

export const fetchTypesRecipes = createAsyncThunk(
  "recipes/type/fetchRecipes",
  async (obj) => {
    const { typeData, nextPageLink }:any = obj;
    let recipesData = null;

    if (!(Object.keys(typeData).length === 0)) {
      const { data } = await fetchData(
        `?type=public&app_id=${APP_ID}&app_key=${APP_KEY}&${typeData.typeOf}Type=${typeData.typeName}`
      );
      recipesData = extractRecipeData(data);
    } else {
      const { data } = await fetchData(`${nextPageLink}`);
      recipesData = extractRecipeData(data);
    }
    return recipesData;
  }
);
