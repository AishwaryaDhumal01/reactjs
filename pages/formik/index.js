import React from "react";
import { useFormik } from "formik";
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import * as Yup from "yup";

export default function App() {
    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            mobile: "",
            gender: "",
            country:""


        },
        validationSchema:Yup.object({
            username:Yup.string().max(10).required("this field is required"),
             email:Yup.string().email("plese enter valid email").required("this field is required")
        }),
        onSubmit: (values,action) => {
            console.log("==submiting===", values)
            action.resetForm();

        }
    })

    console.log(formik.touched)


    return (
        <div>
            <center>
                <form onSubmit={formik.handleSubmit}>
                    
                    __Formik Form_______<br></br><br></br>
                    Name<input type="text" name="username" placeholder="enter your name" values={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} ></input><br></br>
                    {formik.touched.username && formik.errors.username && <p style={{color:"red"}}>{formik.errors.username}</p>}<br></br>
                    email<input type="text" name="email" placeholder="enter your name" values={formik.values.email} onChange={formik.handleChange} ></input><br></br>
                    {formik.touched.email && formik.errors.email && <p style={{color:"red"}}>{formik.errors.email}</p>}<br></br>
                    mobile<input type="text" name="mobile" placeholder="enter your name" values={formik.values.mobile} onChange={formik.handleChange} ></input><br></br><br></br>
                    gender---<input type="radio" name="gender" placeholder="enter your name" value="male" onChange={formik.handleChange} ></input>  Male
                    <input type="radio" name="gender" placeholder="enter your name" value="female" onChange={formik.handleChange} ></input>Female<br></br><br></br>
                    <select name="country" onChange={formik.handleChange} >
                        <option value=""> select country</option>
                        <option value="india"> india</option>
                        <option value="india"> pakl</option>
                        <option value="india"> ina</option>
                    </select>


                    <Button type='submit' variant="primary">login</Button>{' '}
                </form>
            </center>


        </div>


    )
}


