import React from 'react'

export const Vignettes = ({image,intitule,type,alcool}) => {
    let mon_style ={
        backgroundImage: image,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "35vh",
    }

  return (
    <div className="vignette">
        <div id="image" style={mon_style}></div>

        <h1>{intitule}</h1>
        <p>{type}</p>
        <p>{alcool}</p>

        <button>DETAILS</button>
    </div>
  )
}
