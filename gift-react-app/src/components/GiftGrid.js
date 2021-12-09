import React, { useState, useEffect } from 'react'
/* import { GifGridItem } from './GifGridItem' */

export const GiftGrid = ({ category }) => {

    const [images, setImages] = useState([])

    useEffect(() => {
        getGifs()
    }, [])

    const getGifs = async () => {
        //const apiKey = 'Zd4DcGItNa2Psr4J4Rz9k9vnurOWbHJu';
        const url = `https://api.giphy.com/v1/gifs/search?limit=6&q=${encodeURI(category)}&api_key=Zd4DcGItNa2Psr4J4Rz9k9vnurOWbHJu`;
        const resp = await fetch(url);
        const { data } = await resp.json();
        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })
        console.log(gifs);
        setImages(gifs)
    }


    return (
        < >
            <h3 className='animate__animated animate__fadeIn busqueda'>Búsqueda: {category}</h3>
            <hr />
            <div className=" gif-grid">
                {
                    images.map(img => {
                        return < div key={img.id} className=" animate__animated animate__fadeIn gifCard" >
                            <img src={img.url} alt="" />
                            <details>
                                <summary>Info</summary>
                                <h5>Nombre: {img.title}</h5>
                                <p> <b>Url:</b> {img.url}</p>
                            </details>
                           
                        </div>
                        //CREANDO UN COMPONENTE ESPECIFICO PARA CADA GIF
                        /* return {/* <GifGridItem
                            key={img.id}
                            img={img} /> 
                        
                        } */
                    })
                }
            </div>  <br />


        </>
    )
}
