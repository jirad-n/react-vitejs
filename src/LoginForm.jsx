import React, {useState, useEffect, useContext} from 'react'
import ProfileInfo from './ProfileInfo'
import UserContext from './UserContext'

export default function LoginForm() {

  const {updateUser} = useContext(UserContext)
  const [input, setInput] = useState('')
  const {isLogined, setIsLogined} = useContext(UserContext)

  const hdlSubmit = e => {
    e.preventDefault()
    updateUser(input)
    // setIsLogined(true)
    console.log("123123132")
  }

  return (
    <form className='login-form' onSubmit={hdlSubmit}>
      
      <label>Username :
          <input type="text" 
          value={input} 
          disabled = {isLogined}
          onChange={(e)=>setInput(e.target.value)}
          />
      </label>  
      <button disabled = {isLogined}>Login</button>
      
    </form>
    
  )
}
