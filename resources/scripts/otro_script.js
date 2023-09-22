//alert('Yo soy otro script');

/* FUNCIONES */

//Propias de JavaScript
//sobre cadenas
nom = 'Pepe';
console.log(nom.length); 
ape = ' Peralta';
console.log(nom + ape);

console.log(nom.concat(ape));

console.log(nom.concat(ape, 'OTRA CADENA', 2, true, ape, nom, ape));

n = 5 + 8 + 9 + nom + 8 + 1;
console.log(n);

console.log(nom.toUpperCase());
console.log(nom.toLowerCase());

console.log(ape.charAt(0));// index-0
console.log(ape.indexOf('l'));// retorna el índice de la letra enviada
console.log(ape.indexOf('a'));

console.log(ape.indexOf('g'));//  cuando no existe la letra -> retorna -1

console.log(ape.lastIndexOf('a'));

console.log(ape.substring(4, 7));// alt
console.log(ape.substring(4));// alta

nombre = 'Samantha Rocha Loza';
palabras = nombre.split(' ');
console.log(palabras);

ape = '    Peralta Perales         ';
console.log('->' + ape + '<-');
console.log('->' + ape.trim() + '<-');

//sobre numeros
num1 = 0;
num2 = 0;
console.log(num1/num2);

if(isNaN(num1/num2))
    console.log('División entre 0 detectada');
else
    console.log(num1/num2);

    num1 = 10;
    num2 = 0;
    console.log(num1/num2);
    num1 = -10;
    num2 = 0;
    console.log(num1/num2);
    num1 = 10;
    num2 = 3;
    res = num1/num2;
    console.log(res.toFixed(2));

/*
    FUNCIONES PROPIAS DE NOSOTROS
*/

function sumar(){
    a = parseInt(prompt('Ingrese un numero'));
    b = parseInt(prompt('Ingrese otro numero'));
    r = a + b;
    console.log('La suma es: ' + r);
}

opt = prompt('¿Desea realizar una suma? (SI/NO)');
while(opt == 'SI'){
    sumar();
    opt = prompt('¿Desea realizar otra suma? (SI/NO)');
}

function restar(numero_a, numero_b){
    resultado = numero_a - numero_b;
    console.log('La esta es: ' + resultado);
}

opt = prompt('¿Desea realizar una resta? (SI/NO)');
while(opt == 'SI'){
    a = parseInt(prompt('Ingrese un numero'));
    b = parseInt(prompt('Ingrese otro numero'));
    restar(a, b);
    //TODO ver sugerencia VSCode restar()
    opt = prompt('¿Desea realizar otra resta? (SI/NO)');
}