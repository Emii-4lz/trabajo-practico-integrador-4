# Trabajo Práctico Integrador: Investigación en TypeScript
## Emiliano Alonzo - Desarrollo

#### Tema 1 - TypeScript.
##### ● ¿Qué es TypeScript y quién lo desarrolla?  

    TypeScript es un superconjunto de JavaScript desarrollado por Microsoft el cual integra caracteristicas que JavaScript original no tiene, la mas destacable siendo la detección de erorres temprana y el tipado estático opcional.  
    (Fuentes: Material del classrom y "codica.la")

##### ● ¿Qué diferencias tiene con JavaScript?  

    JavaScript es un lenguaje de programación interpretado y dinámico, mientras que TypeScript es un superconjunto creado a partir de este. A diferencia de JS, TypeScript posee caracteristicas adicionales como el tipado estático, la deteccion de erorres, mejoras en el autocompletado, etc.  
    (Fuentes: Material del classroom y "profile.es")

##### ● ¿Qué ventajas ofrece?  

    Los beneficios principales de TypeScript son:  
    * Se detectan errores en el codigo mientras se escribe.  
    * El autocompletado es mejor.  
    * Hace el codigo mas facil de manejar y depurar.  
    (Fuente: Material del classroom)  


##### ● ¿Cuál es su versión actual?  
    Mi versión actual de TypeScript es 7.0.2  

    
#### Tema 2 - Inicializacion de un proyecto.  
##### ● ¿Cómo se instala TypeScript en un proyecto?  
    Para descargar TypeScript es necesario poner en la terminal del Visual Studio Code el comando "npm install -d typescript @types/node@<version que tengas de Node> tsx".  
    (Fuente: Material del classroom)  
    // Para ver la version de Node, se ejecuta "node -v"  


##### ● ¿Qué hace el comando tsc?  
     El comando tsc es el compilador el cual al ejecutarlo sin argumentos, va a estar fijar en el archivo "tsconfig.js" y ver cuales archivos/carpetas se encuentran dentro de src. transpilando cada uno de ellos a un archivo de tipo js en la carpeta "outDir".  
      Ahora, si este se ejecuta con un archivo, ej: "npx tsc app.ts", va a ignorar el archivo de configuracion y procedera a transpilar el archivo especificado y dejar el resultado dentro de la misma ruta.  
    (Fuente: Material del classroom)  

##### ● ¿Qué diferencia hay entre ejecutar un archivo con tsc, tsx y node?
    Ejecutar un archivo con "tsc" va a realizar la conversión de un archivo TypeScript a JavaScript, y dejara el .js en la misma carpeta en la que esta el .ts.  
    Ejecutar un archivo con "tsx" permite mantener tipos especiales/especificos de TypeScript, similar a como Node ejecuta archivos .js.  
    Ejecutar un archivo con "node", si bien la sintaxis de JavaScript va a ser ejecutada de forma normal, los tipos de TypeScript van a soltar error 'ERR_UNSUPPORTED_TYPESCRIPT_SYNTAX'.  
    (Fuentes: Material del classroom, pruebas locales y "blog.logrocket.com")  

#### Tema 3 - Tipos básicos.
##### ● ¿Qué son los tipos string, number y boolean?  
    El tipo "string" es una cadena de texto, generalmente definida como 'let mi_string: string = "Ejemplo"' o directamente 'let mi_string = "Ejemplo"', TypeScript puede asumir en base al valor el tipo de dato.  
    El tipo "number" opera con números, poner texto dentro de una variable de tipo number devolvera un error. Se puede definir 'let mi_number: number = 123' o 'let mi_number = 123'.  
    El tipo "boolean" solo puede tener uno de dos valores, "true" o "false", poner cualquier otra cosa devolvera un error. Se define 'let mi_booleano: boolean = true/false' o 'let mi_booleano = true/false'.  
    (Fuente: Material del classroom)  
    

##### ● ¿Cómo se declara un array con tipo?  
    Para declarar un array con tipo, se debe poner el tipo de dato que quiero que el array contenga, ej: 'let mi_array = string[] = ["ejemplo1", "ejemplo2"];'.  
    (Fuente: Material del classroom)  


##### ● ¿Qué es un tipo unión?  

    Un tipo unión permite que una variable tenga uno u otro tipo de dato, permitiendo reasignar un valor de diferente tipo, ej: 'let mi_union: string | number = "abc";  
    mi_union = 123'.  
    (Fuente: Material del classroom)  

