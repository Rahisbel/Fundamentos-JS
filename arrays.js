/*=========================================
=            clase 17 : Arrays            =
=========================================*/

/* Los arrays son estructuras que nos permiten organizar elementos 
dentro de una collección. Estos elementos pueden ser números, strings, 
booleanos, objetos, etc.*/

var pacho ={
	nombre :'Francisco',
	apellido :'Lopez',
	altura: 1.65
}

var rah = {
	nombre: 'Rahisbel',
	apellido: 'Herrera',
	altura:1.59
}

var liah = {
	nombre : 'Liah',
	apellido : 'Mantilla',
	altura:1.20 
}

var personas = [pacho,rah,liah]

for(var i = 0; i < personas.length; i++){
	var persona = personas[i]

	console.log(`${persona.nombre} mide ${persona.altura} m`)
}

/*===================================================
=            clase 18 : Filtrar un array            =
===================================================*/

/* En esta clase aprenderemos como filtrar los arrays. 
Para filtrar siempre necesitamos establecer una condición. 
En este ejemplo nuestra condición es que la estatura de las personas sea mayor de 1.80mts.

El método filter ( ) crea una nueva matriz con todos los elementos que pasan la prueba 
implementada por la función proporcionada.

Recuerda que si no hay elementos que pasen la prueba, filter devuelve un array vacío.
*/

//const esAlta = persona => persona.altura > 1.6
const esAlta = ({altura}) => altura > 1.6

var personasAltas = personas.filter(esAlta)
/*var personasAltas = personas.filter(function (persona){
	return persona.altura > 1.6
})*/

//console.log(personasAltas)

/* Reto: escribe el filtrado de personas bajas. 

const esBaja = ({altura}) => altura <= 1.5
var personasBajas = personas.filter(esBaja)
console.log(personasBajas) */