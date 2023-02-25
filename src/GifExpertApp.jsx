import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {

const [categories, setCategories] = useState(['Pokemon']);

const onAddCAtegory = (newCategory) => {
    //console.log(newCategory)
    if ( categories.includes(newCategory)) {return;}


    setCategories([ newCategory ,... categories]);
    //setCategories( cat => [ ...cat , 'Valorant']);


}


  return (
    <>
    <h1>GifExpertApp</h1>

    <AddCategory 
     //setCategories={setCategories}
     onNewCategory = { (event)=>{onAddCAtegory(event)}}
    />
        {
            categories.map( category =>(
                <GifGrid key={ category } category={category}/>            
            ))
        }
    </>
  )
}
