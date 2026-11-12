// Tema 1: ¿Qué es TypeScript?
console.log("--- INTRODUCCIÓN A TYPESCRIPT ---");

// Demostración de tipado estático opcional sobre JavaScript: Se define explicitamente el tipo de dato a las variables, cosa que en JavaScript no se puede hacer.
let nombre: string = "Emi";
let edad: number = 18;
let activo: boolean = true;

console.log(`Hola me llamo ${nombre}, tengo ${edad} años.`);
console.log(activo)


// Detección temprana de errores en tiempo de desarrollo: Si se descomenta la siguiente linea:
// (CTRL + K y CTRL + U)

// edad = "Texto erróneo";

// TypeScript notifica en la sección de "problemas" abajo lo siguiente: 
// [Error] El tipo 'string' no se puede asignar al tipo 'number'.

// Superconjunto de JavaScript: Todo código de JavaScript válido es código TypeScript válido
let curso: string = "Desarrollo de Software Multiplataforma";
console.log(`Curso actual: ${curso.toUpperCase()}`);

console.log("--- FIN ---");