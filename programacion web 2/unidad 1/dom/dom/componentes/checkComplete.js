const checkComplete = () => {
    const i = document.createElement('i');
    i.classList.add('fas', 'fa-check-square', 'icon');
    i.addEventListener("click", color);
    return i;
    const color = (evento) => {
        const element = evento.target;
        element.classList.add('completeIcon');
        element.classList.remove('fa-check-square');
        element.classList.add('fa-check-circle');
    };  
}

export default checkComplete;