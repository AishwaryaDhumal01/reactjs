import React ,{useState} from "react";
function user(){
    //const [form,formData] = useState({})

    return(
        <div>
        <form onSubmit={handleSubmit}>
         <div>
             <label htmlFor="username">Fullname</label>
             <input type="text"name="username" 
              onChange={handleInput} value={userRegistration.username} id="username"></input>
         </div>
         <div>
             <label htmlFor="Email">Email</label>
             <input type="text"name="email"onChange={handleInput} value={userRegistration.email}id="email"></input>
         </div>
         <div>
             <label htmlFor="Password">Password</label>
             <input type="password" name="password"onChange={handleInput}value={userRegistration.password} id="password"></input>
         </div>
         </form>
         </div>
         )
    }
 export default user;