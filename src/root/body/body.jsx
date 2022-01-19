import React ,{ useContext} from 'react';
import {Contener} from '../body/bodyStyle';

import { MovieContext } from '../context/index';


export const  Body =()=> {
  const [movies, setMovies] = useContext(MovieContext);
  
  const onDelete =(id)=> {
      let res = movies.filter((value)=> value.id !==id);;
    setMovies(res);
  };
    return (
    <Contener>
          <Contener.H1>
                Movies {movies.length}
          </Contener.H1>
          <Contener>
       
       
            {movies.map((value) =>(
           <div>
            <Contener.Mve key={value.id}>
              {/* {value.src} */}
              </Contener.Mve >
             <Contener.M><>
               {value.id }{ value.title}
             </>
             <h4>
              {value.genre}
             </h4>
             <Contener.B onClick={ ()=>onDelete(value.id)}>delete</Contener.B>
            </Contener.M>
          </div>
            ))}
         </Contener>
    </Contener>
    
  );
}

export default Body;