// Tema 4: Funciones en TypeScript
console.log("--- FUNCIONES ---");

// Definicion de tipos de parámetros y tipo de retorno EXPLICITO
function sumar(a: number, b: number): number {
    return a + b;
}
console.log("Suma (10 + 20):", sumar(10, 20));

// Tipo de retorno 'void' (cuando no devuelve ningún valor, solo ejecuta una acción)
function mostrarAlerta(mensaje: string): void {
    console.log(`[ALERTA VOID]: ${mensaje}`);
}
mostrarAlerta("Ejecutando procedimiento...");

// Parámetro opcional (?), si no se envía el apellido, este será undefined pero la función se ejecutara sin problemas.
function formatearNombre(nombre: string, apellido?: string): string {
    if (apellido) {
        return `${nombre} ${apellido}`;
    }
    return nombre;
}

console.log("Usuario sin apellido:", formatearNombre("Fulano"));
console.log("Usuario con apellido:", formatearNombre("Fulano", "De Tal"));

// Parámetro por defecto (= valor)
function saludar(nombre: string, saludo: string = "Hola"): void {
    console.log(`${saludo}, ${nombre}!`);
}

saludar("Martín");
// Utiliza el saludo por defecto ("Hola")

saludar("Martín", "Buenas tardes");

console.log("--- FIN ---");