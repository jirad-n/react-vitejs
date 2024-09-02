import React, {useState, useContext, useEffect} from 'react'
import ProfileInfo from './ProfileInfo'
import UserContext from './UserContext'

function Navbar({setPage}) {
  const [buttonText, setButtonText] = useState('')
  const {isLogined, setIsLogined} = useContext(UserContext)

useEffect( () => {


},[isLogined])

  return (
    <div className='navbar'>
        <button onClick={ () => {setPage(1), setIsLogined(!isLogined)} }>{isLogined ? 'Log Out' : 'Login Form'}</button>
        <button onClick={ () => setPage(2) }>ProductPage</button>
      
      <ProfileInfo />
    </div>
  )
}

export default Navbar
