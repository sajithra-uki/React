import { useState } from "react";

export default function State(){
    let clicked =20;
    let clicked2 =30;
    let [count,setCount]=useState(0);
    let handelClick=()=>{
        console.log(count);
        setCount (count+10)
    }

}