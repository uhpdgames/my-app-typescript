## bug

file: src/pages/HomePage.tsx
```tsx
    
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
```

# Validate : 
yup, @hookform/resolvers
# UX
Mui
Ts es6
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.



showcase
![msedge_4pWxoY41R3](https://github.com/user-attachments/assets/1cc8120d-e331-418c-8f0e-f08f2021124a)
