/*=================================================================
=            clase 21: Cómo funcionan las clases en JS            =
=================================================================*/

/* Las clases son funciones cuya sintaxis tiene dos componentes:

expresiones
declaraciones
En esta clase veremos el uso de this. Dentro de una función, el valor de this 
depende de cómo es llamada ésta.

*/

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

// tipo arrow function
Persona.prototype.Alto = () => this.altura > 1.8

var blanca = new Persona('Blanca','Niño',1.9)


