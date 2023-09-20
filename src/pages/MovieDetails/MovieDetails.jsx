
import {useState,useEffect} from "react";
import { useParams } from "react-router-dom";

import {getMovieById} from "../../shared/api";


const MovieDetails = () => {
    const [movie, setMovie] = useState();
    const {id} = useParams();
    



    useEffect(()=>{
        const fetchMovie = async ()=> {
            try{
                const result = await getMovieById(id);
                setMovie(result);
            }
            catch({response}){
                console.log(response.data.message);
            }
        }
        fetchMovie()
    },[id]);
    
return (
    <>
    <h1>{movie?.name}</h1>
    <p>Movie details</p>
    </>
)

}


export default MovieDetails;
