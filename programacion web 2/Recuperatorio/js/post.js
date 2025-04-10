const postData = () => {
    const newPost = {
        titulo: `Nuevo Post`,
        descripcion: `nueva descripcion`,
        fecha: new Date().toISOString(),
        nombre: `Nuevo nombre`,
        valor_entero: new Int32().toString(),
    };
    fetch(API_URL, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(newPost)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la petición, el estado es: ' + response.status);
        }
        return response.json();
    })
    .then(data => showResult(data))
    .catch(error => showResult(error.message));
};

const postData1 = () => {
    const newPost = {
        titulo: document.getElementById('titulo1').value,
        descripcion: document.getElementById('descripcion1').value,
        fecha: document.getElementById('fecha1').value,
        nombre: document.getElementById('nombre1').value,
        valor_entero: document.getElementById('valor_entero1').value,
    };
    };