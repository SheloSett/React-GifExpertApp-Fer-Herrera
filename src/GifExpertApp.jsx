import { useState, } from 'react';
import { AddCategory, GifGrid } from './components';
// import { AddCategory } from './components/AddCategory';
// import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'Flash Cw' ]);

    const esta = (newCategory) => categories.find( (cat) => cat.toLowerCase() === newCategory.toLowerCase());
    
    const onAddCategorie = (newCategory) => {
        if( esta(newCategory) ) return;

        // console.log(newCategory);
        setCategories( [newCategory, ...categories]);
        // setCategories(cat => [...cat, 'Valorant']); otra forma de hacerlo
    };

    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* input */}
            <AddCategory 
                onNewCategory={ (event) => onAddCategorie(event)}
            />

            {/* listado de gif */}   
           
            {   // el key es obligatorio de poner, no cambia q pongamos
                categories.map( cat => (
                    <GifGrid 
                        key={cat} 
                        category={cat}
                    />                        
                ))
            }
       
                {/* gif item */}
        </>
    )
}
