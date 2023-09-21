//alert('Yo soy otro script');

/* FUNCIONES */

//Propias de JavaScript

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


console.log('->' + ape + '<-');
console.log('->' + ape.trim() + '<-');
