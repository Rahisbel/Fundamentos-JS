/*=================================================================
=            clase 21: Cómo funcionan las clases en JS            =
=================================================================*/

/* Las clases son funciones cuya sintaxis tiene dos componentes:

expresiones
declaraciones
En esta clase veremos el uso de this. Dentro de una función, el valor de this 
depende de cómo es llamada ésta.

*/
// todas las funciones tienen el atributo prototype
                 // funcion    , funcion
/*function heredaDe(prototipoHijo,prototipoPadre){ //parte de la clase 24
	var fn = function (){} 
	fn.prototype = prototipoPadre.prototype
	prototipoHijo.prototype = new fn
	prototipoHijo.prototype.constructor = prototipoHijo
	// si no pone esa linea, estará llamando al const de Padre
} //generar herencia */

function Persona(nombre, apellido,altura){
 	this.nombre = nombre
 	this.apellido = apellido
 	this.altura = altura
}

Persona.prototype.saludar = function(){
	console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
}

//var obj = new Persona('Liah', 'Mantilla',1.80)

/*Reto: agrega el atributo altura y la función soyAlto. 

Persona.prototype.soyAlto = function(){
	if(this.altura >= 1.8){
		console.log(`${this.nombre} es alto(a)`)
	}
	else{
		console.log(`${this.nombre} no es alto(a)`)
	}
}


var rah = new Persona('Rahisbel','Herrera',1.59)
var yei = new Persona('Yeison', 'Fuentes', 1.75)
var jesus = new Persona('Jesus','Herrera',1.93)

obj.saludar()
obj.soyAlto()
rah.soyAlto()
yei.soyAlto()
jesus.soyAlto()*/

/*==========================================================
=            clase 22: Modificando un prototipo            =
==========================================================*/

/* En esta clase veremos cómo se modifican las clases de herencias. 
JavaScript funciona con una estructura orientada a objetos y cada objeto 
tiene una propiedad privada que mantiene un enlace a otro objeto llamado prototipo.
*/

// es importante que las funciones esten ordenadas al inicio
/*Persona.prototype.Alto = function () {
	return this.altura > 1.8
}*/

// tipo arrow function:
Persona.prototype.Alto = () => this.altura > 1.8

var blanca = new Persona('Blanca','Niño',1.9) 


/*==============================================================================
=            clase 23: El contexto de las funciones ¿Quién es this?            =
==============================================================================*/

/* En esta clase explicamos por qué al introducir el arrow function salió un error. 
El error del contexto de this en javascrip es uno de los errores más comunes.
Recuerda que dentro de la arrow function, this está haciendo referencia al espacio 
global, a windows. 
*/

/*Persona.prototype.soyAlto = function () {
	return this.altura > 1.8
	// this cambia el contexto, por eso da false
	// this === window
}*/


/*=================================================================================
=            clase 24: La verdad oculta sobre las clases en JavaScript            =
=================================================================================*/

/* Los objetos en JavaScript son “contenedores” dinámicos de propiedades. 
Estos objetos poseen un enlace a un objeto prototipo. Cuando intentamos 
acceder a la propiedad de un objeto, la propiedad no sólo se busca en el 
propio objeto sino también en el prototipo del objeto, en el prototipo 
del prototipo, y así sucesivamente hasta que se encuentre una propiedad 
que coincida con el nombre o se alcance el final de la cadena de prototipos. 


¿Cómo hacer para que un prototipo herede de otro?
Así como tal JavaScript no soporta la herencia, porque no soporta las clases, 
no hay clases, hay prototipos, que son objetos, que le vamos agregando métodos, 
que reciben funciones, saben quien es this y saben como ejecutarlas.
*/

function Desarrollador(nombre,apellido){
	this.nombre = nombre
	this.apellido = apellido
}

//heredaDe(Desarrollador,Persona) // debe ir antes de la función


Desarrollador.prototype.saludar = function(){
	console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy Desarrollador/a`)
}


//var liah = new Desarrollador('Liah', 'Mantilla')
//liah.saludar()


/*=========================================
=            clase 25: Clases en JS       =
=========================================*/

/* Las clases de JavaScript son introducidas en el ECMAScript 2015
y son una mejora en la sintaxis sobre la herencia basada en prototipos de JavaScript.
La palabra clave extends se usa en declaraciones de clase o expresiones de clase para
crear una clase que es hija de otra clase.

El método constructor es un método especial para crear e inicializar un objeto creado 
a partir de una clase. 
*/


class Personaa {
	constructor(nombre,apellido,altura){
		this.nombre = nombre
		this.apellido = apellido
		this.altura = altura
	}

	saludar(fn){
		// var nombre = this.nombre
		// var apellido = this.apellido clase 26
		var {nombre, apellido} = this

		console.log(`Hola me llamo ${nombre} ${apellido}`)
		if(fn){ //clase 26
			fn(nombre,apellido,false)
		}	
	}

	soyAlto(){
		return this.altura > 1.8
	}
}

class Desarrolladorr extends Personaa{
	constructor(nombre,apellido, altura){
		super(nombre,apellido,altura) // constr del padre
	}

	saludar(fn){
		// var nombre = this.nombre
		// var apellido = this.apellido clase 26
		var {nombre, apellido} = this

		console.log(`Hola, me llamo ${nombre} ${apellido} y soy Desarrollador/a`)
		if(fn){ //clase 26
			fn(nombre,apellido,true)
		}
	}
}

//var liah = new Personaa('Liah','Mantilla',1.60)
//var rah = new Desarrollador('Rahisbel','Herrera',1.59)

/*============================================================
=            clase 26 : Funciones como parámetros            =
============================================================*/

/* En JavaScript, los parámetros de funciones son por defecto 
undefined. De todos modos, en algunas situaciones puede ser 
útil colocar un valor por defecto diferente que lo evalúe como verdadero. 
*/

function responderSaludo(nombre,apellido,esDev){
	console.log(`Buen día ${nombre} ${apellido}`)
	if(esDev){
		console.log('Ah mirá, no sabía que eras Desarrollador/a')
	}
}

var liah = new Personaa('Liah','Mantilla',1.60)
var rah = new Desarrolladorr('Rahisbel','Herrera',1.59)

liah.saludar()
rah.saludar(responderSaludo)