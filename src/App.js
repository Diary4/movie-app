import React,{ useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import './App.css';
import searchIcon from './search.svg';

//a87e9f7f

const API_URL='http://omdbapi.com?apikey=a87e9f7f';



const App = ()=>{

    const [movies,setMovies] = useState([]);
    const [searchTerm,setSearchTerm]= useState('');
    
const searchMovies= async(title)=>{
    const response=await fetch(`${API_URL}&s=${title}`);
    const data=await response.json();
    setMovies(data.Search);
}

    useEffect(()=>{
        searchMovies('spiderman');
        },[]);


return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={searchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
);



}


export default App;