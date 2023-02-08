import React from 'react';
import image from '../img/mojito.jpeg';
import { Vignettes } from '../vignettes';

export const Object = () => {
    let cocktails = ["A1","ABC","Ace","A1","Adam","AT&T","ACID","A1","A.J.","Karsk","Melya","Affair","Boxcar","Orgasm","A1","Apello","Avalon","Casino","Radler","Mimosa","Paloma","Abilene","Almeria","Mai Tai","Martini","Sazerac","Sidecar","Veteran"];
    let type = ["Cocktail glass","Shot glass", "Martini glass","Cocktail glass","Highball glass","Shot glass","Cocktail glass", "Highball glass","Coffee mug","Highball glass","Whiskey sour glass","Cocktail glass","Collins glass","Highball glass","Whiskey sour glass","Cocktail glass","Collins glass","Highball glass","Cocktail glass", "Highball glass","Champagne flute","Collins glass","Highball glass","Collins glass","Cocktail glass","Old-fashioned glass","Cocktail glass","Old-fashioned glass"]
    let alcool = ["Alcoholic","Alcoholic","Alcoholic","Alcoholic","Alcoholic","Alcoholic","Alcoholic","Alcoholic","Non alcoholic","Alcoholic","Alcoholic","Alcoholic","Non alcoholic","Alcoholic","Alcoholic","Alcoholic","Alcoholic","Alcoholic","Alcoholic","Alcoholic","Alcoholic","Alcoholic","Alcoholic","Alcoholic","Alcoholic","Alcoholic","Alcoholic","Alcoholic"];

    let tab = "";

    {tab = cocktails.map((cocktail)=> (
        cocktail = JSON.parse(JSON.stringify({
            nom: cocktail,
            type: type[cocktails.indexOf(cocktail)],
            alcool: alcool[cocktails.indexOf(cocktail)],
            src: `url(${image})`,
        }))
    ))}

    return(
        <div id="vignettes">
            <h2>Cocktails</h2>

            <div>
                {tab.map((la_vignette)=>(
                    <Vignettes image={la_vignette.src} intitule={la_vignette.nom} type={la_vignette.type} alcool={la_vignette.alcool}/>  
                ))}
            </div>
        </div>
    )
}
