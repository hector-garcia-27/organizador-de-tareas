import './tasks.css'
import AddTask from '../../components/addTask/addTask'
import TaskList from '../../components/taskList/taskList'

const Task = () => {
    const nombre = "Hector"


    return (
        <div className="task-container">
            <p className='task-text'> Hola <b>{nombre}</b></p>
            <p className='task-text'>Agrega nuevas tareas!</p>
            <div className='task-add'>
                <AddTask className="task-add" />
            </div>
            <TaskList />
        </div>
    )
}

export default Task