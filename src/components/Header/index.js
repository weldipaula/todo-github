import { useContext } from "react";
import {useNavigate} from 'react-router-dom'

import { Container } from "./style";
import minion from '../../assets/images/minion.png'
import {RiLogoutCircleLine} from 'react-icons/ri'

import { Context } from "../../Context";

export function Header () {

  const {userContext} = useContext(Context)
  const navigate = useNavigate()

  return (
    <Container>
      <div className="circle">
      </div>
      <div className="logout" onClick={()=>navigate('/')}>
        <RiLogoutCircleLine size={16}/>
        <button>sair</button>
      </div>
      <div className="person">
        <div className="avatar">
          <img src={userContext.avatar ? userContext.avatar : minion} alt="" />
        </div>
        <div className="person-name">
          <h3>Olá {userContext.user}</h3>
        </div>
      </div>
    </Container>
  )
}