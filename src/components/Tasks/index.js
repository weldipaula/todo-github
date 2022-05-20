import { Container } from './style'

import {ImRadioUnchecked} from 'react-icons/im'
import {
  FaRegCheckCircle, FaTrashAlt} from 'react-icons/fa'

import { useState } from 'react'

export function Tasks (props) {
  const [completed, setCompleted] = useState('')
  const data = props.dataTasks

  function handleCompleted(task) {
    if (completed === '') {
      setCompleted('completed')
    } else {
      setCompleted('')
    }

    const newDataTasks = JSON.parse(localStorage.getItem('user'))

    if (task.completed === '') {
      task.completed = 'completed'
    } else {
      task.completed = ''
    }

    const dataTasking = newDataTasks.filter(tasking => tasking.id !== task.id)

    dataTasking.push(task)
    localStorage.clear()
    localStorage.setItem('user',JSON.stringify(dataTasking))
  }
  function handleDelete({id}) {
    const newDataTasks = JSON.parse(localStorage.getItem('user'))

    const dataTasking = newDataTasks.filter(tasking => tasking.id !== id)

    localStorage.clear()
    localStorage.setItem('user',JSON.stringify(dataTasking))

  }
  return (
    <Container>
      
      {data.map(task => 
        <div className="task" key={task.id}>
          <span 
            className='task-icon' 
            onClick={() => {handleCompleted(task)}}>{task.completed ? <FaRegCheckCircle size={16}/> :<ImRadioUnchecked size={16}/>}
          </span>
          <span 
            className='task-icon' 
            onClick={()=>{handleDelete(task)}}><FaTrashAlt size={16}/>
          </span>
          <span className={"task-time "+task.completed}>{task.time +" "+ task.format}</span>
          <p className={task.completed}>{task.task}</p>
        </div>
      )}
    </Container>
    
  )
}