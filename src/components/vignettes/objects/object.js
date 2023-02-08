import React from 'react';
import { Vignettes } from '../vignettes';
import a from '../img/a.jpeg'
import b from '../img/b.jpeg'
import c from '../img/c.jpeg'
import d from '../img/d.jpeg'
import e from '../img/e.jpeg'
import f from '../img/f.jpeg'
import g from '../img/g.jpeg'
import h from '../img/h.jpeg'
import i from '../img/i.jpeg'
import j from '../img/j.jpeg'
import k from '../img/k.jpeg'
import l from '../img/l.jpeg'
import m from '../img/m.jpeg'
import n from '../img/n.jpeg'
import o from '../img/o.jpeg'
import p from '../img/p.jpeg'
import q from '../img/q.jpeg'
import r from '../img/r.jpeg'
import s from '../img/s.jpeg'
import t from '../img/t.jpeg'
import u from '../img/u.jpeg'
import v from '../img/v.jpeg'
import w from '../img/w.jpeg'
import x from '../img/x.jpeg'
import y from '../img/y.jpeg'



export const Object = ({mode,dark,light}) => {
    let cocktails = ["A1","ABC","Ace","A1","Adam","AT&T","ACID","A1","A.J.","Karsk","Melya","Affair","Boxcar","Orgasm","A1","Apello","Avalon","Casino","Radler","Mimosa","Paloma","Abilene","Almeria","Mai Tai","Martini","Sazerac","Sidecar","Veteran"];
    let type = ["Cocktail glass","Shot glass", "Martini glass","Cocktail glass","Highball glass","Shot glass","Cocktail glass", "Highball glass","Coffee mug","Highball glass","Whiskey sour glass","Cocktail glass","Collins glass","Highball glass","Whiskey sour glass","Cocktail glass","Collins glass","Highball glass","Cocktail glass", "Highball glass","Champagne flute","Collins glass","Highball glass","Collins glass","Cocktail glass","Old-fashioned glass","Cocktail glass","Old-fashioned glass"]
    let images = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,a,b,c];
    let alcool = ["Alcoholic","Alcoholic","Alcoholic","Alcoholic","Alcoholic","Alcoholic","Alcoholic","Alcoholic","Non alcoholic","Alcoholic","Alcoholic","Alcoholic","Non alcoholic","Alcoholic","Alcoholic","Alcoholic","Alcoholic","Alcoholic","Alcoholic","Alcoholic","Alcoholic","Alcoholic","Alcoholic","Alcoholic","Alcoholic","Alcoholic","Alcoholic","Alcoholic"];

    let tab = "";

    {tab = cocktails.map((cocktail)=> (
        cocktail = JSON.parse(JSON.stringify({
            nom: cocktail,
            type: type[cocktails.indexOf(cocktail)],
            alcool: alcool[cocktails.indexOf(cocktail)],
            src: `url(${images[cocktails.indexOf(cocktail)]})`,
        }))
    ))}

    return(
        <div id="vignettes" style = {mode ? light: dark}>
            <h2>Cocktails</h2>

            <div >
                {tab.map((la_vignette)=>(
                    <Vignettes mode = {mode} light={light} dark={dark} image={la_vignette.src} intitule={la_vignette.nom} type={la_vignette.type} alcool={la_vignette.alcool}/>  
                ))}
            </div>
        </div>
    )
}
