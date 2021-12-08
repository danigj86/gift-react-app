import React, { useState } from 'react';
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('Buscar...');


    const handleInputChange = (e) => {
        console.log(e.target.value);
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim() === '') {
            alert('El campo no debe estar vacio')
            return false;
        } else {
            setCategories((categ) => [inputValue,...categ ]) //<-- HEREDA DE COMPONENTE PADRE PARA AÑADIR CATEGORIA 
            setInputValue('');
        }
    }

    return (

        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}