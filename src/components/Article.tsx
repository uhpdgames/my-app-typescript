import React from "react";

const Article = ({ title = "", subtitle = "", paragraphs = [] }:any ) => {
    return (
       <>
           <h1>{title}</h1>
           <h4>{subtitle}</h4>
           {paragraphs.map((paragraph:any) => (
               <p key={paragraph.text}>{paragraph.text}</p>
           ))}
       </>
    );
};

export default Article;