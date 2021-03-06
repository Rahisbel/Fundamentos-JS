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


/*=================================================
=            clase 12: Arrow functions            =
=================================================*/

/*En esta clase aprenderemos a utilizar Arrow Functions que permiten una nomenclatura 
más corta para escribir expresiones de funciones. Este tipo de funciones deben definirse 
antes de ser utilizadas.

Al escribir las Arrow Functions no es necesario escribir 
la palabra function, la palabra return, ni las llaves.*/

/*función anónima  
const esMayorDeEdad = function(persona){
	return persona.edad >= MAYORIA_DE_EDAD
}*/

//otra forma de escribir lo de arriba
// si lleva un sólo parametro, no es necesario los ()
//const MayorDeEdad = persona => persona.edad >= MAYORIA_DE_EDAD
const MayorDeEdad = ({edad}) => edad >= MAYORIA_DE_EDAD

function permitirAcceso(persona){
	if(!MayorDeEdad(persona)){
		console.log('Acceso denegado')
	}
}

/*RETO: escribir la funcion menor de edad con arrow function
y sólo retorne la negación de la llamada mayor de edad:

const MenorDeEdad = ({edad}) => edad < MAYORIA_DE_EDAD

function imprimirSiEsMenorDeEdad(persona){
	if(MenorDeEdad(persona)){
		console.log(`${persona.nombre} es menor de edad` )
	}
	else{
		console.log(`${persona.nombre} es mayor de edad` )
	}
} */


/*===========================================
=            clase 13: Ciclo for            =
===========================================*/

var liah = {
	nombre : 'Liah',
	apellido : 'Mantilla',
	edad : 5,
	peso: 35
}

//console.log(`Al inicio del año ${liah.nombre} pesa ${liah.peso} kg`)

/* function aumentarDePeso(persona){
		return persona.peso += 200
	}
*/

const INCREMENTO_PESO = 0.3 //0.2
const DIAS_DEL_ANO = 365 
const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar= persona => persona.peso -= INCREMENTO_PESO

for(var i = 1; i <= DIAS_DEL_ANO ; i++){
	 var random = Math.random()

	 if(random < 0.25){ // aumenta de peso
	 	aumentarDePeso(liah)
	 }
	 else if(random < 0.5){ // adelgazar
	 	adelgazar(liah)
	 }
}

//console.log(`Al final del año ${liah.nombre} pesa ${liah.peso.toFixed(1)} kg`)


/*=============================================
=            clase 14: Ciclo while            =
=============================================*/

/* En ocasiones nuestro código puede fallar por errores de syntaxis o errores lógicos.
En caso de que quieras verificar tu código, debes utilizar un debugger. 
El código se detiene cada vez que lee esta palabra.*/

const META = liah.peso - 3
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4 
var dias = 0

while(liah.peso > META){
	//debugger
	if(comeMucho()){ // aumenta
		aumentarDePeso(liah)
	}
	if(realizaDeporte){ // adelgaza
		adelgazar(liah)
	}
	dias +=1
}

//console.log(`pasaron ${dias} días hasta que ${liah.nombre} adelgazó 3kg`)

/*=================================================
=            clase 15 : Ciclo do while            =
=================================================*/

var contador = 0

const llueve = () => Math.random() < 0.25

do{

	contador ++

}while(!llueve())

/*RETO: imprimir una vez o n veces dependiendo del contador 

if(contador == 1){
	console.log(`Fui a ver si llovía ${contador} una vez`)
}
else{
	console.log(`Fui a ver si llovía ${contador} veces`)
}

*/

/*=============================================================
=            clase 16: Condicional múltiple Switch            =
=============================================================*/

/* Prompt, muestra un cuadro de mensaje que le pide al usuario que ingrese algúna información.
   Break, sirve para que el browser se salte un bucle.*/

var signo = prompt('¿Cuál es tu signo?')

switch (signo){
	case 'tauro':
		console.log('Durante esta jornada, permita que su fantasía se libere y se convierta en la fuente de su inspiración. De esta forma, podrá darle un nuevo orden a su vida.')
		break

	case 'geminis':
	case 'géminis':
		console.log('Si pretende obtener una rápida prosperidad material, sepa que dependerá de su excelente criterio intelectual y de su perseverancia en el trabajo.')	
		break

	case 'aries' :
		console.log('Será esencial para este día que empiece a controlar cada una de las emociones y así evitar que afecten de manera negativa su ánimo.')	
		break

	default :
		console.log('no válido')
		break	
}		

