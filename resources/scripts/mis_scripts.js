//alert('Hola mundo!');
//nombre = prompt('Ingrese su nombre');

nom = 'Ana';

// Tipos: numéricos, texto, booleanos, arreglos
// Numeros: naturales, enteros, reales, racionales, irracionales, complejos

n = 500000;
nom = 'Pepe';
// String - Cadena
r = "nom";
nombre = '';

nombre = 'Buenas noches ' + nombre;

//alert(nombre);

//n = parseInt( prompt('Ingrese un numero'));
//m = parseInt(prompt('Ingrese otro numero'));
/*
rescatar valor ingresado por usuario -> '5'
convertir cadena a entero -> 5
asignar valor a n
*/
//resultado = n + m;
//alert('La suma es: ' + resultado);

//TODO: Estructuras de control (condicionales y bucles)

//tipo de dato booleano -> boolean, bool
abierto = true; // false

//alert(!abierto); 
// true -> 'true', false -> 'false'
// 45 -> '45', 0 -> '0'

abierto = !abierto;

x = 5;


y = x + 1;

//alert(5 < 3 || 5 >= 0);

// ¿afuera está lloviendo o es de noche?
// Sí


//edad = parseInt(prompt('¿Cuántos años tiene?'));

/*
if(edad < 18){
    alert('Lo sentimos, usted es menor de edad.');

}else{
    if(edad > 65){
        alert('SE ha establecido que el alcohol es dañino para edades elevadas.');
    }
    alert('Bienvenido a su licorería de confianza');
}
*/

/*
if(edad >= 18){
    if(edad > 65){
        alert('SE ha establecido que el alcohol es dañino para edades elevadas.');
    }
    alert('Bienvenido a su licorería de confianza');
}else{
    alert('Lo sentimos, usted es menor de edad.');
}



alert('LISTO');
*/

d = parseInt(prompt('Ingrese un numero de dia de la semana'));

if(d == 1){
    console.log('Lunes');
}else{
    if(d == 2){
        console.log('Martes');
    }else{
        if(d == 3){
            console.log('Miércoles');
        }else{
            if(d == 4){
                console.log('Jueves');
            }else{
                if(d == 5){
                    console.log('Viernes');
                }else{
                    if(d == 6){
                        console.log('Sábado');
                    }else {
                        if(d == 7){
                            console.log('Domingo');
                        }else{
                            console.log(d + ' no es un día de la semana');
                        }
                        
                    }
                }
            }
        }
    }
}

if(d == 1) console.log('Es el dia Lunes');
else if(d == 2) console.log('Martes');
else if(d == 3) console.log('Miércoles');
else if(d == 4) console.log('Jueves');
else if(d == 5) console.log('Viernes');
else if(d == 6) console.log('Sábado');
else if(d == 7) console.log('Domingo');
else console.log('No es un día de la semana');


/* SWITCH */
console.log('Incia en el momento: '+ Date.now());

switch(d){
    case 1:
        console.log('Lunes');
        //pueden existeir más lineas de código
        break;
    case 2:
        console.log('Martes');
        break;
    case 3:
        console.log('Miércoles');
        break;
    case 4:
        console.log('Jueves');
        break;
    case 5:
        console.log('Viernes');
        break;
    case 6:
        console.log('Sábado');
        break;
    case 7:
        console.log('Domingo');
        break;
    default:
        console.log('No es un día');
        break;
}
console.log('Finaliza en el momento: '+ Date.now());
// Lo demás

// Tipo de dato compuesto:
// arreglos index-0
dias = 234;
if(d > 0 && d < 8 ){
    dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo", 123, 5, true, false];
    indice = d-1;
    dia5 = dias[indice];
    console.log(dia5);
}else
console.log('No es un día de la semana');
// Alcance de las variables: En JavaScript es un tanto ambiguo

console.log(dias);


// Bucle FOR; estructura iterativa

//FOR repite, un conjunto de lineas de código, una cantidad DETERMINADA de veces
contador = 17; contador++;
contador = contador + 1;
contador = contador - 1;
contador += 3;
contador = contador - 3;


for(i = 10;i >= 0;i -= 3){
    console.log("Hola, estoy dentro del FOR, en la iteración " + i);

}

console.log('Contador quedó con el valor: ' + contador);

matriz = [['1','2','3'],['a','b','c'],[true, false, true]];

console.log(matriz[1]);

console.table(matriz);

console.log(matriz[1][2]);//fila, columna

cubo = [[[1, 2],[3,4]],[[5,6],[7,8]]];

console.log(cubo[0][1][1]); //4 
console.log('La longitud es: ' + [6,'f'].length);

for(i = 0; i < dias.length;i++) 
    console.log('El elemento ' + (i+1) + ' es: ' + dias[i]);

for(fila = 0; fila < matriz.length; fila++)
    for(columna = 0; columna < matriz[fila].length; columna++)
        console.log(matriz[fila][columna]);
// 1 2 3 a b c true false true

// for in
console.log('USO DE FOR-IN');
for(indice in dias){
    console.log(dias[indice]);
}


/* WHILE */

// Nos sirve para iterar una cantidad desconocida de veces
v = 5;
while(v > 0){
    console.log('Estoy en el While');
    v--;
}
//TODO 
