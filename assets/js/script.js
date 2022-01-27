 //Ejercicio 2 "Reealizar operaciones con dos numeros"
//Indicaciones al Usuario
alert("Ingrese dos números diferentes y mayores a cero");
//Creacion de la primera variable numerica
var num1 = prompt("Ingrese el primer número");
var num1 = parseInt(num1);
//Creacion de la segunda variable numerica
var num2 = prompt("Ingrese un segundo número");
var num2 = parseInt(num2);
//Suma de variables
var suma = parseInt(num1) + parseInt(num2);
//Muestra del resultado de la suma de las variables en la web
alert(' La suma es ' + suma);
//Resta de variables
var resta = parseInt(num1) - parseInt(num2);
//Muestra del resultado de la resta de las variables en la web
alert(' La resta es ' + resta);
//Division de variables
var division = parseInt(num1) / parseInt(num2);
//Muestra del resultado de la division de las variables en la web
alert(' La division es ' + division);
//Multiplicacion de variables
var multiplicacion = parseInt(num1) * parseInt(num2);
//Muestra del resultado de la multiplicacion de las variables en la web
alert(' La multiplicacion es ' + multiplicacion);
//Modulo de variables
var modulo = parseInt(num1) % parseInt(num2);
//Muestra del resultado del modulo de las variables en la web
alert(' El modulo es ' + modulo);




//Ejercicio 3 transformacion de grados Kelvin y Fahrenheiten
// Creacion de variable en grados Celsius y Fahrenheit
var temperatura = parseFloat(prompt("Ingrese la temperatura en Grados Celsius"));
//Formula de Grados Celsius a Kelvin
var kelvin = parseFloat(273.15);
//Transformacion de Celsius a kelvin
var kelvin= temperatura + kelvin;
//Muestra de la conversion
alert("La transformacion de la temperatura ingresada en Grados Celsius a Grados Kelvin es : " + kelvin);
//Formula de Grados Celsius a Fahrenheit
var fahrenheit = temperatura * 9/5 + 32;
//Muestra de la conversion
alert("La transformacion de la temperatura ingresada en Grados Celsius a Grados Fahrenheit es : " + fahrenheit);



//Ejercicio 4
//Indicacciones al usuario
var dayconverter = Math.floor(prompt("Ingrese la cantidad de dias a convertir:"));
//Formula para calcular los años
var year = dayconverter / 365;
alert("La cantidad de año es : " + Math.floor(year));
//Formula para calcular las semanas
var week = dayconverter%365/7;
alert("La cantidad de semanas es : " + Math.floor(week));
//Formula para calcular los dias
var days= dayconverter%365%7;
alert("La cantidad de dias es : " + Math.floor(days));




//Ejercicio 5
//Indicaciones al usuraio
alert("Ingrese 5 números")
//Creación de variables de los 5 números que ingrese el usuario
var num1= parseFloat(prompt("Primer número: "));
var num2= parseFloat(prompt("Segundo número: "));
var num3= parseFloat(prompt("Tercero número: "));
var num4= parseFloat(prompt("Cuarto número: "));
var num5= parseFloat(prompt("Quinto número: "));
//Calculo de la suma de todos los números 
var suma = parseFloat(num1)+parseFloat(num2)+parseFloat(num3)+parseFloat(num4)+parseFloat(num5);
//Muestra del resultado de la suma
alert( "La suma de todos los números es: " + suma);
//Calculo del promedio de todos los numeros
var promedio= suma / 5;
//Muestra del resultado del primedio
alert("El promedio de los 5 números ingresados es : " + promedio);




