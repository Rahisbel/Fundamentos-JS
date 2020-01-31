/*=====================================================================
=            var, let y const: las diferencias entre ellos            =
=====================================================================*/

/* 
““var”” es la manera más antigua de declarar variables. No es muy estricta
 en cuanto al alcance, ya que al declarar variables de esta forma, dichas 
 variables podrán ser accedidas, e incluso modificaddas, tanto dentro como 
 fuera de los bloques internos en una función.

Con ““let”” por otra parte, el alcance se reduce al bloque (las llaves) en 
el cual la variable fue declarada. Fuera de este bloque la variable no existe. 
Una vez declarada la variable con let, no se puede volver a declarar con en 
ninguna otra parte de la función.

““const”” al igual que ““let”” se define en el contexto o alcance de un 
bloque, a diferencia de let y var, las varibles definidas como constantes 
(const), ya no podrán ser modificadas ni declaradas nuevamente, en ninguna 
otra parte de la función o el contexto en el que ya existen.

La recomendación es reducir siempre al mínimo el alcance de nuestras variables, 
por lo que se debe usar let en lugar de var mientras sea posible.

*/

var liah ={
	nombre: 'liah',
	apellido: 'mantilla',
	edad:5
}

function esMayorDeEdad(persona){
	if(persona.edad >= 18){
		var mensaje = 'es mayor de edad' 
	}
	else{
		var mensaje = 'es menor de edad'
	}
	console.log(mensaje) //si es let, lanzará error ya que se limita al bloque
}

//esMayorDeEdad(liah)

/*for(var i = 0 ; i<10 ; i++){
	console.log(i)
}*/

// si i = var, imprimirá 10, sino dará error porque let reduce el alcance de la variable, sólo sirve dentro del ciclo
//console.log(`Terminó el for, el valor de i es:${i}`) 

// es mejor trabajar con let antes que var cuando se necesite reasignar, si  no es necesario entonces usar const
//con esto evitaremos bugs 
// tratar de usar const antes que let y let antes que var. 

/*===================================================
=            ¿Hace cuantos días naciste?            =
===================================================*/

/*
Con variables de tipo Date, se pueden realizar operaciones 
de suma y resta similares a las que se realizan con números. 
El resultado que se obtiene está en milisegundos, por lo que 
luego hay que hacer algunas operaciones adicionales para 
llevarlos a días, meses o años según queramos. También aplica 
para Horas, Minutos, Segundos y Milisegundos.
*/

function diasEntreFechas(fecha1,fecha2){
	const unDia = 1000 * 60 * 60 * 24
	const diferencia = Math.abs(fecha1 - fecha2)

	return Math.floor(diferencia/unDia)
}

const hoy = new Date()
const nacimiento = new Date(1997,3,23)


/*============================================
=            Funciones Recursivas            =
============================================*/

/* La recursividad es un concepto muy importante 
en cualquier lenguaje de programación. Una función 
recursiva es básicamente aquella que se llama (o se ejecuta) 
a sí misma de forma controlada, hasta que sucede una condición base. 
*/

function divisionEntera(dividendo,divisor){
	if(dividendo < divisor){
		return 0
	}

	return 1 + divisionEntera(dividendo-divisor,divisor)

}


/*========================================================
=            Memorización : Ahorrando cómputo            =
========================================================*/

/* 
La memoización es una técnica de programación que nos permite 
ahorrar cómputo o procesamiento en JavaScript, al ir almacenando 
el resultado invariable de una función para que no sea necesario 
volver a ejecutar todas las instrucciones de nuevo, cuando se vuelva
a llamar con los mismos parámetros. Es similar a usar memoria cache.
*/


function factorial(n){
	if(!this.cache){
		this.cache = {}
	}

	//debugger
	if(this.cache[n]){
		return this.cache[n]
	}

	if(n==1){ // caso base
		return 1
	}

	this.cache[n] = n * factorial(n-1)
	//debugger
	return this.cache[n]

}