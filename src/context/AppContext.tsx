import React, {createContext, useEffect, useState} from "react";

// Create a context for the app
export const AppContext = createContext({})

// Create a provider for components to consume and subscribe to changes
export const AppProvider = ({children } : any) => {

    const [pokemon, setPokemon] = useState({});
 
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        .then(response => response.json())
        .then(data => setPokemon(data))
    }, []);
 
  return (
    <AppContext.Provider   value={{pokemon}}>
      {children}
    </AppContext.Provider>
  )
}

// Create a hook to use the AppContext
export const useAppContext = () => {
   const context = React.useContext(AppContext)

    if (!context) {
        throw new Error('error');
    }
    return context;

}