//BOOLEAN
let muted: boolean = true;
muted = false;

//NUMEROS
let age = 6;
let numerador: number = 42;
let denominador: number = age;
let result = numerador / denominador;

//STRING
let nombre: string = 'Reynaldo';
let saludo = `Me llamo ${nombre}`;

//ARREGLOS
let people: string[] = [];
people = ['Carlos', 'Juan', 'Messi'];

let peopleAndNumbers: Array< string | number > = [];
peopleAndNumbers.push("Carlitos");
peopleAndNumbers.push(46);

//enum

enum Color {
  Rojo = 'Rojo',
  verde = 'Verde',
  Azul = 'Azul',
}

let colorFavorito: Color = Color.Azul;

//Any

let comodin: any = 'Joker';
comodin = { type: 'wildcard' };

//Object
let someObject: object = { type: 'worldofwarcraft' };