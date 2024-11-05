import { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { initialStateAddTask } from '../../utils/funciones/initialStates';
import { getToken, ValidacionDataTarea } from '../../utils/funciones/funciones';
import { AddTaskPost } from '../../utils/peticiones/peticion';

function ModalAddTask() {

  const [show, setShow] = useState(false);
  const [newTask, setNewTask] = useState(initialStateAddTask)
  const [error, setError] = useState("")
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const handleChange = (event) => {
    const { name, value } = event.target
    if (name === "budget" && value === NaN){
      setNewTask({...newTask, [name]: 0})
    } else if(name === "budget" && value !== NaN){
      setNewTask({...newTask, [name]: parseInt(value)})
    } else {
      setNewTask({ ...newTask, [name]: value })
    }
  }

  const submitForm = async () => {
    const validacionDatos = ValidacionDataTarea(newTask, setError)
    if (validacionDatos === true) {
      setNewTask(initialStateAddTask)
      const token = getToken()
      const taskPost = await AddTaskPost(newTask, token)
      console.log(taskPost)
    }
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Agregar nueva tarea
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar tarea</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="modal-titulo">
              <Form.Label>Título</Form.Label>
              <Form.Control name='tittle' value={newTask.tittle} type="text" placeholder="" autoFocus onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="modal-descripcion" >
              <Form.Label>Descripción</Form.Label>
              <Form.Control name='description' value={newTask.description} as="textarea" rows={3} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="modal-descripcion" >
              <Form.Label>Presupuesto</Form.Label>
              <Form.Control name='budget' value={newTask.budget} type='number' placeholder='$' onChange={handleChange} />
            </Form.Group>
            <Form.Group>
              <Form.Select name='priority' value={newTask.priority} onChange={handleChange}>
                <option value=""></option>
                <option value="Crítica">Crítica</option>
                <option value="Alta">Alta</option>
                <option value="Media">Media</option>
                <option value="Baja">Baja</option>
              </Form.Select>
              <Form.Group className="mb-3" controlId="modal-descripcion" >
                <Form.Label>
                  {error.length > 0 && <h3 className='modal-error'>{error}</h3>}
                </Form.Label>
              </Form.Group>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => {
            submitForm()
          }}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalAddTask;