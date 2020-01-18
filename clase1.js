
/*==========================================
=            Clase 1: Variables            =
==========================================*/


var nombre   = 'Rahisbel' 
var apellido = 'Herrera'
var edad = 22 /* edad = '22 años' */


//console.log('Hola ' + nombre + ' ' + apellido)
//console.log('tengo ' + edad)

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


/*======================================================
=            Clase 3: Variables tipo número            =
======================================================*/


var incremento = edad + 1 /* edad += 1 */

var peso = 75
var decremento = peso - 2 /* peso -= 2 */

var sandwich = 1
var sumar = peso + sandwich /* peso += sandwich */

var precioDeVino = 200.3
var total = Math.round(precioDeVino * 100 * 3 ) / 100 /* para obtener decimales precisos */

var totalStr = total.toFixed(2) /* dos decimales despues de la coma */

var total2 = parseFloat(totalStr) /* transformar a flotante */

var pizza = 8
var persona = 2
var division = pizza / persona


/*==========================================
=            clase 4: Funciones            =
==========================================*/

var nombre = 'Rahisbel' , edad = 22

function imprimirEdad(n,e){
	
	//console.log(`${n} tiene ${e} años`)
}

//imprimirEdad(nombre,edad) //por ser un lenguaje fuertemente tipado 
//imprimirEdad('vicky',28)	  // en caso de que no enviemos los parametros	
//imprimirEdad('Eric',24)	  // no lanzará error, tratará de ejecutarlo
//imprimirEdad('Dario',27)



/*============================================================
=            clase 5: el alcance de las Funciones            =
============================================================*/

function imprimirNombreEnMayusculas(n){ 
	n = n.toUpperCase()
	//console.log(n)
	// para no modificar la variable nombre (MAYUS)
	// se utiliza un parametro n o nombre, cualquiera
}

imprimirNombreEnMayusculas(nombre)



/*==========================================
=            clase 6: Objetos              =
==========================================*/

/*Los objetos se definen delimitados mediante llaves {}

Un atributo se compone de una clave (key) y un valor (value), 
que se separan entre sí por dos puntos “”:"". 
Los valores pueden ser de tipo string, número, booleano, etc. 
Cada atributo está separado del siguiente por una coma. 
Un objeto puede tener todos los atributos que sean necesarios.

Escribir el nombre de un objeto separado por un punto del nombre de un atributo, 
nos permite acceder al valor de dicho atributo para ese objeto. 
Un objeto también se puede pasar como atributo en una función.

Las últimas versiones de JavaScript nos permiten desglosar el objeto 
para acceder únicamente al atributo que nos interesa.
Esto se consigue encerrando el nombre del atributo entre llaves { }.
*/

var rahisbel = {
	nombre : 'Rahisbel',
	apellido : 'Herrera',
	edad : 22
}

var dario = {
	nombre : 'Dario',
	apellido : 'Susnisky',
	edad : 27
}

function imprimirNombreEnMayusculas1(persona){ 
	var nombre = persona.nombre.toUpperCase()
	//console.log(nombre)
	//console.log(persona.nombre.toUpperCase())
}

// de ésta manera obtenemos el dato de una vez
function imprimirApellido({apellido}){
	//console.log(apellido.toUpperCase())
}

/*en caso de que la función no reciba como parámetro
un objeto, se coloca rahisbel.nombre, dario.nombre  */
//imprimirNombreEnMayusculas1(rahisbel)
//imprimirNombreEnMayusculas1(dario)
//imprimirApellido(rahisbel)

// define el objeto y asigna nuevo nombre
//imprimirNombreEnMayusculas1({nombre : 'pepito'})



/*=======================================================
=            clase 7: Desestructurar objetos            =
=======================================================*/

function imprimirNombreEnMayusculas2(persona){ 

	var {nombre} = persona
	//console.log(nombre.toUpperCase())

}


//imprimirNombreEnMayusculas2(rahisbel)

/*RETO: Imprimir nombre y edad que imprima:
hola, me llamo ... y tengo ... años

function imprimirNombreYEdad(persona){
	var {nombre} = persona
	var {edad} = persona
	console.log('Hola me llamo '+nombre+ ' y tengo '+edad+' años')
}

imprimirNombreYEdad(rahisbel)
imprimirNombreYEdad(dario) */


/*===================================================================
=            Clase 8 : Parámetros por referencia / valor            =
===================================================================*/

/*Javascript se comporta de manera distinta cuando le pasamos un objeto como parámetro.
Cuando los objetos se pasan como una referencia, estos se modifican fuera de la función. 
Para solucionar esto se puede crear un objeto diferente. Esto lo podemos hacer colocando 
tres puntos antes del nombre. Ej …persona.
*/


function cumpleaños(persona){
	return{
		...persona, // se desglosa persona en ése nuevo objeto
		edad : persona.edad+1
	// esto retorna un nuevo objeto con la misma información salvo la edad	
	}
}


/*==============================================
=            clase 9: Comparaciones            =
==============================================*/

/*Existen varias maneras de comparar variables u objetos dentro de javascript. 
En el primer ejemplo le asignamos a X un valor numérico y a Y un string. 
Para poder compararlos debemos agregar dos signos de igual (==). 
Esto los convierte al mismo tipo de valor y permite que se puedan comparar.

Cuando realizamos operaciones es recomendable usar tres símbolos de igual (===). 
Esto permite que JavasScript no iguale las variables que son de distinto tipo. 
Te recomendamos que uses el triple igual siempre que estés comparando variables.

Existen cinco tipos de datos que son primitivos:

Boolean
Null
Undefined
Number
String .

recomiendan usar más el triple =*/

var x = 4, y = '4'

// x == y  permite comparar valores primitivos: número, letras.
// x === y permite comparar tipos de variables.

var unapersona = {
	nombre: 'rahisbel'
}

var otrapersona = {
	nombre:'rahisbel'
	//...unapersona
}

/* Para los objetos no funciona ni el doble ni el triple
dado que compara la referencia de las variables 
unapersona == otrapersona  falso
unapersona === otrapersona falso

la única manera de que sea verdadero es igualando
un objeto a otro, entonces así un objeto apuntaria 
al mismo lugar de memoria: 

var otrapersona = unapersona

al hacer esto, debo tener presente que si modifico
alguno de los dos objetos, el otro se verá afectado

otrapersona.nombre = 'pepe'
unapersona ---> "pepe"

*/

