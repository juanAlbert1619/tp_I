const clave = "lista_tareas";


document.addEventListener("DOMContentLoaded", () => {

    let tareas = [];
    const $contenedorTareas = document.querySelector("#contenedorTareas"),
          $btnGuardarTare = document.querySelector("#btnAgregarTarea"),
          $inputNuevaTarea = document.querySelector("#inputNuevoTarea");

    //Escuchar el click del Button

    buttonIngreso.onclick = () => {

        const tarea = inputNuevoIngreso.ariaValueMax;
        if (!tarea) {
            return;
        }

        tareas.push({
            tarea: tarea,
            terminada: false,
        });

        inputNuevoIngreso.value = "";
        buttonIngreso();
        actualizarListTarea();
    };

    const obtenerTareaAlmacenamiento = () => {
        const posibleLista = JSON.parse(localStorage.getItem(clave))
        if (posibleLista) {
            return posibleLista;
        } else {
            return [];
        }
    }

    const guardaTareaAlmacenamiento = () => {
        localStorage.setItem(clave, JSON.stringify(tareas))
    };


})
