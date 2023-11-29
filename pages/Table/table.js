import react from 'react';
import { useState } from 'react';

export default function Table(props){
    const{num}= props
    let arr=[];
    for (let index = 1; index < 10; index++){
        const element = index*num;
        arr.push (
            <div>
            {element}
            </div>
        )
    }

    return(
        <>
        <button type='button'></button>
    {arr}

        </>
    )
}