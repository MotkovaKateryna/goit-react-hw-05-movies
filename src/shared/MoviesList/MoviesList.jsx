

import {memo} from "react";

import {Link,useLocation} from "react-router-dom";

import styles from "./movies-list.module.scss"


const MoviesList =({items}) => {
   const location = useLocation();
    const elements = items.map(({id, title})=> 

 
    <Link className={styles.link} key ={id} to={`/movies/${id}`} state={{from : location}}><li className={styles.item}>
                                                                                                              <p>{title}</p>
                                                </li></Link> );

 return(
    <ul className={styles.list}>
       {elements}
 
    </ul>
 )
}

export default memo(MoviesList);

MoviesList.defaultProps = {
    items:[],
}