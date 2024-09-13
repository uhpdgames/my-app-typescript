import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { STATUS } from "../../utils/status";
import { fetchTypesRecipes } from "../utils/typeUtils";

const typesAdapter = createEntityAdapter({});

const initialState = typesAdapter.getInitialState({
  error: null,
  status: STATUS.IDLE,
  count: 0,
  nextPage: null,
});

const typesSlice = createSlice({
  name: "types",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchTypesRecipes.pending, (state:any) => {
        state.status = STATUS.LOADING;
      })
      .addCase(fetchTypesRecipes.fulfilled, (state:any, action) => {
        state.status = STATUS.SUCCEEDED;
        typesAdapter.removeAll(state);
        state.nextPage = action.payload.nextPage;
        typesAdapter.addMany(state, action.payload.data);
      })
      .addCase(fetchTypesRecipes.rejected, (state:any, action) => {
        state.status = STATUS.FAILED;
        state.error = action.error.message;
      });
  },
});

export const { selectAll: selectTypesAllRecipes } = typesAdapter.getSelectors(
  (state:any) => state.types
);

export const getTypesRecipesStatus = (state:any) => state.types.status;
export const getTypesRecipesError = (state:any) => state.types.error;
export const getTypesRecipeNextPage = (state:any) => state.types.nextPage;

export default typesSlice.reducer;
