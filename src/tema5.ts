// Tema 5: Interfaces y Type en TypeScript
console.log("--- INTERFACES Y TYPE ---");

// Interface: Define la estructura similar a la de un objeto con campos obligatorios y opcionales.
interface EstudianteIPF {
    legajo: number;
    nombre: string;
    carrera: string;
    email?: string;
}

const alumno1: EstudianteIPF = {
    legajo: 4021,
    nombre: "Emii Alonzo",
    carrera: "Desarrollo de Software Multiplataforma"
};

console.log("Estudiante:", alumno1);

// Type: Ideal para uniones, tipos primitivos, literales y estructuras personalizadas
type RolUsuario = "admin" | "estudiante" | "invitado";

type CuentaUsuario = {
    id: number;
    usuario: string;
    rol: RolUsuario;
};

const cuenta: CuentaUsuario = {
    id: 101,
    usuario: "R4Kn",
    rol: "estudiante"
};

console.log("Cuenta:", cuenta);

console.log("--- FIN ---");