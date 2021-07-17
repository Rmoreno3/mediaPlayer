// Un objeto normal
// const zelda = {
//   name: 'zelda',
// };

// zelda.saludar = function() {
//   console.log(`Hola soy ${this.name}`);
// };

// zelda.saludar();

// const link = {
//   name: 'Link',
// };

// link.saludar = function() {
//   console.log(`Hola soy ${this.name}`);
// };

// link.saludar();

// Seamos mas eficientes

// function Hero (name) {
//   const hero = {
//     name: name,
//   }

//   hero.saludar = function() {
//     console.log(`Hola soy ${this.name}`);
//   };

//   return hero;
// };

// const zelda = Hero('Zelda');

// zelda.saludar();

// const link = Hero('Link');

// link.saludar();

// Aun podemos mejorar y evitar crear la funcion cada vez

// const heroMethods = {
//   saludar: function() {
//     console.log(`Hola soy ${this.name}`);
//   },
// }

// function Hero (name) {
//   const hero = {
//     name: name,
//   }

//   hero.saludar = heroMethods.saludar;

//   return hero;
// };

// const zelda = Hero('Zelda');

// zelda.saludar();

// const link = Hero('Link');

// link.saludar();

// Object.create 

// const heroMethods = {
//   saludar: function() {
//     console.log(`Hola soy ${this.name}`);
//   },
// }

// function Hero (name) {
//   const hero = Object.create(heroMethods);
//   hero.name = name;

//   return hero;
// };

// const zelda = Hero('Zelda');

// zelda.saludar();

// const link = Hero('Link');

// link.saludar();

// Los metodos de hero dentro de hero

// const heroMethods = {
//   saludar: function() {
//     console.log(`Hola soy ${this.name}`);
//   },
// }

// Hero.prototype.saludar = function() {
//   console.log(`Hola soy ${this.name}`);
// },


// function Hero (name) {
//   const hero = Object.create(Hero.prototype);
//   hero.name = name;

//   return hero;
// };


// const zelda = Hero('Zelda');

// zelda.saludar();

// const link = Hero('Link');

// link.saludar();

// // new es un atajo (azucar sintactica) para llevar Hero.prototype al objeto.



function Hero (name) {
  // const hero = Object.create(Hero.prototype);
  this.name = name;
};

Hero.prototype.saludar = function() {
  console.log(`Hola soy ${this.name}`);
};

const zelda = new Hero('Zelda');

zelda.saludar();

const link = new Hero('Link');

link.saludar();

const Reynaldo = new  Hero('Reynaldo');
Reynaldo.saludar();
console.log(zelda)

// console.log(`hasOwnProperty("name"):`, zelda.hasOwnProperty("name"));
// console.log(`hasOwnProperty("saludar"):`, Hero.hasOwnProperty("saludar"));

