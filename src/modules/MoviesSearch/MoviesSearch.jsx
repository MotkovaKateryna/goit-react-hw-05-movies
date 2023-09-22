import { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "react-router-dom";


import styles from "./movies-search.module.scss"

import MoviesSearchForm from "./MoviesSearchForm/MoviesSearchForm";
// import MovieDetails from "pages/MovieDetails/MovieDetails";
// import MoviesList from "shared/MoviesList/MoviesList";

import { searchMovies } from "shared/api";



const MoviesSearch = () => {
    const [items,setItems] = useState([]);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);

    const [searchParams, setSearchParams] =useSearchParams();
    const search = searchParams.get("search");
    const page = searchParams.get("page");
    
    useEffect(() => { 
        if ({search}){
            const fetchMovies = async () => {
                try {
                    setLoading(true);
                    const data = await searchMovies(search,page);
                    setItems(prevItems => [...prevItems,...data.results])
                    console.log(...data.results);
                }
                catch(error){
                    setError(error.message);
                }
                finally{
                    setLoading(false);
                }
            };
            fetchMovies(); 
        }        
       
    },[search,page])

    const onSearchMovies = useCallback(({search}) => {
        setSearchParams({search, page:1});
        setItems([]);
        
       },[setSearchParams])
 
    

const loadMore = useCallback(() => {
    setSearchParams({search,page: Number(page) + 1});
   },[search,page,setSearchParams])
     

    return(
        <>
       <MoviesSearchForm onSubmit = {onSearchMovies}/>
       {(!items.length && search) && <p>Movies not found</p> }
       {error && <p className={styles.errorMessage} >{error}</p> }
       {loading && <p>...Loading</p> }
       {Boolean(items.length) && <button onClick={loadMore}>Load more</button> }
        </>
       
    )


}

export default MoviesSearch; 