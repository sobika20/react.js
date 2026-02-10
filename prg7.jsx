import React, { useEffect, useState } from 'react'

function Userdata() {
    const[userData, setUserData] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response)=>response.json())
        .then((data)=>setUserData(data));
    },[])
    
  return (
    <div>
        <h1>UserData-Fetch</h1>
      <table border="2">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
            </tr>
        </thead>
      </table>
      <tbody>
        {userData.map((Details)=>(
            <tr key={Details.id}>
                <td>{Details.id}</td>
                <td>{Details.name}</td>
                <td>{Details.email}</td>
            </tr>
        ))}
      </tbody>
    </div>
  )
}

export default Userdata
