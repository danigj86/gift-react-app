import React from 'react'

export const GifGridItem = ({img}) => {

    console.log(img.id, img.title)
    return (
        <div className="gifCard">
            <img src={img.url} alt="" />
            <details>
                <summary>Info
                </summary>
                <h4>{img.title}</h4>
            </details>
            
        </div>
    )
}
