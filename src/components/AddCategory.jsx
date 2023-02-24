import { useState } from "react"


export const AddCategory = ({setCategories}) => {
    //console.log(setCategories)
    const [inputValue, setInputValue] = useState('');
    const onInputChange = ({target}) => {
       console.log(target.value)
        setInputValue(target.value);
        setInputValue('');
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        console.log(inputValue)
        if (inputValue.trim()<=1) {return;}
        
        setCategories( categories => [inputValue, ...categories])


        
    }

  return (
    <form onSubmit={ (event) => onSubmit(event) }>
        <input type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onInputChange}
        />
    </form>
 
  )
}
