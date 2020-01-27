/*=======================================================================
=            clase 27: ¿Cómo funciona el Asincronismo en JS?            =
=======================================================================*/

/* 
JavaScript sólo puede hacer una cosa a la vez, sin embargo; es capaz de delegar 
la ejecución de ciertas funciones a otros procesos. Este modelo de concurrencia 
se llama EventLoop.

JavaScript delega en el navegador ciertas tareas y les asocia funciones que 
deberán ser ejecutadas al ser completadas. Estas funciones se llaman callbacks, 
y una vez que el navegador ha regresado con la respuesta, el callback asociado 
pasa a la cola de tareas para ser ejecutado una vez que JavaScript haya terminado 
todas las instrucciones que están en la pila de ejecución.

Si se acumulan funciones en la cola de tareas y JavaScript se encuentra ejecutando 
procesos muy pesados, el EventLoop quedará bloqueado y esas funciones pudieran 
tardar demasiado en ejecutarse.
*/

/*=================================================================
=            clase 28: ¿Cómo funciona el tiempo en JS?            =
=================================================================*/

/* En principio, cualquier tarea que se haya delegado al navegador 
a través de un callback, deberá esperar hasta que todas las instrucciones 
del programa principal se hayan ejecutado. Por esta razón el tiempo de 
espera definido en funciones como setTimeout, no garantizan que el callback 
se ejecute en ese tiempo exactamente, sino en cualquier momento a partir de allí, 
sólo cuando la cola de tareas se haya vaciado. 
*/

/*===========================================
=            clase 29: Callbacks            =
===========================================*/

/* En esta clase aprenderemos que son los callbacks 
y usaremos una librería externa que se llama jQuery.
Un callback es una función que se pasa a otra función 
como un argumento. Esta función se invoca, después, 
dentro de la función externa para completar alguna acción. 
*/
const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
 
const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id',1)}`
const opts = { crossDomain:true } // indica que el request se hará en otra pág

// callback
const onPeopleResponse = function(person){
	console.log(`Hola, yo soy ${person.name}`)
}

//request
//$.get(`${API_URL}${PEOPLE_URL.replace(':id',1)}`,{crossDomain:true})

//$.get(lukeUrl,opts,onPeopleResponse)

/*===================================================
=            clase 30: Múltiples request            =
===================================================*/

/*function obtenerPersonaje(id){
	const url =`${API_URL}${PEOPLE_URL.replace(':id',id)}`
	$.get(url,opts,onPeopleResponse)
}*/



//no se sabe si el orden en el que llegue es igual al que se envió
//esto es asincronismo en su máximo esplendor
//obtenerPersonaje(1)
//obtenerPersonaje(2)
//obtenerPersonaje(3)

/*============================================================================
=            clase 31: Manejando el orden y el asincronismo en JS            =
============================================================================*/

/* Una manera de asegurar que se respete la secuencia en que hemos realizado múltiples 
tareas es utilizando callbacks, con lo que se ejecutará luego, en cada llamada. Lo 
importante es que el llamado al callback se haga a través de una función anónima. 
Sin embargo, al hacerlo de esta manera generamos una situación poco deseada llamada CallbackHell. */

/*function obtenerPersonaje(id,callback){
	//console.log(id)
	const url =`${API_URL}${PEOPLE_URL.replace(':id',id)}`
	$.get(url,opts,function(persona){
		console.log(`Hola, yo soy ${persona.name}`)
		if(callback){
			callback()
		}
	})
}

//al hacer esto se pierde el paralelismo de los request
// el infierno de los callbacks
obtenerPersonaje(1, function(){
	obtenerPersonaje(2, function(){
		obtenerPersonaje(3, function(){
			obtenerPersonaje(4)
		})
	})
})*/


/*=================================================================
=            clase 32: Manejo de errores con callbacks            =
=================================================================*/


/* Para solucionar el problema de quedarnos sin conexión, u otro error 
similar, en medio de una sucesión de callbacks utilizamos el método fail().*/

/*
function obtenerPersonaje(id,callback){
	//console.log(id)
	const url =`${API_URL}${PEOPLE_URL.replace(':id',id)}`
	$.get(url,opts,callback).fail(function(){
		console.log(`Sucedió un error. No se pudo obtener el personaje ${id}`)
	})
		
}


					//callbacks
obtenerPersonaje(1, function(personaje){
	console.log(`Hola, yo soy ${personaje.name}`)

	obtenerPersonaje(2, function(personaje){
		console.log(`Hola, yo soy ${personaje.name}`)

		obtenerPersonaje(3, function(personaje){
			console.log(`Hola, yo soy ${personaje.name}`)

			obtenerPersonaje(4, function(personaje){
				console.log(`Hola, yo soy ${personaje.name}`)
			})
		})
	})
})
*/

/*==========================================
=            clase 33: Promesas            =
==========================================*/


/* En esta clase veremos las promesas, que son valores que aun no conocemos. 
Las promesas tienen tres estados:

pending
fullfilled
rejected

Las promesas se invocan de la siguiente forma:

new Promise( ( resolve, reject ) => {
  // --- llamado asíncrono
  if( todoOK ) {
     // -- se ejecutó el llamado exitosamente
     resolve()
  } else {
     // -- hubo un error en el llamado
     reject()
  }
} ) */


function obtenerPersonaje(id){
	return new Promise((resolve, reject) => {
		const url =`${API_URL}${PEOPLE_URL.replace(':id',id)}`
		$.get(url,opts,function(personaje){
			resolve(personaje) // se ejecuta si el get es exitoso
		})
		.fail(()=>reject(id))
	})
}

function onError(id){
	console.log(`Sucedió un error al obtener el personaje ${id}`)
}

/*obtenerPersonaje(3)
	.then(function(personaje){
		console.log(`El personaje 3 es ${personaje.name}`)
	})
	.catch(onError)*/


/*======================================================
=            clase 34: Promesas encadenadas            =
======================================================*/
	
/* A diferencia de los callbacks en el CallbackHell, 
que terminan estando anidados unos dentro de otros, 
cuando se usan Promesas la ejecución de las llamadas no 
se hacen de manera anidada sino de manera encadenada, 
al mismo nivel una debajo de la otra, lo que hace que 
el código sea mucho más legible y mantenible. */

/*obtenerPersonaje(3)
	.then(personaje => {
		console.log(`El personaje 3 es ${personaje.name}`)
		return obtenerPersonaje(4)
	})
	.then(personaje => {
		console.log(`El personaje 4 es ${personaje.name}`)
		return obtenerPersonaje(5)
	})
	.then(personaje => {
		console.log(`El personaje 5 es ${personaje.name}`)
		return obtenerPersonaje(6)
	})
	.then(personaje => {
		console.log(`El personaje 6 es ${personaje.name}`)
	})
	.catch(onError) // es el mismo para todas las promesas
		
*/


/*================================================================
=            clase 35: Múltiples promesas en paralelo            =
================================================================*/
		
/* Para hacer el llamado a múltiples promesas, nos apoyamos en un 
array de ids con el que luego construimos otro arreglo de Promesas, 
que pasaremos como parámetro a Promise.all( arregloDePromesas ), 
con las promesas podemos encadenar llamadas en paralelo, algo que 
no es posible usando callbacks. */	


var ids = [1,2,3,4,5,6,7]

/*var promesas =  ids.map(function(id){
	return obtenerPersonaje(id)
})*/				

var promesas =  ids.map(id => obtenerPersonaje(id))	
Promise
	.all(promesas)
	.then(personajes => console.log(personajes))
	.catch(onError)


