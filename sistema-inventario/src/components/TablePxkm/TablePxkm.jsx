import React from 'react'
import {TablePxkmItem} from './TablePxkmItem/TablePxkmItem'
import style from './style.css'

export function TablePxkm({ items }) {
    return (
        <div className="TablePxkm" >
            {items.map((item)=> (
                <TablePxkmItem item={item} />
            ))}
        </div>
    )
}
