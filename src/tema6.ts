// Tema 6: Enums y Tipos Literales
console.log("--- ENUMS Y TIPOS LITERALES ---");

// Enum: Conjunto de constantes relacionadas.
enum NivelPrioridad {
    Baja = "BAJA",
    Media = "MEDIA",
    Alta = "ALTA",
}

let prioridadTarea: NivelPrioridad = NivelPrioridad.Alta;
console.log("Nivel de prioridad:", prioridadTarea);

// Tipo Literal: Restringe el valor a opciones exactas (Esto deberia desaparecer al ejecutar "npx tsc src/tema6.ts").
type ModoPantalla = "claro" | "oscuro" | "automatico";

let modoActual: ModoPantalla = "oscuro";
console.log("Modo de pantalla:", modoActual);
// En teoria, en el archivo JS, el type desaparece. Si no hay nada arriba, entonces efectivamente desapareció.

// Nota: Tanto los enums como los tipos literales ofrecen autocompletado y devuelven errores de compilación si intentás asignar un valor fuera de su conjunto definido.
// Ejemplo inválido (comentado para evitar errores):

// let pruebaError: ModoPantalla = "verde"; 

console.log("--- FIN ---");