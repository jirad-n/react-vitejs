import React, {useContext} from 'react'
import UserContext from './UserContext'

function ProfileInfo() {
    const {user, isLogined} = useContext(UserContext)
  return (
    <div>
      <h3>Hello, {user ? user : 'Guest'}</h3>
      <p>Print, {isLogined ? 'true' : 'false'}</p>
      {console.log({isLogined})}
    </div>
  )
}

export default ProfileInfo
