import React, { useState } from 'react'
import { IDisplay } from './Display.types'
import "./Style.css"
export const Card = ({id,name,adress}:IDisplay) => {
    // const [CardOnpage,SetCardOnpage]=useState(12);
  return (
    
    <div className="inside-div">
        <div>{id}</div>
        <div>{name}</div>
        <div>{adress}</div>
    </div>
  )
}
