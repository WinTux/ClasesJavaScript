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
    tbl.style.background = 'blue';
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

// Cola -> Queue [kiu]
class Cola{
    constructor(){
        this.elementos = [];
    }
    enqueue(elemento){
        this.elementos.push(elemento);//inserta al final
    }
    dequeue(){
        return this.elementos.shift();//remueve y retorna el elem del inicio
    }
    peek(){
        return this.isEmpty() ? null : this.elementos[0];
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

function estructura_cola(){
    const cola = new Cola();
    document.write("<br>Está vacío: " + cola.isEmpty());
    cola.enqueue('Pepe');
    cola.enqueue('Ana');
    cola.enqueue('Samantha');
    document.write("<br>Está vacío: " + cola.isEmpty());
    document.write("<br>Cantidad de elementos: " + cola.size());
    yaNoEsta = cola.dequeue();
    document.write("<br>Ya no está entre nosotros: " + yaNoEsta);//ya veremos
    document.write("<br>Elemento en frente de la cola: " + cola.peek());
}

//Variables
 let miVar = 6;

  var miOtraVar = 'Carlos';
  if(true){
    var miOtraVar = 'Pepe';
  }

 const algunaOtraVar = true;

 //Interpolación
 const edad = 15;
 console.log('Tengo ' + edad + ' años.');
 console.log(`Tengo ${edad} años.`);

 //DOM
 var tag = document.getElementById('nombrecito');
 var tagPorClase = document.querySelector('.primary');
 var todos = document.querySelectorAll('.clase');

 tag.classList.add('btn', 'btn-primary');

 //eventos
 //keyup keydown

 tag.addEventListener("click", realizarTrabajo);

 // Clic programático
 function clickeador(){
    var eventoClic = new MouseEvent("click", {
        "view": window,
        "bubbles": true,
        "cancelable" : false
    });

    tag.dispatchEvent(eventoClic);
 }