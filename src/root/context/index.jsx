import React ,{ useState,createContext } from "react";
import { movie } from "../mock";


export const MovieContext = createContext();

export const Context =(props)=>{
  
    const [data, setData]= useState(movie);
  return(
     <MovieContext.Provider value={[data, setData]}>
        
         {props.children}
         
     </MovieContext.Provider>
   );
};