import React, { memo, useRef } from 'react';
 import styled from "./Search.module.css"


interface SearchProps {
    onChange: any;
}

const Search = ( {onChange}: SearchProps ) => {
 //console.log(" Search render");
 //const searchRef = useRef<HTMLInputElement>(null);
//console.log(searchRef);

    return ( 
        
         <>
            <input className={styled.search} />
            
            <input style={{width: "100%", borderBottom: "1px solid #ccc", padding: "10px", fontSize: "16px"}}
                type="text"
                id="query"
                name="query"
                onChange={onChange}
                placeholder="Search recipe here ..."
                 
             
        />
         </>
    );
}

export default memo(Search);