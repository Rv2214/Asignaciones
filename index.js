let listado = [];
let elementoSeleccionado = null;

function registrarAsignacion() {
    let nombre = document.getElementById('nombreInput').value;
    let apellido = document.getElementById('apellidoInput').value;
    let puntoAsignado = document.getElementById('puntoAsignadoInput').value;
    let fechaHora = new Date().toLocaleString();

    listado.push({
        nombre: nombre,
        apellido: apellido,
        fechaHora: fechaHora,
        puntos: [{ valor: puntoAsignado, fecha: fechaHora }],
    });

    actualizarLista();
    limpiarCampos();
}

function actualizarLista() {
    let listaAsistencia = document.getElementById('listaAsistencia');
    listaAsistencia.innerHTML = '';

    for (let i = 0; i < listado.length; i++) {
        let registro = listado[i];
        let li = document.createElement('li');
        li.textContent = `${registro.nombre} ${registro.apellido} - ${registro.fechaHora} - Puntos: ${registro.puntos.map(punto => punto.valor).join(', ')}`;
        li.setAttribute('data-index', i);
        li.addEventListener('click', function() {
            if (elementoSeleccionado !== null) {
                let anteriorSeleccionado = document.querySelector('.seleccionado');
                if (anteriorSeleccionado) {
                    anteriorSeleccionado.classList.remove('seleccionado');
                }
            }
            elementoSeleccionado = i;
            li.classList.add('seleccionado');
        });
        listaAsistencia.appendChild(li);
    }
}

function seleccionarElemento(index) {
    elementoSeleccionado = index;
    actualizarLista();
}


function agregarNuevoPunto() {
    if (elementoSeleccionado !== null) {
        let nuevoPunto = document.getElementById('nuevoPuntoInput').value;
        let fechaHora = new Date().toLocaleString();
        listado[elementoSeleccionado].puntos.push({ valor: nuevoPunto, fecha: fechaHora });
        actualizarLista();
        limpiarCampos();
    }
}

function limpiarCampos() {
    document.getElementById('nombreInput').value = '';
    document.getElementById('apellidoInput').value = '';
    document.getElementById('puntoAsignadoInput').value = '';
    document.getElementById('nuevoPuntoInput').value = '';
}




