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
                        console.log('Domingo');
                    }
                }
            }
        }
    }
}