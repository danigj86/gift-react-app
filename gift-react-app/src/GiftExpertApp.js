import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GiftGrid } from './components/GiftGrid'

//const categories = ['Goku', 'One Punch Man', 'Hunter X'];



export const GiftExpertApp = () => {

    const [categories, setCategories] = useState([])


    /*    const addCategorie = ()=>{
           
           //setCategories([...categories,'Nueva categoria'] )
           setCategories((categorias => [...categorias,'Nueva categoria'])) 
       } */

    return (
        <>
            <h2>Gif App</h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            <ul>
                {
                    categories.map((category) => {
                     return (
                        <GiftGrid
                        key={category}
                        category={category} />
                     )  
                    })
                }
            </ul>
        </>
    )
}
