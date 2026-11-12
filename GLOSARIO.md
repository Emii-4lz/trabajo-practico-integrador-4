### Glosario

##### 1. Superconjunto:  
###### "Conjunto que contiene a todos los elementos de otro conjunto más pequeño."  
###### **Ejemplo:** -

##### 2. Tipado estático opcional:
###### "Enfoque que permite al desarrollador decidir si desea declarar y verificar los tipos de datos antes de ejecutar el código."
###### **Ejemplo:** `let edad: number = 25;`.

##### 3. NPX:
###### "Herramienta para ejecutar paquetes de Node directamente sin necesidad de instalarlos de forma global. Sus siglas significan 'Node Package eXecutor'."
###### **Ejemplo:** `npx tsc`.

##### 4. Void:
###### "Ausencia de un valor de retorno en una función."
###### **Ejemplo:** `function saludar(): void { console.log("Hola"); }`

##### 5. `TSC` (TypeScript Compiler):
###### "El compilador oficial de TypeScript que traduce los archivos `.ts` a código JavaScript plano."
###### **Ejemplo:** Ejecutar `npx tsc` en la terminal para compilar el proyecto.

##### 6. `tsconfig.json`:
###### "Archivo de configuración que define las reglas, directorios de entrada y salida, y opciones estrictas de un proyecto TypeScript."
###### **Ejemplo:** Indicar la carpeta de destino con `"outDir": "./dist"`.

##### 7. Tipo Unión (Union Types):
###### "Característica que permite a una variable aceptar más de un tipo de dato usando el operador `|`."
###### **Ejemplo:** `let id: string | number = "ABC-1";` (puede recibir texto o números).

##### 8. `any`:
###### "Tipo de dato que desactiva la verificación de tipos de TypeScript para esa variable, anulando la detección de errores."
###### **Ejemplo:** `let dato: any = "texto"; dato = 100;` (permite cambiar de tipo sin chistar).

##### 9. Interfaz (Interface):
###### "Estructura que define de forma obligatoria las claves y tipos que debe poseer un objeto."
###### **Ejemplo:** `interface Alumno { legajo: number; nombre: string; }`

##### 10. Enum (Enumeración):
###### "Estructura que permite declarar un conjunto de constantes con nombre relacionadas entre sí."
###### **Ejemplo:** `enum Estado { Activo, Inactivo }`