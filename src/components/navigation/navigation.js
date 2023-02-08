import React from 'react'

export const Naviguer = ({mode,dark,light}) => {

  return (
    <header style = {mode ? light: dark}>
      <h3>The<span>Cocktail</span>DB</h3>

      <nav>
        <a style = {mode ? light: dark} href="">Home</a>
        <a style = {mode ? light: dark} href="">About</a>
      </nav>
    </header>
  )
}
