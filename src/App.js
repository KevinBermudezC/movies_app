import {useEffect, useState} from "react";
import "./App.css";
import searchIcon from "./search.svg"
import MovieCard from "./MovieCard";


const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=e0c8dbb9'

const App =() =>{
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')

    const searchMovies = async(title)=>{
        const res= await fetch(`${API_URL}&s=${title}`);
        const data = await res.json();

        setMovies(data.Search)
    }

    useEffect(()=>{
        searchMovies('Movie')
    },[]);


    return(
        <div className="app">
            <a href="/"><h1>MovieLand</h1></a>

            <div className="search">
                <input 
                    type="text" 
                    placeholder="Search for movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img 
                    src={searchIcon} 
                    alt="search icon"
                    onClick={()=>searchMovies(searchTerm)}
                />
            </div>
            {
                movies?.length > 0
                    ?(
                        <div className="container">
                            {movies.map((movie)=>(
                                <MovieCard movie={movie}/>
                            ))}
                        </div>
                    ) : (
                        <div className="empty">
                            <h2>No movies found</h2>
                        </div>
                    )}
        </div>
    )
};


export default App;