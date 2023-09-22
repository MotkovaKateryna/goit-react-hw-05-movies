// кастомний хук
// треба подумати які аргументи треба передати у форму, щоб вона зробила те що треба.  чим відрізняються форми/логіки ?  
// різні initial State і різні функції onSubmit
//
//

import { useState } from "react";


const useForm = ({initialState,onSubmit}) => {// пишемо аргументи від яких залежить форма, отримуємо initialState

    const [state, setState] = useState({...initialState}) // створюю state 

  const handleChange = ({target}) => { // створюю функцію для роботи
    const {name,value} = target;
    setState(prevState => 
      {
        return {...prevState, [name]:value}
      })
      
  }
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({...state});
    setState({...initialState});
  }

  return {state, setState, handleChange,handleSubmit} // все це  треба повернути 
}

export default useForm;