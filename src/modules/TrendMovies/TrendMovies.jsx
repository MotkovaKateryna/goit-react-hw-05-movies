import { useState, useEffect} from "react";
import MoviesList from "shared/MoviesList/MoviesList";

import { getAllMovies } from "shared/api"; 

// import styles from "./trend-movies.module.scss";

const TrendMovies = () => {
    const [items,setItems] = useState([]);
    const [error,setError] = useState(null);


    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const data = await getAllMovies();
                setItems(data.results);
            }
            catch(error){
                setError(error.message);
            }
            
        }
        fetchMovies();    
   
},[])

return <MoviesList items={items}/>



}

export default TrendMovies;








    

