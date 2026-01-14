import { useState,useEffect } from "react";
import img1 from '/home/uki-dsa-03/Desktop/REACT/react/day8/src/assets/twitter-svgrepo-com.svg';
import img2 from '/home/uki-dsa-03/Desktop/REACT/react/day8/src/assets/love-svgrepo-com (1).svg';
import img3 from '/home/uki-dsa-03/Desktop/REACT/react/day8/src/assets/home.png';
import img4 from '/home/uki-dsa-03/Desktop/REACT/react/day8/src/assets/dollar-minimalistic-svgrepo-com.svg';
export default function Image()
{
      let clicked1 =0;
    let [count,setCount]=useState(0);

    let handelClick=()=>{
        console.log(count);
        setCount(count+1);
    }
    let fun1=()=>{
        if(count>=2)
        {
            alert('count more than 2')
        }

    }

      let clicked2 =0;
    let [count2, setCount2]=useState(0);
    
    
    let fun2=()=>{
        if(count2>=3)
        {
            alert('count more than 3')
        }

    }
    
    useEffect(fun2,[count2]);
   


      let clicked3 =0;
    let [count3, setCount3]=useState(0);
    
    let fun3=()=>{
        if(count3>=5)
        {
            alert('count more than 5')
        }

    }
    
    useEffect(fun1,[count]);
      let clicked4 =0;
    let [count4, setCount4]=useState(0);
    
    let fun4=()=>{
        if(count4>=0)
        {
            alert('count more than 0')
        }

    }
    useEffect(fun3,[count3]);
    useEffect(fun4,[count4]);
     
    return(
        <>
         <button onClick={handelClick}><img src={img1} alt="" /></button>
         <h1 style={{padding:count}}>The Button was clicked {count}</h1>

          <button onClick={handelClick}><img src={img2} alt="" /></button>
         <h1 style={{padding:count}}>The home was clicked {count}</h1>

          <button onClick={handelClick}><img src={img3} alt="" /></button>
         <h1 style={{padding:count}}>The home was clicked {count}</h1>
        
         <button onClick={handelClick}><img src={img4} alt="" /></button>
         <h1 style={{padding:count}}>The home was clicked {count}</h1>
        
        
        </>
    );
}    

    
   
   





    



