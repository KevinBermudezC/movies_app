import {useEffect} from "react";
import "./App.css";
import searchIcon from "./search.svg"
const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=e0c8dbb9'

const movie1 = {
    "Title": "Superman",
    "Year": "1978",
    "imdbID": "tt0078346",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMzA0YWMwMTUtMTVhNC00NjRkLWE2ZTgtOWEzNjJhYzNiMTlkXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"
}

const App =() =>{
    const searchMovies = async(title)=>{
        const res= await fetch(`${API_URL}&s=${title}`);
        const data = await res.json();

        console.log(data)
    }

    useEffect(()=>{
        searchMovies('Superman')

    },[]);


    return(
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input 
                    type="text" 
                    placeholder="Search for movies"
                    value="Superman"
                    onChange={(e)=>searchMovies(e.target.value)}
                />
                <img 
                    src={searchIcon} 
                    alt="search icon"
                    onClick={()=>{}}
                />
            </div>

            <div className="container">
                <div className="movie">
                    <div>
                        <p>{movie1.Year}</p>
                    </div>
                    <div>
                        <img src={movie1.Poster} alt="movie poster"/>
                    </div>

                </div>
            </div>
        </div>
    )
};


export default App;