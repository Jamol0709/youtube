import { MovieContext } from '../context/index';
import React,{useContext, useState } from 'react';
import { Wrap } from './navStyle';

export const  Navbar =()=> {
    const [movies, setMovies] = useContext(MovieContext);
    // const [data, useData] = useState(movies)
    
    const onSort =(genre)=> {
        let res = movies.filter((value)=> value.genre ==='film');
      setMovies(res);};
      const Sort =(genre)=> {
        let res = movies.filter((value)=> value.genre ==='movie');
      setMovies(res);};
      const SSort =(genre)=> {
        let res = movies.filter((value)=> value.genre ==='cartoon');
      setMovies(res);};
      const Search =(e)=> {
        let res = movies.filter((value)=>
             value.title.includes(e.target.value)
             ); console.log(movies);
      setMovies(res)
    };
      
      
      
    return <Wrap.Per> 
             <Wrap>
        
        <Wrap.LeftIcons>
            <Wrap.leftone >

            </Wrap.leftone >
            <Wrap.Red>
                <Wrap.Play/>
            </Wrap.Red>
            <div>
                <h2>
                    YouTube {movies.length}
                </h2>
            </div>
        <Wrap.Input onClick={()=>Search(movies.title)} >
        </Wrap.Input>
        <Wrap.Search ></Wrap.Search>
        
        <Wrap.Camera/>
        <Wrap.Kub/>
        <Wrap.Qong/>
        <Wrap.Rasm/>
         </Wrap.LeftIcons>
</Wrap>
   <Wrap.Sub>
     <Wrap.Buttom1>
             Anasayfa {movies.length}
    </Wrap.Buttom1>
            
     <Wrap.Buttom2>
<Wrap.Btn>kino</Wrap.Btn>
<Wrap.Btn  onClick={()=>SSort(movies.genre)}>Cartoons </Wrap.Btn>
<Wrap.Btn onClick={()=>Sort(movies.genre)}>movie</Wrap.Btn>
<Wrap.Btn onClick={()=>onSort(movies.genre)}>film</Wrap.Btn>
<Wrap.Btn>Comedy</Wrap.Btn>
<Wrap.Btn>music</Wrap.Btn>
<Wrap.Btn>TV Show</Wrap.Btn>
<Wrap.Btn>football</Wrap.Btn>
<Wrap.Btn>dramma</Wrap.Btn>
<Wrap.Btn>detective</Wrap.Btn>
<Wrap.Btn>adventure</Wrap.Btn>
<Wrap.Btn>love story</Wrap.Btn>
    </Wrap.Buttom2>
  </Wrap.Sub>
    
</Wrap.Per>
    }