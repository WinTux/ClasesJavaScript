/* DOM
    Document Object Model

    Tipos:
    document
    Element
    Atributo
    Text
    Comentario
*/

var heading5 = document.getElementsByTagName("h5");
console.log(heading5[1]);

// Objeto


// Obteniendo elementos por su nombre
var parr = document.getElementsByName('prf');
console.log(parr[0]);

// Obteniendo un elemento por su id
var unH5 = document.getElementById('txt');
var unElem = document.getElementById('elementito');
console.log(unH5);
console.log(unElem);

/* AGREGAR ELEMENTOS AL DOM */
var pr = document.createElement('p');
var contenido = document.createTextNode("Hola desde un párrafo nuevo");
pr.appendChild(contenido);
document.body.appendChild(pr);

function crear(){
    var heading3 = document.createElement('h3');
    var contenido = document.createTextNode("FUNCIONA, SI SEÑOR");
    heading3.appendChild(contenido);
    document.body.appendChild(heading3);
    console.log("FUNCIONA!!!!");
}

function mostrarTabla(){
    var tbl = document.getElementById('tabla_oculta');
    tbl.style.display = 'block';
}