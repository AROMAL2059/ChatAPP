import React from 'react'

import { UserContext } from './UserContext.jsx'
import { useContext } from 'react'
import RegisterAndLoginForm from './RegisterAndLoginForm'
import Chat from './Chat.jsx'

const Routes = () => {
    const {username,id}=useContext(UserContext)

if(username){
    return (
  
      <Chat/>
    )
}

  return (
    <RegisterAndLoginForm/>
  )
}

export default Routes