import React from 'react'

export const Cherche = ({mode,dark,light}) => {
  return (
    <div id="search" style = {mode ? light: dark}>
      <div style = {mode ? light: dark}>
        <p>Search Your Favorite Cocktail</p>
        <input type="text" />
      </div>  
    </div>
  )
}
