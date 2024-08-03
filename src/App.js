import {useEffect} from "react";

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=e0c8dbb9'

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
        <h1>App</h1>
    )
};


export default App;