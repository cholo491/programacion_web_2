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
let materiaSeleccionada = '';
const NotaAprobatoria = 51;
for (let i=0; i<datos.length && NotaAprobatoria == ''; i++)
{
    if(datos[i].calificacion<=NotaAprobatoria)
    {
        materiaSeleccionada=datos[i].materia;
        break;
    }
}
if(materiaSeleccionada == '')
{
    console.log(`No aprobaste ${materiaSeleccionada}`);
}
else
{
    console.log(`aprobaste todas las materias`);
}