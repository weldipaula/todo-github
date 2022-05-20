import { Container } from "./style";

import {GrAddCircle} from 'react-icons/gr'

import {Tasks} from '../Tasks/index'


export function Dashboard (props) {

  return (
    <Container>
      <div>
        <div className="header-list">
          <h3>Lista de tarefas</h3>
          <span onClick={props.onModalOpen}><GrAddCircle size={24} className={'icon-add'}/></span>
        </div>
        <div className="list">
          <Tasks dataTasks={props.dataTasks}/>
        </div>
      </div>
    </Container>
  )
}