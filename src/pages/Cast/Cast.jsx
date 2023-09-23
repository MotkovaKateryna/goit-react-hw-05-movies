import {useState,useEffect} from "react";
import { useParams } from "react-router-dom";

import { getCastMovieById } from "shared/api";


import styles from "./cast.module.scss"

const Cast = () => {
const[cast,setCast]= useState([]);
const {id} = useParams();

useEffect (()=>{
    const fetchCast = async() => {
        try{
            const data = await getCastMovieById(id);
            setCast(data.cast);
        }
        catch ({response}){
            console.log(response.data.message);
        }
    }
    fetchCast();
},[id])


const noPosterImg = 'https://www.preupdv.cl/invitacionpdv/img/pelicula.png';

function generatePosterImg(profile_path) {
  if (profile_path === null) {
    return noPosterImg;
  }
  return `https://image.tmdb.org/t/p/w500${profile_path}`;
}


const elements = cast.map(({id, profile_path, name, character})=> <li key={id} className={styles.list}>
   <img src={generatePosterImg(profile_path)} alt={name} width='150' height='200' className={styles.img}/>
    <h3>{name}</h3>
    <p>Character: {character}</p>
</li>);

return (
    <ul className={styles.group}>
       {elements}
    </ul>
)
}
export default Cast;

