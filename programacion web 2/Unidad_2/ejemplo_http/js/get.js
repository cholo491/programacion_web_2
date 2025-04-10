const API_URL='http://localhost:3000/posts'
//enlace recuperado de la conexion al servidor con archivo json
//json-server --watch /ruta

const getData = ()=>
{
    fetch(API_URL)
    .then(response=>{
        if(!response.ok)
        {
            throw new Error('Error en la petición, el estado es: '+response.status);
        }
        return response.json();
    })
    .then(data =>showREsult(data))
    .catch(error=>showREsult(error.message.true));
}