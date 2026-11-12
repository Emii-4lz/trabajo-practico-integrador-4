// Tema 3: Tipos básicos, Arrays, Tipos Unión y el peligro de usar 'any'
console.log("--- TIPOS BÁSICOS ---");

// Tipos primitivos: string, number y boolean (con tipado explícito e inferencia)
let materia: string = "Desarrollo de Software Multiplataforma";
let anioCursada = 2026;
let esObligatorio: boolean = true;

console.log(`Primitivos -> Materia: ${materia}, Año: ${anioCursada}, ¿Obligatorio?: ${esObligatorio}`);

// Declaración de un array con tipo:
let tecnologias: string[] = ["TypeScript", "JavaScript", "Node.js"];
console.log("Array de tecnologías:", tecnologias);

// Tipo unión:
let identificadorUnico: string | number;
identificadorUnico = "IPF-2026";
console.log("Identificador (string):", identificadorUnico);

identificadorUnico = 5040;
console.log("Identificador (number):", identificadorUnico);

// Por qué se recomienda evitar 'any':
let datoFlexible: any = "Puedo ser un texto";
console.log("Dato con any (inicial):", datoFlexible);

datoFlexible = 999;
console.log("Dato con any (cambiado a número sin restricciones):", datoFlexible);
// Se pierde la verificación de tipos, lo que hace del uso de esta variable algo no tan seguro.

console.log("--- FIN ---");