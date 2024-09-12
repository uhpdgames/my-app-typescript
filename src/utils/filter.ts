export const getFilteredRecipes = (recipes:any, searchTerm:any) => {
    return recipes.filter((recipe:any) => recipe.name.includes(searchTerm));
}
