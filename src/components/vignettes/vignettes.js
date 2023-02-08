import React from 'react'

export const Vignettes = ({image,intitule,type,alcool,mode,dark,light}) => {
    let mon_style ={
        backgroundImage: image,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "35vh",
    }

  return (
    <div className="vignette" style = {mode ? light: dark}>
        <div id="image" style={mon_style}></div>

        <h1>{intitule}</h1>
        <p>{type}</p>
        <p>{alcool}</p>

        <button>DETAILS</button>
    </div>
  )
}
