// Selecciona el botón y agrega un evento de clic
document.getElementById('btn_encriptar').addEventListener('click', function() {
    
	respuesta = reemplazarVocales(document.getElementById('ingrese texto').value) 
	//alert(respuesta);
	document.getElementById('texto_resultado').innerText = respuesta;
});

//Selecciona el botón y agrega un evento de clic
document.getElementById('btn_desencriptar').addEventListener('click', function() {
    
	texto = desencriptar(document.getElementById('ingrese texto').value) 
	//alert(texto);
	document.getElementById('texto_resultado').innerText = texto;
});


function reemplazarVocales(textoOriginal) {
    const vocales = [
        ['a', 'a¡'],
        ['e', 'enter'],
        ['i', 'ima'],
        ['o', 'ober'],
        ['u', 'ufat']
    ];

    vocales.forEach(([vocal, reemplazo]) => {
        let expresionRegular = new RegExp(vocal, 'gi'); // 'gi' para insensibilidad a mayúsculas y global
        textoOriginal = textoOriginal.replace(expresionRegular, reemplazo);
    });

    return textoOriginal;
}

function desencriptar(textoOriginal) {
    const vocales = [
        ['a¡', 'a'],
        ['enter', 'e'],
        ['ima', 'i'],
        ['ober', 'o'],
        ['ufat', 'u']
    ];

    vocales.forEach(([vocal, reemplazo]) => {
        let expresionRegular = new RegExp(vocal, 'gi'); // 'gi' para insensibilidad a mayúsculas y global
        textoOriginal = textoOriginal.replace(expresionRegular, reemplazo);
    });

    return textoOriginal;
}
function copiarAlPortapapeles(id_elemento) {

    // Crea un campo de texto "oculto"
    var aux = document.createElement("input");
  
    // Asigna el contenido del elemento especificado al valor del campo
    aux.setAttribute("value", document.getElementById(id_elemento).innerHTML);
  
    // Añade el campo a la página
    document.body.appendChild(aux);
  
    // Selecciona el contenido del campo
    aux.select();
  
    // Copia el texto seleccionado
    document.execCommand("copy");
  
    // Elimina el campo de la página
    document.body.removeChild(aux);
  
  }