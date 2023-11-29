import react from 'react';
import { useState } from "react";
import Table from './table';

export default function App(){
    const [table,settable]=useState(2)
    let num=2
    function counter(){
        settable(table + 1)
    }
    return(
        <>
        <Table num={num}> </Table>
        <button type="button"  onClick={counter}>{table}</button>
        </>
    
        
    )
}
 