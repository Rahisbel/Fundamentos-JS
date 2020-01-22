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

$.get(lukeUrl,opts,onPeopleResponse)