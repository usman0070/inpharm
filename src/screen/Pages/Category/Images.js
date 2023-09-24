import React from 'react'

const Images = ({ image }) => {
    return (
        <>
            {
                image.map((img) => {
                    
                   return  <img style={{width:'20px', height:"20px" , margin:'0px 2px'}} src={`http://localhost:5000/images/${img}`} alt="images" />
                })
            }
        </>
    )
}

export default Images