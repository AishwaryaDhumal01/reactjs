import react, { use } from "react"
import { useState } from "react";

export default function Count(){
    const [count, setCount] = useState(0);
    const [show,setShow] = useState(true);
    const [color,setColor]=useState("red");
    function counter(){
        if (count<=20)(
        setCount(count+1)
        )
    }
    // function myColor(){
        
    //     setCount(<h1 style={{ color: 'red'}}>{color}</h1>)
    // }
    function isEvenOdd(){
        return (count%2==0)

    }
    return (
        <>
        {show?<h1>evenodd</h1>:null}
        <h1>{count}<span>{isEvenOdd()?"even":"odd"}</span></h1>
        <button type="button" onClick={counter}>click me</button>
        <button type="button" style={{ backgroundColor: color }} onClick={() => setColor("green")}>red</button>
        <button type="button" style={{ backgroundColor: color }}onClick={() => setColor("black")} >black</button>
        <button type="button" style={{ backgroundColor: color }}onClick={() => setColor("yellow")} >yellow</button>
        <button onClick={ ()=> setShow(!show)}>{show?"show":"hide"}</button>


        </>
    )

    
}