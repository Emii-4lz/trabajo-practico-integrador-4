// Tema 2: Diferencias entre tsc, tsx y node.
console.log("--- TSC, TSX Y NODE ---");

// Definición con sintaxis exclusiva de TypeScript (En este caso utilizando enum)
enum Materias {
    BigData = "BIG DATA",
    Tlp = "TALLER DE LENGUAJE DE PROGRAMACIÓN",
    BaseDeDatos = "BD"
}

const materiaActual: Materias = Materias.Tlp;
console.log(`Materia en curso: ${materiaActual}`);

/*
    Diferencias:
  1. NODE:
     Si se ejecuta: "node src/tema2.ts" se deberia devolver esto: 'ERR_UNSUPPORTED_TYPESCRIPT_SYNTAX'
     .

  2. TSX:
     Si se ejecuta: "npx tsx src/tema2.ts". Corre normal, interpreta el archivo .ts al vuelo manteniendo los tipos.

  3. TSC + NODE:
     Ejecutá primero: "npx tsc" y luego ejecutá "node dist/tema2.js". Funciona perfecto, porque 'tsc' ya lo convirtió a JavaScript plano que Node si puede leer.
*/

console.log("--- FIN ---");