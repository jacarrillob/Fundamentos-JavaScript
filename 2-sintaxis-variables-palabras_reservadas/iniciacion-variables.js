
// Variable VAR
var variableVar;
var a = 1;
console.log(a);
a = 4;
console.log(a);

// Variable LET
let variableLet;
let b = 3;
console.log(b);

b = 5;
console.log(b);

// Constante CONST
const variableConst = "Soy una constante";
console.log(variableConst);
// variableConst = "Nuevo valor"; // Aquí da error

// Diferencia VAR y LET
var textoVar = "La podemos usar en todo el código (VAR)";
let textoLet = "La podemos usar en unicamente en el bloque donde es declarada (LET)";

console.log(textoVar);
console.log(textoLet);

for (var i = 0; i < 3; i++) {
    textoVar = "Soy la variable VAR"; 
}
console.log(textoVar);

for (var i = 0; i < 3; i++) {
    textoLet = "Soy la variable LET"; 
}
console.log(textoLet);

/////// tipo de dato
console.log(typeof textoVar);