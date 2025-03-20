import cards from "./cards.js";
const tabla=(()=>{
    //recuperara los datos de la tabla en posicion 0 (el priemer elemento del tbody)
    const cuerpoTabla=document.getElementById('taskTable').getElementsByTagName('tbody')[0];

    const addTask=(task)=>{
        //crea una nueva fila en la tabla
        const nuevaFila=cuerpoTabla.insertRow();
        nuevaFila.insertCell().textContent=task.task;
        nuevaFila.insertCell().textContent=task.description;
        nuevaFila.insertCell().textContent=task.date;
        nuevaFila.insertCell().textContent=task.priority;
        const accionCell=nuevaFila.insertCell(4);
        const accions = document.createElement('div');
        accions.className='actions';

        const completeBotton=document.createElement('button');
        completeButton.textContent='Completar';
        completeButton.className='view';
        completeButton.addEventListener('click',()=>{
            nuevaFila.classList.toggle('completed');
            cards.update();
        });
        accions.appendChild(completeButton);
        //eliminar tareas
        const deleteButton=document.createElement('button');
        deleteButton.textContent='Eliminar';
        deleteButton.className='delete';
        deleteButton.addEventListener('click',()=>{
            cuerpoTabla.deleteRow(nuevaFila.rowIndex);
            cards.update();
        });
        accions.appendChild(deleteButton);
        accionCell.appendChild(accions);
    };
    //recuperar textos y elementos de la tabla
    const getTask=()=>{
        const task=[];
        return Array.from(cuerpoTabla.rows).map(row=>({
            task:row.cells[0].textContent,
            description:row.cells[1].textContent,
            date:row.cells[2].textContent,
            priority:row.cells[3].textContent,
            completed:row.classList.contains('completed'),
        }));
    };
    return {addTask, getTask};
})();
export default tabla;