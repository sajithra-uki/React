import { useState,useEffect } from "react";
export default function Hoock()
{
      let clicked1 =0;
    let [count, setCount]=useState(0);

    let handelClick=()=>{
        console.log(count);
        setCount(count+1);
    }
    let fun1=()=>{
        if(count>=2)
        {
            alert('count more than 4')
        }

    }
    useEffect(fun1,[count]);
    return(
        <>
         <button onClick={handelClick}><img src="day8/public/twitter-svgrepo-com.svg" alt="" /></button>
         <h1 style={{padding:count}}>The Button was clicked {count}</h1>
        </>
    );
}