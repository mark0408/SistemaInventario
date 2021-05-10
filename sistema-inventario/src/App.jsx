import React, {useState} from 'react';
import {TablePxkm} from './components/TablePxkm/TablePxkm'


export function App() {
    const [items, setItems] = useState([
        {descripcion:'', dato1:'test', dato2:'tete', img:true, otherElement1:true, cardData1:{title:'Pago por Km Plata',montoSol:'266.80',montoDolar:'72.50'}, otherElement2:true, cardData2:{title:'Pago por Km Oro',montoSol:'299.92',montoDolar:'81.50'}},
        {descripcion:'apellido', dato1:'pruebs', dato2:'tata', img:false, otherElement1:false,otherElement2:false}
    ]);
    return <TablePxkm items={items} />
}