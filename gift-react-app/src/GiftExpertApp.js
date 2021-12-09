import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GiftGrid } from './components/GiftGrid'

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['goku'])


    /*    const addCategorie = ()=>{
          //setCategories([...categories,'Nueva categoria'] )
           setCategories((categorias => [...categorias,'Nueva categoria'])) 
       } */

    return (
        <>
            <h2 className='animate__animated animate__fadeInDown titulo'>React Gif App</h2>
           
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
