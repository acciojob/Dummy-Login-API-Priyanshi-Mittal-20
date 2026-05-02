import React from "react";
import { useState } from "react";

let data=[
    {
        id: 1,
        name: "ABC",
        email: "abc@gmail.com",
        password: "12"
    },
    {
        id: 2,
        name: "DEF",
        email: "def@gmail.com",
        password: "1234"
    },
    {
        id: 3,
        name: "GHI",
        email: "ghi@gmail.com",
        password: "123456"
    }
]

const Dummy=()=>{
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [userError,setUserError]=useState("")
  const [passwordError,setPasswordError]=useState("")
  function handleEmail(e)
  {
    setEmail(e.target.value)
  }
  function handlePassword(e)
  {
    setPassword(e.target.value)
  }
  function handleSubmit(e)
  {
    e.preventDefault()
    setUserError("")
    setPasswordError("")
    setTimeout(()=>{
      const user = data.find((u) => u.email === email);

      if (!user) {
        setUserError("User not found");
        console.log("User not found");
      } else if (user.password !== password) {
        setPasswordError("Password Incorrect");
        console.log("Password Incorrect");
      } else {
        console.log(user);
      }
    },3000)
  }
  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" id= "input-email" value={email} onChange={handleEmail}/>
        <p id="user-error">{userError}</p>
        <input type="password" id="input-password" value={password} onChange={handlePassword}/>
        <p id="password-error" >{passwordError}</p>
        <button type="submit" id="submit-form-btn">Submit</button>
      </form>
    </div>
  )
}





export default Dummy