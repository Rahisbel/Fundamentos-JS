/*===============================================
=            clase 10: condicionales            =
===============================================*/

/* En esta clase empezaremos a trabajar con estructuras de control, 
éstas nos permiten decidir el flujo de nuestro código.

Empezaremos con los condicionales. Los condicionales nos permiten decidir si un código 
se ejecuta o no. También introducimos un nuevo tipo de datos primitivos: el booleano, 
que determina si un valor es falso o verdadero. 
Mediante un condicional (if) decidiremos si se ejecuta una parte de nuestro código cuando
se cumpla o no cierta condición. */

var pacho = {
	nombre: 'Pacho',
	apellido : 'Ramirez',
	edad : 30,
	ingeniero : true,
	cocinero: false,
	cantante: true,
	dj : false,
	guitarrista : false,
	drone : true

}

var blanca = {
	nombre : 'blanca',
	edad : 15
}

function imprimirProfesiones(persona){
	console.log(`${persona.nombre} es:`)

	if(persona.ingeniero === true){
		console.log('Ingeniero')
	}

	if(persona.cocinero){
		console.log('Cocinero')
	}

	if(persona.cantante){
		console.log('Cantante')
	}

	if(persona.dj){
		console.log('Dj')
	}
	else{
		console.log('No es Dj')
	}

	if(persona.guitarrista){
		console.log('Guitarrista')
	}

	if(persona.drone){
		console.log('Piloto de drone')
	}
}

//imprimirProfesiones(pacho)

/*RETO: Imprimir si es mayor o no de edad

function imprimirSiEsMayorDeEdad(persona){

	if(persona.edad >= 18){
		console.log(persona.nombre+' es mayor de edad')
	}
	else{
		console.log(persona.nombre+' no es mayor de edad')
	}

}

imprimirSiEsMayorDeEdad(pacho)
imprimirSiEsMayorDeEdad(blanca) */

/*================================================================
=            clase 11: Funciones que retornan valores            =
================================================================*/

const MAYORIA_DE_EDAD = 18 //buena práctica escribir asi las const

function esMayorDeEdad(persona){
	return persona.edad >= MAYORIA_DE_EDAD
}

function imprimirSiEsMayorDeEdad(persona){
	if(esMayorDeEdad(persona)){
		console.log(`${persona.nombre} es mayor de edad` )
	}
	else{
		console.log(`${persona.nombre} es menor de edad` )
	}
}


