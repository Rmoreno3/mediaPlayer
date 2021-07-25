//PARAMETROS TIPADOS
//Ts nos permite ser especificos indicando el tipo de variable
function suma(a: number, b: number) {
  return a + b;
};

const add = suma(2, 3);
//Si invocamos esta funcion pasando un argumento que no sea un numero nos dara error
// const adds = suma(1, "pepe");
console.log(add);

//FUNCIONES QUE NO RETORNAN
function saludo() {
  console.log("Hola que tal");
}

//Con Ts
function saludito():void {
  console.log("Hola que tal");
}

//FUNCIONES QUE RETORNAN UN VALOR
function sumar(a: number, b: number): number {
  return a + b;
}

//Mal
// function sumar (a: number, b: number): number {
//   return 'Hola Mundo'
// }

//FUNCIONES QUE RETORNAN OTRA FUNCION
function createAdder(a:number): (b:number) => number { 
  return  function(b:number) {
    return b + a;
  }
}

//PARAMETROS OPCIONALES Y PREDETERMINADOS
function fullName(firstName:string, lastName?:string): string {
  return firstName + " " + lastName;
}

//VALORES POR DEFECTO
// function fullName(firstName:string, lastName:string = 'Rey') {
//   return firstName + " " + lastName;
// }