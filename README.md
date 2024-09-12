## Issue
1. dispatch Lần khởi tạo đầu tiên không hoạt động
    
2. api fetch data : dùng axios hoặc fetch


## api fetch data
```tsx
const todo = async (from:number, to:number)=>{

    await fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res)=>{
        return res.json();
    }).then((data)=>{
        return data.slice(0, 10);
    })

}
    


const todo = (from:number, to:number)=>{

    const url ='https://jsonplaceholder.typicode.com/todos';

    axios.get(url).then((res: any)=>{
        return res.data.slice(from, to);
    })

}
```

## bug

<img width="903" alt="F" src="https://github.com/user-attachments/assets/cdea4c43-52c1-46a9-95ca-07a1d71d2158">
```tsx
 const onFirstRender = () => {
        dispatch(loadData);
    }

```
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
