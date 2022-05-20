import { ContainerApp, ContainerModal } from '../../Global.js'
import { Header } from '../../components/Header/index';
import { Dashboard } from '../../components/Dashboard/index.js';

import { Context } from "../../Context"

import Modal from 'react-modal';

import { useEffect, useState, useContext } from 'react';

export function Home() {

const [modalOpen, setModalOpen] = useState(false) 
const [task, setTask] = useState('')
const [time, setTime] = useState('')
const [format, setFormat] = useState('')
const [data, setData] = useState([])

const {userContext} = useContext(Context)

useEffect(()=>{  
  const localData = localStorage.length > 0 ? JSON.parse(localStorage.getItem('user')) : []
  setData(localData)
},[data])

function handleModalOpen () {
  setModalOpen(true)
} 
function handleModalClose () {
  setModalOpen(false)
} 
function handleFormTask (event) {
 event.preventDefault() 
 if (task || time ) {
    const newTask = {
      id : Math.random(),
      task,
      time,
      format,
      completed : ''
   }
   setTask('')
   setTime('')
   handleModalClose()
   const dataTaks = (localStorage.length !== 0) ? JSON.parse(localStorage.getItem('user')): [] 
   dataTaks.push(newTask)
   localStorage.setItem('user',JSON.stringify(dataTaks))
   setData(JSON.parse(localStorage.getItem('user')))
 } else {
   return
 }
}

return (
  <ContainerApp>
    <div>
      <Header/>
      <Dashboard onModalOpen={handleModalOpen} dataTasks={data}/>
    </div>
  
    <Modal 
      isOpen={modalOpen} 
      onRequestClose={handleModalClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <ContainerModal onSubmit={handleFormTask}>
      
        <h2>Dados da Tarefa</h2>
        <div className='line-title'></div>
        <textarea 
        rows={10}
        placeholder='Sua tarefa'
        value={task}
        onChange={event => setTask(event.target.value)} />

        <div className="modal-time">
          <input 
          className='input-time'
          type="number"
          placeholder='Execução'
          value={time}
          onChange={event => setTime(event.target.value)}
          />
          <div className="modal-time-format">
            <input 
            type='radio' 
            name='format' 
            value='h' 
            onClick={event => setFormat(event.target.value)}/>
            <p>Horas</p>
          </div>
          <div className="modal-time-format">
            <input 
            type='radio' 
            name='format' 
            value="min" 
            onClick={event => setFormat(event.target.value)}/>
            <p>Minutos</p> 
            </div>
        </div>

        <button type='submit'>Cadastrar</button>
      </ContainerModal>
    </Modal>
  </ContainerApp>
);

}
