
/*==========================================
=            Clase 1: Variables            =
==========================================*/


var nombre   = 'Rahisbel' 
var apellido = 'Herrera'
var edad = 22 
edad = '22 años'

console.log('Hola ' + nombre + ' ' + apellido)
console.log('tengo ' + edad)

/**
 * Declaración de variables
 * JS es un lenguaje debilmente tipado
 * por lo que las variables pueden tener 
 * cualquier  tipo de dato
 */


/*======================================================
=            Clase 2: Variables tipo string            =
======================================================*/


var nombreEnMayusculas = nombre.toUpperCase()

var apellidoEnMinisculas = apellido.toLowerCase()

var primeraLetraDelNombre = nombre.charAt(0)

var cantidadDeLetrasDelNombre = nombre.length

var nombreCompleto = nombre +' '+ apellido /* concatenar */

var nombreCompleto1 = `${nombre} ${apellido.toUpperCase()}` /* otra manera de concatenar, llamada interpolación de texto */

var str = nombre.charAt(1) + nombre.charAt(2) /* acceder a la primera letra y concatenar */
var str1 = nombre.substr(1,4) /* otra manera de acceder a las letras del string */

/**
 *
 * RETO: Mostrar al usuario la última letra de su nombre
 * 
 * var nombreUsuario = prompt('Ingrese su nombre:')
 * var cant = nombreUsuario.length
 * var ultimaLetra = nombreUsuario.charAt(cant - 1)
 *
 */

