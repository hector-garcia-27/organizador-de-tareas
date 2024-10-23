import ModalAddTask from '../modal/modal'
import './addTask.css'

const AddTask = () => {

    return (
        <div className="addtask-container">
            <ModalAddTask />
        </div>
    )
}

export default AddTask


            
            {/* <a href="#modal-container" className="modal-trigger">Agregar tarea</a>
            
            <div className="modal-container" id='modal-container'>
                <div className="modal">
                    <a href="#" className="close">&times;</a>
                    <div className="modal-header">
                        <h2>Agregar una nueva tarea</h2>
                    </div>
                    <div className="modal-body">
                        <input className='addtask-input' type="text" placeholder='Titulo' />
                        <input className='addtask-input' type="text" placeholder='Descripcion' />
                        <input className='addtask-input' type="text" placeholder='Presupuesto' />
                        <select name="" id="">
                            <option value="">Prioridad</option>
                        </select>
                    </div>
                    <div className="modal-footer">
                        <button className='addtask-btn'>Agregar</button>
                    </div>
                </div>
            </div> */}