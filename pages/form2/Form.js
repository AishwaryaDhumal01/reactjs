import React, { useState } from "react";

const MUltiInputs = () => {
    const [userRegistration,setuserRegistration ] = useState({})

    const handleInput = (e) =>{
        const name=e.target.name;
        const value =e.target.value;

        setuserRegistration({...userRegistration,[name]:value})

    }
    const handleSubmit = (e) =>{
        e.preventDefault();
    }
    return (
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
            <div>
                <label htmlFor="Gender">Gender</label>
                <input type="radio" name="male" onChange={handleInput} value={userRegistration.gender} id="male"></input>male
                <input type="radio" name="female" onChange={handleInput}value={userRegistration.gender} id="female"></input>female
            </div>
            <button type="submit">Registrarion</button>
           </form>
        </div>
    )
}
export default MUltiInputs;