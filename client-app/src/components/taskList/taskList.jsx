import './taskList.css'
import { TableContainer, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';


const TaskList = () => {


    return (
        <div className="tasklist-container">
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell><input type="checkbox" /></TableCell>
                            <TableCell className='task-table-date'>Fecha</TableCell>
                            <TableCell className='task-table-estate'>Estado</TableCell>
                            <TableCell className='task-table-tittle'>Título</TableCell>
                            <TableCell className='Priority'>Prioridad</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* aqui va el map de los datos de la api */}
                        <TableRow>
                            <TableCell><input type="checkbox" /></TableCell>
                            <TableCell className='task-table-date' >Date</TableCell>
                            <TableCell className='task-table-estate'> Listo | En curso | Detenido</TableCell>
                            <TableCell className='task-table-tittle'>Titulo de la tarea</TableCell>
                            <TableCell className='Priority'>Crítica | Alta | Media | Baja</TableCell>
                        </TableRow>

                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default TaskList