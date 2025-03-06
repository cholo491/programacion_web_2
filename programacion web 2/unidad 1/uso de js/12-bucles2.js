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
    const NotaAprobatoria = 51;
    let i=0;
    let materia='';
    do{
        if(datos[i].calificacion<=NotaAprobatoria)
        {
            materia=datos[i].materia;
            break;
        }
        i++;
    }while(i<datos.length && materia=='');
    if (materia!='')
        console.log(`no aprobaste ${materia}`);
    else
    console.log(`aprobaste ${materia}`);