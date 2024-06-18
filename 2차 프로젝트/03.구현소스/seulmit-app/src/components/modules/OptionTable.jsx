import React from 'react';

//data
import { options, product } from "../data/product";
/////import area////////////////////////////

function OptionTable({catName}) {

    const selData = product.face[0];

    //코드리턴구역/////////////////////////////////////////////
    return (
        <>
            <tbody className='default-option'>
                <tr>
                    <td className='tit'>{selData.tit}</td>
                    <td className='quantity'>
                        <input 
                        id="quantity"
                        name='quantity_otp[]'
                        type='number'
                        />
                        </td>
                    <td className='price'>{selData.price}</td>
                </tr>
            </tbody>
        </>
    );
}

export default OptionTable;