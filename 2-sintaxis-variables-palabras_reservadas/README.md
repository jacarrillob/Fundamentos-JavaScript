# Notación en JavaScript
`; `  ---> Sirve para delimitar el final de una línea, en la actualidad el `;` se puede omitir pero por buenas prácticas es mejor utilizarlos.
```js
// Ejemplo
let miVariable = 5;
```

`. `  ---> Se utiliza en los objetos para acceder a los atributos. 
```js
// Ejemplo
miObjeto.value;
```

`[] `  ---> Se utilizan para listas, arreglos o arrays y para acceder a un valor dentro de la lista o el arreglo. 
```js
// Ejemplo
const arr = [1,2,3,4,5];      console.log(arr[2]);
```

`()`   ---> Se utilizan para funciones. 
```js 
// Ejemplo
function saludo () {
// Se escribe la función
}
```

`{}`   ---> Se utilizan para objetos (delimitar el objeto), funciones y estructuras de control.

```js
// Ejemplo
const object = {
a: "Info",
B: 3,
}
```


# Listas 
También lconocidas como array o arreglo, es un conjunto de variables puestas en orden.
```js
const lista = [1,true,"Pera",null,undefined];
const lista2 = new Array(1,true,"Pera",null,undefined, 5);
const lista3 = new Array(3);
lista3[0] = "Soy elemento 0";
const lista4 = [1, "Manzana", lista, lista2, lista3];

console.log(lista);
console.log(lista2);
console.log(lista3);
console.log(lista4);
```

# Objetos
Son representaciones de objetos de la vida real, ejemplo, carro
```js
const carro = {
    'cantidad-puertas': 4,
    color: "Rojo",
    modelo: "XD",
    year: 2022,
    marca: "BMW",
    tipo: "Deportivo",
    otros: ["Modelo1","Modelo 2","Modelo 3"],
    accesorios: {
        silla: false,
        tapetes: true,
        llanta: true
    }
}

carro.cilindraje = "2000cc"

console.log(carro);
console.log(carro.accesorios);
console.log(carro.marca);
```
# Fechas
-- Librerias de apoyo fechas: **Moment.js**
```js
const ahora = new Date();

console.log(ahora);

const fecha_milis = new Date(10);
console.log(fecha_milis);

const fecha_cadena = new Date("october 13 1991");
console.log(fecha_cadena);

const fecha_valores = new Date(2022, 0, 12);
console.log(fecha_valores);

const dia = ahora.getDate();
const mes = ahora.getMonth() + 1;
const year = ahora.getFullYear();

console.log(dia);
console.log(mes);
console.log(year);
```