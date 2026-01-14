import { useState } from "react";

export default function Form(){
    const[userName, setUserName]=useState('');
    const[submitted,setSubmitted]=useState('');


    const handleChange=(event)=>
    {
        event.preventDefault();
        const data={
            name:userName,
        }
        console.log('name'+data.name);
        setSubmitted(data);
        

    }
  
    
    return(
        <>
        <form>
            <label>userName</label>
            <input type="text" value={userName} onChange={(event)=>console.log(event.target.value)}/><br></br>
            
            <label>userName</label>
            <input type="text" value={userName} onChange={(event)=>setUserName(event.target.value)}/><br></br>
            
        
            <label>userName</label>
            <input type="text" value={userName} onChange={(event)=>setUserName(event.target.value)}/><br></br>

            <input type="submit" onClick={event=>handleChange(event)}></input>
        
        </form>

        {submitted &&(
            <h1>{submitted.name}</h1>
        )

        }
    
        </>
    );
}