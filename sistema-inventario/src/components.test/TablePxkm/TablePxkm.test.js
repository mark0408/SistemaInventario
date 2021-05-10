import React from 'react'
import {TablePxkmItem} from './TablePxkmItem/TablePxkmItem'
import {screen,render} from '@testing-library/react'
import '@testing-library/jest-dom';


describe('TablePxkmItem', ()=>{

    let component
    const item = {descripcion:'Coberturas principales', dato1:'máximo a cubrir', dato2:'maximo a cubrir', img:false, otherElement1:false, cardData1:{title:'Pago por Km Plata',montoSol:'266.80',montoDolar:'72.50'}, otherElement2:false, cardData2:{title:'Pago por Km Oro',montoSol:'299.92',montoDolar:'81.50'}};
    beforeEach(()=>{
        component =render(<TablePxkmItem item={item} />);
    });

    test('render table form 1', ()=>{
        
        
        component.getByText('Coberturas principales');
        component.getByText('máximo a cubrir');
        component.getByText('maximo a cubrir');
    });
    test('render table form 2', ()=>{
        
        
        expect(component.container).toHaveTextContent(item.descripcion);
        expect(component.container).toHaveTextContent(item.dato1);
        expect(component.container).toHaveTextContent(item.dato2);
    });
});
