import { useState } from "react";

export default function Task(){
    const[name,setName]=useState('');
    const[password,setPassword]=useState('');
    const[gender,setGender]=useState('');
    const[submitted,setSubmitted]=useState('');

    const handleChange=(event)=>
    {
        event.preventDefault();
        const det={
            name:name,
            password:password,
            gender:gender
        }
        console.log('name'+det.name);
        setSubmitted(det);
        
    }

    return(
        <>
            <form>
                <label>name</label>
                <input type="text" value={name} onChange={(event)=>setName(event.target.value)}/><br></br>

                <label>password</label>
                <input type="password"value={password} onChange={(event)=>setPassword(event.target.value)}/><br></br>

                <label>gender</label>
                <input type="radio" value='male' name='gender' onChange={(event)=>setGender(event.target.value)}/> Male
                <input type="radio" value='female'name='gender' onChange={(event)=>setGender(event.target.value)}/>
                Female<br></br>

                <input type="submit" onClick={event=>handleChange(event)} />

            </form>
            {submitted &&(
                <>
                    <h1>Name : {submitted.name}</h1>
                    <h1>Password : {submitted.password}</h1>
                    <h1>Gender : {submitted.gender}</h1>
                </>
             )

            }
        </>
        

        
    );
}