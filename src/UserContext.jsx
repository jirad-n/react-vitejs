import React, {createContext, useState} from 'react'

const UserContext = createContext()



function UserContextProvider(props) {
    const [isLogined, setIsLogined] = useState(false)
    console.log("FIRST", isLogined)
    const [user, setUser] = useState(null)
    const updateUser = (username) => {
        if (username.length < 3){
            return alert('Username must be at least 3 characters')
        }else{
            setUser(username)
            setIsLogined(true)
        }
    }

  return (
    <div>
        <UserContext.Provider value={ 
        {user:user
        , updateUser:updateUser
        , isLogined:isLogined
        , setIsLogined:setIsLogined} }>
            {props.children}
        </UserContext.Provider>
    </div>
  )
}

export { UserContextProvider }
export default UserContext
