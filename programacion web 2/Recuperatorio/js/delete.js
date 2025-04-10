const deleteData=()=>{
    fetch('${API_URL}/1',{
        method: 'DELETE',
        headers:{
            "Content-Type": "application/json",
        }
    })
    .then(response=>{
        if(!response.ok)
        {
            throw new Error('Error en la petición, el estado es: '+response.status);
        }
        showREsult("Registro eliminado con éxito ");
        status: response.status;
    })
    .catch(error=>showResult(error.message.true));
}