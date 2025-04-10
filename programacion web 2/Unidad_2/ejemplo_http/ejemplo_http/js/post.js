const postData = () => {
    const newPost = {
        titulo: `Nuevo Post`,
        descripcion: `nueva descripcion`,
        fecha: new Date().toISOString()
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
