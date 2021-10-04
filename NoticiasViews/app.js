document.getElementById('FormToDo').addEventListener('submit', guardarTarea);

function guardarTarea(evento){

    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;

    const tarea = {
        title,
        description
    };
    
    
    if(localStorage.getItem('tareas') === null){
        let tareas = [];
        tareas.push(tarea);
        localStorage.setItem('tareas', JSON.stringify(tareas));
    } else {
        let tareas = JSON.parse(localStorage.getItem('tareas'));
        tareas.push(tarea);
        localStorage.setItem('tareas', JSON.stringify(tareas));
    }
    

    
    obtenerTarea();
    document.getElementById('FormToDo').reset();
    evento.preventDefault();
}

function obtenerTarea(){
    let tareas = JSON.parse(localStorage.getItem('tareas'));

    let verTareas = document.getElementById('tareas');

    verTareas.innerHTML = '';
    for(let i = 0; i < tareas.length; i++){

        let title = tareas[i].title;
        let description = tareas[i].description;

        verTareas.innerHTML += 
        `<div class="card mb-3">
        <div class="card-body">
        <p>${title} - ${description}</p>
        <a class="btn btn-danger" onclick="borrarTarea('${title}')">Borrar</a>
        </div>
        </div>`
    }
    
}

obtenerTarea();

function borrarTarea(tituloTarea){
let tareas = JSON.parse(localStorage.getItem('tareas'));
for(let i=0; i<tareas.length; i++){
    if(tareas[i].title == tituloTarea){
        tareas.splice(i, 1);
    }
}
localStorage.setItem('tareas', JSON.stringify(tareas));
obtenerTarea();

}
