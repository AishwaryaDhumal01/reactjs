import react, { useState } from"react";


export default function User(){
    const [form,setformdata] = useState({})
    const handleInput = (keyname,value) =>{
        setformdata({
            ...FormData,
            [keyname]:value

        })

        

    }
    const handleSubmit = (e) =>{
        e.preventDefault();
    }


    return(
        <div>
        <form  onSubmit={(e) => {
            e.preventDefault();
            handleSubmitForm();
        }} >
         <div>
             <label htmlFor="username">Fullname</label>
             <input type="text"name="username" 
              onChange={(e)=>handleInput(keyname,value)} id="username"></input>
         </div>
         <div>
             <label htmlFor="Email">Email</label>
             <input type="text"name="email"onChange={(e)=>handleInput(key,value)} value={FormData.email}id="email"></input>
         </div>
         <div>
             <label htmlFor="Password">Password</label>
             <input type="password" name="password"onChange={(e) => handleInput(key,value)}value={FormData.password} id="password"></input>
         </div>

         <button> submit</button>
         </form>
         </div>
         )
    }
 