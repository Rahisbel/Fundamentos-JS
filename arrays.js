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