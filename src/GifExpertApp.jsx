import { useState } from 'react';
import { AddCategory } from './components/AddCategory';


export const GifExpertApp = () => {

const [categories, setCategories] = useState(['Pokemon','Dragon Ball']);

const onAddCAtegory = () => {
    setCategories([ 'Valorant' ,... categories]);
    //setCategories( cat => [ ...cat , 'Valorant']);
}


  return (
    <>
    <h1>GifExpertApp</h1>

    <AddCategory setCategories={setCategories}/>
 
    {/* <button onClick={onAddCAtegory}>Agregar</button> */}
    <ol>
        {
        categories.map( category =>{
            return <li key={category}> {category}</li>
        })
        }
     
    </ol>
    </>
  )
}