##### ● ¿Por qué se recomienda evitar any?  
    Es recomendable evitar el uso de any, ya que desactiva la verificación de tipos para la variable a la cual fue asignada, lo que anula los beneficios que tiene TypeScript como por ejemplo la detección de errores temprana.  
    (Fuente: Material del classroom y "dev.to")  


#### Tema 4 - Funciones.
##### ● ¿Cómo se indican los tipos de los parámetros?  
    El tipo de los parametros se indican en la misma linea en la cual se define la función, ej: 'function sumar(a: number, b: number): number {}'  
    (Fuente: Material del classroom)   


##### ● ¿Cómo se indica el tipo de retorno?  
    El tipo de retorno dependiendo de cual sea, se define o en la ultima linea de la función, o en la primera. Los tipos de retorno son el "explicito". Ej: function ejemplo(nombre: string):string { return `hola soy ${nombre}` }  
    Y "void", el cual no devuelve nada, ej: function ejemplo(nombre: string): void { console.log(`Hola soy ${nombre}`)}.  



##### ● ¿Qué es un parámetro opcional?  
    Un parámetro es lo que el nombre mismo da a entender, un parametro de una función el cual es opcional para su ejecución, lo que significa que este puede ser undefined o null sin que la función suelte un error. Es representado con un "?" justo despues del nombre del parametro y antes del tipo, ej: function ejemplo(obligatorio: string, opcional?: string {}).  
    (Fuente: "convex.dev")  
    

##### ● ¿Qué es un parámetro por defecto?  
    Un parametro por defecto es un precisamente un parametro que sera utilizado si la función no recibe un valor para dicho parametro, es definido junto al parámetro. Ej: function ejemplo(nombre: string, apellido: string = "De tal"): void {}.  
    (Fuente: material del classroom)  



#### Tema 5 - Interfaz y type.
##### ● ¿Qué es una interfaz y para qué sirve?  
        Una interfaz es una herramienta que permite armar una estructura similar a la de un objeto (clave: valor) que pueden ser implementadas despues mediante clases, se usa para indicar que campos son obligatorios dentro de un objeto.  
        (Fuente: "luisllamas.es")  

##### ● ¿Qué es un type?  
    Un type es una etiqueta que permite especificar qué valores estan permitidos ingresar/asignar a una variable o campo.  
    (Fuente: "blog.logrocket.com")  


##### ● ¿Cómo se declara una propiedad opcional?  
    Para declarar una propiedad opcional, se pone un signo de pregunta (?) despues del nombre de la variable/parametro. Ej: "edad?"  
    (Fuente: Material del classroom)  


##### ● ¿Cuándo conviene usar cada uno?  
    Conviene mas usar 'interface' cuando se trabaje con objetos, clases y se quieran implementar intersecciones.  
    Conviene mas usar 'type' cuando se quiera implementar intersecciones, uniones, alias primitivos, etc.  
    (Fuente: Material del classroom)  


#### Tema 6 - Enum y tipos literales.  
##### ● ¿Qué es un enum?  
    Un enum es una caracteristica especial que permite crear un conjunto de variables/constantes relacionadas entre si, ej: dias, colores, estados.  
    (Fuente: "typescriptlang.org")  

##### ● ¿Qué es un tipo literal?  
    Un tipo literal es otra caracteristica especial, que permite especificar el tipo de valor que una variable o parametro puede aceptar.  
    (Fuente: "typescriptlang.org")  

##### ● ¿En qué se parecen y en qué se diferencian?  
    Los enum y los tipos literales se parecen en el sentido de que ambos restringen los valores a un conjunto fijo con valores predeterminados, ambos ofreciendo autocompletado con la coincidencia mas cercana y el error que devuelven si se ingresa un valor fuera de los establecidos.  
    Ahora, sus diferencias se encuentran a la hora de compilar, ya que los tipos literales no son compilados y por ende desaparecen en el codigo JavaScript, cosa que a los enum no les sucede (son transpilados a lenguaje JavaScript, pero no desaparecen).  
    (Fuente: "typescriptlang.org")  

##### ● ¿En qué situaciones se puede usar cada uno?  
    Es recomendable usar enum cuando se quiere trabajar con un objeto que se mantendra en el codigo de JavaScript. Si se planea sacarle el maximo potencial al tipado especial de TypeScript, es mejor usar los tipos literales.  
    (Fuente: "typescriptlang.org")  

## Fin.
