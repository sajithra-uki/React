import { useState } from "react";

export default function New(){
    let clicked =0;

    let [count,setCount]=useState(0);

    let handelClick=()=>{
        console.log(count);
        setCount(count+10);

    }
    return(
        <>
        <button onClick={handelClick}>click</button>
        
        <h1 style={{padding:count}}>The Button was clicked {count}</h1>
        </>
    )
}