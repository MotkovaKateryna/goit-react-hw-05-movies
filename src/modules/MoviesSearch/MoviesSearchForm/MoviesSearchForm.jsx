
import { memo} from "react";
import PropTypes from "prop-types";

import styles from "./movies-search-form.module.scss"

import initialState from "./initialState";
import useForm from "../../../shared/hooks/useForm";

const MoviesSearchForm = ({onSubmit}) => {
const {state,handleChange,handleSubmit} = useForm({initialState, onSubmit}); 
    const {search} = state;
       return(
             <form onSubmit={handleSubmit} className={styles.form} action="">
                <div>
                     <label htmlFor="">Search movies  </label>
                    <input value={search} onChange ={handleChange} name="search" placeholder="Search movies" required /> 
                 </div>
             </form>
         )
}

export default memo(MoviesSearchForm);

MoviesSearchForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}