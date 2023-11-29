import React ,{useState} from "react";

 export default function Signup(){
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const[newdata,setnewData] = useState([]);
    const submitForm=(e)=>{
        e.preventDefault();
        const newd= {name:name,email:email,password:password};
        setnewData([...newdata,newd])
        setName("")
    }


    //const [issubmit,setIsSubmit] = useState(false);

    return(
       
        <div>
        <form onSubmit={submitForm}>
         <div>
             <label htmlFor="username">Fullname</label>
             <input type="text"name="name" 
              onChange={(e)=>setName(e.target.value)} value={name} id="username"></input>
         </div>
         <div>
             <label htmlFor="Email">Email</label>
             <input type="text"name="email"onChange={(e)=>setEmail(e.target.value)} value={email}id="email"></input>
         </div>
         <div>
             <label htmlFor="Password">Password</label>
             <input type="password" name="password"onChange={(e)=>setPassword(e.target.value)} value={password} id="password"></input>
         </div>
         <button type="submit">login</button>
         </form>
         <div>{
            newdata.map((curElem)=>{
                return (
                    <div>
                        <p>{curElem.name}</p>
                        <p>{curElem.email}</p>
                        <p>{curElem.password}</p>
                    </div>
                )
            })}
            </div>


         </div>
          

         

    
    )
   

    
}