import axios from "axios"
import { useContext, useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

import { Context } from "../../Context"

import { Container } from "./style"

import { ImGithub } from 'react-icons/im'
import {RiLoginCircleLine} from 'react-icons/ri'

export function Login() {
  const [user, setUser] = useState('')

  const {loginContext} = useContext(Context)

  const notify = () => toast.error('Usuário não encontrado')
  
  async function handleSearch(e) {
    e.preventDefault()
    
    const dataGithub = await axios.get(`https://api.github.com/users/${user}`).then(response => (response.data)).catch(err => {notify(err)})
    
    const avatarGithub = dataGithub.avatar_url
    const userGithub = dataGithub.name

    loginContext(userGithub,avatarGithub)
  }

  function handleNickName (e) {
    e.preventDefault()
    const avatarGithub = ''
    const userGithub = user

    loginContext(userGithub,avatarGithub)
  }

  return (
    <>
    <ToastContainer
      position="top-center"
      theme="colored"
      autoClose={4000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover/>
    <Container>
      <main>  
        <h1>Lista de Tarefas</h1>
        <div className='line-title'></div>
        
        <div>
          <ImGithub size={18}/>
          <h5>Entrar com github</h5>
        </div>
        
        <form onSubmit={handleSearch}>
          <input 
            type="text" 
            placeholder="usuário"
            onChange={e => setUser(e.target.value)}/>
          <button>Entrar</button>
        </form>
        
        <div>
          <RiLoginCircleLine size={20}/>
          <h5>Entrar com nickName</h5>
        </div>
        
        <form onSubmit={handleNickName}>
          <input 
            type="text" 
            placeholder="usuário"
            onChange={e => setUser(e.target.value)}/>
            <button>Entrar</button>
        </form>

      </main>
    </Container>
    </>
  )
}
