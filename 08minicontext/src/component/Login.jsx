import React,{useContext, useState} from "react";
import UserContext from "../context/UserContex";


function Login(){
  const [username ,setUsername] = useState('');
  const [passward , setPassward] = useState('');

  const {setUser} = useContext(UserContext)  
     
     
  
  const handleSubmit = (e)=>{
      e.preventDefault()
      setUser({username ,passward})
     }
    return (

<div>
    <h1>Pankajs website</h1>
    <h2>Login</h2>
    <input type="text" 
    value={username}
    onChange={(e)=> setUsername(e.target.value)}
    placeholder="username"/>
    {" "}
    <input type="text"
     value={passward}
     onChange={(e)=> setPassward(e.target.value)} placeholder="Passward"/>
   <button onClick={handleSubmit}>Submit</button>

</div>

    )
}

export default Login