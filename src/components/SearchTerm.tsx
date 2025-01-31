import React from 'react';
import {setSearch as setSearchTerm, clearSearch as clearSearchTerm} from "../redux/storeRecipe"

const searchIconUrl = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/search.svg'
const clearIconUrl = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/clear.svg'



const SearchTerm = (props:any) => {

    const { searchTerm, dispatch } = props;

    const onSearchTermChangeHandler = (e:any) => {
        const userInput = e.target.value;
        dispatch(setSearchTerm(userInput));
    };

    const onClearSearchTermHandler = () => {
        dispatch(clearSearchTerm);
    };

    return (
        <div id="search-container">
            <img id="search-icon" alt="" src={searchIconUrl} />
            <input
                id="search"
                type="text"
                value={searchTerm}
                onChange={onSearchTermChangeHandler}
                placeholder="Search recipes"
            />
            {searchTerm.length > 0 && (
                <button
                    onClick={onClearSearchTermHandler}
                    type="button"
                    id="search-clear-button"
                >
                    <img src={clearIconUrl} alt="" />
                </button>
            )}
        </div>
    );
};


export default SearchTerm;