# Mi_JavaScript
Información de Interes acerca de **JavaScript**

> JavaScript es un Lenguaje de programación interpretado, orientado a objetos, débilmente tipado y dinámico que añade dinamismo e interactividad a una página Web.

# Creando proyecto en Node.js
Inicializamos un uevo proyecto
`npm init`

Ejecutar archivo
`node archivo.js`

Ejecitar scripts
`npm run <nombrescript>
npm rEjemplo: npm run start`

- **¿Qué es una variable y para que sirve?**

*Una Variable es un espacio en memoria donde podemos guardar información dependiendo de los tipos y estructuras de datos que soporte el lenguaje, una vez guardada podemos acudir a dicha variable a gtravés del nombre que se le haya asignado.*

- **¿Cuál es la diferencia entre declarar e inicializar una variable?**

*Declarar una variable es cuando le decimos a JavaScript que vamos a crear una variable con tal nombre. Mientras que inicializar es asignarle un valor a es variable.*

**Declarar variable:**

`let name;`
`const apellido;`

**Inicializar variable:**

`let name = "Pepito";`
`const apellido = "Perez";`

- **¿Cuál operador me permite sumar o concatenar?**

*El operador que nos permite sumar o concatenar es **+**. Este operador permite sumar números cuando los usamos con números. Pero cuando lo usamos con strings, lo que hace es unir o concatenar ambos strings.*

## Funciones

- ¿Qué es una función?
Las funciones nos permiten guardar bloques de códio para reutilizarlos y ejecutarlos en el futuro.

- ¿Cuándo me sirve usar una función en mi código?

Nos sirve cuando tenemos variables o bloques de código muy parecidos (con cambios que podrían ser parámetros y argumentos) que podemos encapsular para reutilizar más de una vez en el futuro. También nos sirve para ordenar y mejorar la legibilidad de nuestro código.

- ¿Cuál es la diferencia entre parámetros y argumentos de una función?

Las funciones reciben parámetros cuando las creamos. Y les enviamos argumentos cuando las ejecutamos.

## Condicionales

- ¿Qué es un condicional?

Son la forma en que ejecutamos un bloque de código u otro dependiendo de alguna condición o validación.

- ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?

IF (else y else if), Switch. El codicional if (con else y else if) nos permite hacer validaciones completamente distintas en cada validación o condional. En cambio, en el switch todos los cases se comparan con la misma variable o condición que definimos en el switch.

- ¿Puedo combinar funciones y condicionales?

Sí. Las funciones pueden encapsular cualquier bloque de código, incluyendo condicionales.


## Listas

- ¿Qué es un array?

Es una lista ordenada de elementos.

```
const array = [1,"José", true, false, "Pera"];
```
- ¿Que es un objeto?

Es una lista de elementos PERO cada elemento tiene un nombre clave.
```js
const obj = {
		name: "José",
		age: 30,
		deportesFavoritos: ["Futbol", "Ciclismo", "Caminar"]
};
```

- ¿Cuándo es mejor usar objetos o arrays?

**Arrays **cuando lo que haremos en un elemento es lo mismo que en todos los demás (la regla se puede incumplir). Mientras que un  **Objeto** cuando los nombres de cada elemento son importantes para nuestro algoritmo.

- ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?

Sí. Los arrays pueden guardar objetos. Y los objetos pueden guardar arrays entre sus propiedades.


------------

***Ejemplo de función que recibe cualquier array como parámetro e impime su primer valor.***
```js
function imprimirPrimerElementoArray(array) {
    console.log(array[0]);
}
imprimirPrimerElementoArray(["Claudia", "Luz", "Maria"]);
Claudia
```
***Ejemplo de función que recibe cualquier array como parámetro e impime todos sus elementos uno por uno.***

```js
function imprimirArrayLista(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

imprimirArrayLista(["Claudia", "Luz", "Maria"]);
Claudia
Luz
Maria
undefined
```
***Ejemplo de función que recibe cualquier objeto como parámetro e impime todos sus elementos uno por uno.***

```js
function imprimirArrayLista(obj) { 
    const array = Object.values(obj);
	for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

const obj = {
		name: "José",
		age: 30,
		deportesFavoritos: ["Futbol", "Ciclismo", "Caminar"]
};

imprimirObjetoLista(obj);
José
30
> ['Futbol', 'Ciclismo', 'Caminar']
undefined
```