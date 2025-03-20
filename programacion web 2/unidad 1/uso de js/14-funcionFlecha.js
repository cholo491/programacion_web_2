const datos = [
    {
        'materia':'Programacion-Web',
        'calificacion': 70
    },
    {
        'materia':'Base-de-Datos-II',
        'calificacion': 10
    },
    {
        'materia':'Sistemas-Operativos',
        'calificacion': 50
    },
    {
        'materia':'Redes',
        'calificacion': 80
    },
    {
        'materia':'Matematicas-computacional',
        'calificacion': 90
    },
    {
        'materia':'Animacion',
        'calificacion': 30
    },
    {
        'materia':'ingles-II',
        'calificacion': 40
    },
    {
        'materia':'Base-de-Datos-I',
        'calificacion': 20
    },
    {
        'materia':'Ingles',
        'calificacion': 60
    },
    {
        'materia':'Programacion-movil',
        'calificacion': 100
    }
];
const procesardatos = datos => {
    return datos
        .fitler(datos => datos.calificacion >51)
        .map(datos => {
            const {materia} = materia;
            return materia.length > 5 ? materia.toUppercase() : materia.toLowercase();
        }
        );
}
const resultado = procesardatos(datos);
console.log(resultado);