import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory'

//const categories = ['Goku', 'One Punch Man', 'Hunter X'];

 

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['Goku', 'One Punch Man', 'Hunter X'])


 /*    const addCategorie = ()=>{
        
        //setCategories([...categories,'Nueva categoria'] )
        setCategories((categorias => [...categorias,'Nueva categoria'])) 
    } */

    return (
        <>
            <h2>Gift Appp</h2>
            <AddCategory setCategories ={ setCategories }/>
            <hr />
            <ul>
                {
                categories.map((e, key)=>{
                 return <li key={e}>{e}</li>
                })
                }
            </ul>
        </>
    )
}
