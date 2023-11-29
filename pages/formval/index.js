import React, { use, useRef, useState } from 'react';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const intialvalue = {
  name: "",
  email: "",
  password: ""
}

function RegistrationFrom() {
  const [inputs, setInputs] = useState(intialvalue)
  const [tableData, setTableData] = useState([])

  const formRef = useRef()

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,

    }
    )
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setTableData([
      ...tableData,
      inputs
    ])
    setInputs(intialvalue)
    formRef.current.reset()
  }
  const handleDelete = (index) => {
    const filterData = tableData.filter((item, i) => i !== index);
    setTableData(filterData)
  }

  console.log('inputs=======', inputs)
  return (
    <div>
      <center> <h1>Submit Form</h1>
        <form onSubmit={handleSubmit}
          ref={formRef}
        >
          <label>Name</label>
          <input className='mt-4' type='text' placeholder='enter your nsame' name='name' value={inputs.name} onChange={handleChange}></input><br></br>
          <label>email</label>
          <input type='email' placeholder='enter your email' name='email' value={inputs.email} onChange={handleChange}></input><br></br>
          <label>password</label>
          <input type='password' placeholder='enter your password' name='password' value={inputs.password} onChange={handleChange}></input><br></br>
          <Button type='submit' variant="primary">login</Button>{' '}
        </form>
      </center>
      <Table striped>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {
            tableData.map((item, i) => (
              <tr key={i}>

                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
                <td> <Button variant="success">edit</Button>{' '}
                  <Button variant="warning" onClick={() => handleDelete(i)} >delete</Button>{' '}</td>

              </tr>


            ))
          }

        </tbody>
      </Table>
      <div>
      </div></div>

  );
}

export default RegistrationFrom;