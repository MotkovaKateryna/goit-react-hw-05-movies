import {useState,useEffect} from "react";
import { useParams } from "react-router-dom";

import { getReviewMovieById } from "shared/api";


import styles from "./reviews.module.scss";

const Reviews = () => {
const[reviews,setReviews]= useState([]);
const {id} = useParams();

useEffect (()=>{
    const fetchReviews = async() => {
        try{
            const data = await getReviewMovieById(id);
            console.log(data);
            setReviews(data.results);
        }
        catch ({response}){
            console.log(response.data.message);
        }
    }
    fetchReviews();
},[id])


const elements = reviews.map(({id, author,content})=> <li key={id} className={styles.list}>
<h4>{author}</h4>
<p>{content}</p>
</li>);

return (
<>
<ul className={styles.group}>
   {elements}
</ul>
{!reviews.length && <p>Reviews not found</p> }
</>

)

}
export default Reviews;

