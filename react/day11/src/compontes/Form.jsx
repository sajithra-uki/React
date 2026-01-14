import {useState} from "react";

export default function Form(){
    const [formData,setFormData] =useState ({
        username:"",
        email :"",
        password:"",})

        const [submittedList,setSubmittedList]=useState([])


        

        const handleChange =(e) =>{
            const { name } = e.target;
            const { value } = e.target;

            setFormData ((prevData) => ({
                ...prevData, [name]: value,
            }));
        };

        const handleSubmite = (e) => {
            e. preventDefault();

            setSubmittedList((prevList) => [...prevList, formData]);

        };

    return(
        <>
        <form >
            <h1>Mulitiplication</h1>
            <input type="text" placeholder="Enter Username" value={formData.username} name="username" onChange={handleChange}/><br></br>
            <input type="text" placeholder="Enter Email" value={formData.email} name="email" onChange={handleChange}/><br></br>
            <input type="password" placeholder="Enter Password" value={formData.password} name="password" onChange={handleChange}/><br></br>
            <input type="Submit"  onClick={handleSubmite}/>

        
            
        </form>
         {submittedList.length > 0 &&(
            <div>
                <h3>All Submitted Data:</h3>
                {submittedList.map ((item) => (
                    <>
                    <span>Username:  {item.username}</span><br></br>
                    <span>email: {item.email}</span><br></br>
                    <span>password: {item.password}</span><br></br>
                    </>
                ))}
            </div>
         )}
        </>
    );
}