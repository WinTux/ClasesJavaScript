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

function saludar(nombre){
    console.log('Hola ' + nombre);
}

function deseleccionar(){
    console.log('Se lanzó el evento de deselección ');
}

function saludar(nom, ape){
    console.log('Hola ' + nom + ' ' + ape);
}

/* ESTRUCTURAS DE DATOS */

// PILA (STACK)
class Pilita {
    constructor(){
        this.elementos = [];
    }
    push(elemento){
        this.elementos.push(elemento);
    }
    pop(){
        return this.elementos.pop();
    }
    peek(){
        return this.elementos[this.elementos.length - 1];
    }
    isEmpty(){
        return this.elementos.length == 0;
    }
    size(){
        return this.elementos.length;
    }
    print(){
        document.write(this.elementos.toString());
    }
}

function estructura_pila(){
    const pila = new Pilita();
    document.write("<br>Está vacío: " + pila.isEmpty());
    pila.push('Pepe');
    pila.push('Ana');
    pila.push('Samantha');
    document.write("<br>Está vacío: " + pila.isEmpty());
    document.write("<br>Cantidad de elementos: " + pila.size());
    yaNoEsta = pila.pop();
    document.write("<br>Ya no está entre nosotros: " + yaNoEsta);//ya veremos
    document.write("<br>Elemento en la cima: " + pila.peek());
}