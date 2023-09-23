
import {useState,useEffect} from "react";
import { Outlet, Link, useParams, useNavigate, useLocation } from 'react-router-dom';

import {getMovieById} from "../../shared/api";

import styles from "./movie-details.module.scss"

const MovieDetails = () => {
    const [movie, setMovie] = useState();
    const {id} = useParams();

    const navigate = useNavigate();
    const location = useLocation();
     const from = location.state?.from || '/';
    



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

    if(movie) {
        const {
        genres,
        title,
        overview,
        poster_path,
        release_date,
        vote_average,
      } = movie;
      const year = release_date.slice(0,4);

      const genre = genres.map((genre) => genre.name).join(', ');

      const noPosterImg = 'https://www.preupdv.cl/invitacionpdv/img/pelicula.png';

      function generatePosterImg(poster_path) {
        if (poster_path === null) {
          return noPosterImg;
        }
        return `https://image.tmdb.org/t/p/w500${poster_path}`;
      }

      return (<div className={styles.container}>
        <button onClick={() => navigate(from)} className={styles.button}> Go back</button>
        <div className={styles.flex}>
          <div><img src={generatePosterImg(poster_path)} width='250' height='350' alt={title} className={styles.image}/></div>
          <div>
            <h2>{title} ({year})</h2>
            <p>Use Score: {vote_average.toFixed(1)}</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h3>Genres</h3>
            <p>{genre}</p>
          </div>
        </div>

            <h3 className={styles.add}>Additional information</h3>
            <ul className={styles.info}>
            <Link to='cast' state={{from}} className={styles.link}><li className={styles.list}>Cast</li></Link >
            <Link to='reviews' state={{from}} className={styles.link}><li className={styles.list}>Reviews</li></Link >
            </ul>
            <Outlet/>
            
        </div>
    )
    }
    }

export default MovieDetails;
