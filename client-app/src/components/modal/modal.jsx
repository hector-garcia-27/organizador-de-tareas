import { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { initialStateAddTask } from '../../utils/funciones/initialStates';

function ModalAddTask() {
  const [show, setShow] = useState(false);
  const [newTask, setNewTask] = useState(initialStateAddTask)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (event) => {
    const { name, value } = event.target
    setNewTask({ ...newTask, [name]: value })
  }

  const submitForm = () => {
    
    console.log(newTask) // peticion POST a tabla tareas
    
    setNewTask(initialStateAddTask)
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
                <option value="0">Prioridad</option>
                <option value="1">Crítica</option>
                <option value="2">Alta</option>
                <option value="3">Media</option>
                <option value="4">Baja</option>
              </Form.Select>
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