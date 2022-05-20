import { createContext, useState} from 'react'
import { useNavigate } from 'react-router-dom'

export const Context = createContext('oi')

export const AuthProvider = ({children}) => {

  const [ userContext, setUserContext ] = useState({})
  const navigate = useNavigate()

  const loginContext = (user,avatar) => {
  setUserContext({user,avatar})
  navigate('/home')
} 

  return (

    <Context.Provider value={{loginContext, userContext}}>
      {children}
    </Context.Provider>
  )
}
