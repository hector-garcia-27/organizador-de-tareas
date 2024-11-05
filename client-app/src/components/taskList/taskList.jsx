// import './taskList.css'
// import { TableContainer, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
// const TaskList = () => {
// 
// 
//     return (
//         <div className="tasklist-container">
//             <TableContainer>
//                 <Table>
//                     <TableHead>
//                         <TableRow>
//                             <TableCell><input type="checkbox" /></TableCell>
//                             <TableCell className='task-table-date'>Fecha</TableCell>
//                             <TableCell className='task-table-tittle'>Título</TableCell>
//                             <TableCell className='Priority'>Prioridad</TableCell>
//                             <TableCell className='task-table-estate'>Estado</TableCell>
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {/* aqui va el map de los datos de la api */}
//                         <TableRow>
//                             <TableCell><input type="checkbox" /></TableCell>
//                             <TableCell className='task-table-date' >Date</TableCell>
//                             <TableCell className='task-table-tittle'>Titulo de lax tarea</TableCell>
//                             <TableCell className='Priority'>Crítica | Alta | Media | Baja</TableCell>
//                             <TableCell className='task-table-estate'> Listo | En curso | Detenido</TableCell>
//                         </TableRow>
// 
//                     </TableBody>
//                 </Table>
//             </TableContainer>
//         </div>
//     )
// }
// export default TaskList


const columns = [
    { field: 'date', headerName: 'Fecha', width: 150 },
    { field: 'tittle', headerName: 'Titulo', width: 600 },
    { field: 'priority', headerName: 'Prioridad', width: 200 },
    { field: 'state', headerName: 'Estado', type: 'number', width: 200 },
];

const rows = [ // pedir a la api
    { idIser: 1, id: 1, date: '30-30-30', tittle: 'Hacer comida', description: 'ir al mercado a comprar ingredientes, luego preparar la comida', priority: "alta", budget: '400000', state: "En Curso" },
    { idIser: 1, id: 2, date: '20-30-30', tittle: 'Hacer comida', description: 'ir al mercado a comprar ingredientes, luego preparar la comida', priority: "media", budget: '800000', state: "Detenido" },
    { idIser: 1, id: 3, date: '10-30-30', tittle: 'Hacer comida', description: 'ir al mercado a comprar ingredientes, luego preparar la comida', priority: "baja", budget: '1800000', state: "Listo" },
    { idIser: 1, id: 4, date: '10-30-30', tittle: 'Hacer comida', description: 'ir al mercado a comprar ingredientes, luego preparar la comida', priority: "baja", budget: '1800000', state: "Listo" },
    { idIser: 1, id: 5, date: '10-30-30', tittle: 'Hacer comida', description: 'ir al mercado a comprar ingredientes, luego preparar la comida', priority: "baja", budget: '1800000', state: "Listo" }
];

import { DataGrid } from '@mui/x-data-grid'
import { Paper } from '@mui/material';

const paginationModel = { page: 0, pageSize: 5 };

export default function DataTable() {
    return (
        <Paper sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{ pagination: { paginationModel } }}
                pageSizeOptions={[5]}
                checkboxSelection
                sx={{ border: 0 }}
            />
        </Paper>
    );
}