import React,{useState} from 'react'

function Forms() {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [submittedData,setSubmittedData]=useState(null)

    const handleSubmit=(e)=>{
        e.preventDefault();
        const formData={name,email,password};
        setSubmittedData(formData);
        setName("");
        setEmail("");        
        setPassword("");
    }
  return (
    <div>
      <h1>FORM</h1>
      <form onsubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} /><br></br>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} /><br>
        </br>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} /><br></br>

        <button type="submit">submit</button>
      </form>
      {submittedData && (
        <div>
            <p><strong>Name : {submittedData.name}</strong></p>
            <p><strong>Email : {submittedData.email}</strong></p>
            <p><strong>Password : {submittedData.password}</strong></p>
        </div>
      )}
    </div>
  )
}

export default Forms
