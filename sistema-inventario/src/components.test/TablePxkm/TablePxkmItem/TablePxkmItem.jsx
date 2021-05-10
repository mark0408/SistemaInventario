import React from 'react'
import style from './style.css'
import { CardPxkm } from "../../CardPxkm/CardPxkm";

export function TablePxkmItem({item}) {
    const {descripcion, dato1, dato2, img, otherElement} = item;
    return (
        <div className="FilaPxkm" >
            {img?<span> <img src={img} /> </span>:<span>{descripcion}</span>}
            {otherElement?<CardPxkm />:<span>{dato1}</span>}
            {otherElement?<CardPxkm />:<span>{dato2}</span>}
        </div>
    )
}
