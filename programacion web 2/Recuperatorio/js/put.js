const putData =()=>{
    const update = {
        titulo:"Actualizado",
        descripcion:"actualizado",
        fecha: new Date().toISOString(),
        nombre: `Actualizado`,
        valor: new Int32().toString(),
    };
    fetch('${API_URL}/1',{
        method: 'PUT',
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(update)
    })
    .then(response=>{
        if(!response.ok)
        {
            throw new Error('Error en la petición, el estado es: '+response.status);
        }
        return response.json();
    })
    .then(data =>showResult(data))
    .catch(error=>showResult(error.message.true));
}