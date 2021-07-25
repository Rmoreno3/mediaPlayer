//BOOLEAN
var muted = true;
muted = false;
//NUMEROS
var age = 6;
var numerador = 42;
var denominador = age;
var result = numerador / denominador;
//STRING
var nombre = 'Reynaldo';
var saludo = "Me llamo " + nombre;
//ARREGLOS
var people = [];
people = ['Carlos', 'Juan', 'Messi'];
var peopleAndNumbers = [];
peopleAndNumbers.push("Carlitos");
peopleAndNumbers.push(46);
//enum
var Color;
(function (Color) {
    Color["Rojo"] = "Rojo";
    Color["verde"] = "Verde";
    Color["Azul"] = "Azul";
})(Color || (Color = {}));
var colorFavorito = Color.Azul;
//Any
var comodin = 'Joker';
comodin = { type: 'wildcard' };
//Object
var someObject = { type: 'worldofwarcraft' };
