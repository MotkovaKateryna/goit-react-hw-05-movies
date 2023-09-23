import { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "react-router-dom";


import Loader from "shared/Loader/Loader";
import MoviesList from "shared/MoviesList/MoviesList";

import styles from "./movies-search.module.scss"

import MoviesSearchForm from "./MoviesSearchForm/MoviesSearchForm";

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
     

    return(
        <>
       <MoviesSearchForm onSubmit = {onSearchMovies}/>
       <MoviesList items={items} />
       {(!items.length && search) && <p>Movies not found</p> }
       {error && <p className={styles.errorMessage} >{error}</p> }
       {loading && <Loader /> }
        </>
       
    )
}

export default MoviesSearch; 