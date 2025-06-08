import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({onNewCategory}) => {
    
    const [inputValue, setInputValue] = useState('')
    
    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        // console.log('SHNEUR ZALMEN BENDAYAN')
        event.preventDefault();
        const newCat = inputValue.trim();
        if (newCat.length <= 1) return;

        // setCategories((cat) => [inputValue, ...cat]);
        onNewCategory(newCat);
        setInputValue('');
    }

    return (
        // onSubmit => como solo recive el 'event' no hace falta los () ej: (event) => onSubmit(event)
        <form onSubmit={ onSubmit } aria-label='form'> 
            <input type="tect" placeholder="Bucar Gifs" 
                value={inputValue} onChange={ (event) => onInputChange(event)}/>
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}