import React from "react";

  const FormComponent = (props) => {
    const {setName,setEmail,setPassword} = props;
    const handleSubmitForm = () => {
        setIsSubmit(true)
        
    }
    return (
        <form
        onSubmit={(e) => {
            e.preventDefault();
            handleSubmitForm();
        }}>
            <input type="text" name="name" placeholder="enter your name" onChange={(e) => setName(e.target.value)}></input>
            <input type="email" name="email" placeholder="enter your name" onChange={(e) => setEmail(e.target.value)}></input>
            <input type="password" name="password" placeholder="enter your name" onChange={(e) => setPassword(e.target.value)}></input>
            <button type="submit">submit</button>
        </form>
    )
}
export default FormComponent;