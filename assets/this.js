// function Person(name, lastName, age, size) {
//   this.name = name;
//   this.lastName = lastName;
//   this.age = age;
//   this.size = size;
// }

// Person.prototype.saludar = function () {
//   console.log(`My name is ${this.name} ${this.lastName} i have ${this.age} and my size is ${this.size}`);
// }

// const Mathias = new Person('Mathias', 'Gori', 3, 5);

// Mathias.saludar();

function saludar() {
  console.log(`Hola me llamo ${this.name} ${this.lastName}`)
}

const rey = {
  name: "Reynaldo",
  lastName: "Moreno"
}

// const datos = [800, "Norte"];

// saludar.call(rey);

function caminar (metros, direccion) {
  console.log(`${this.name} caminara ${metros}mts hacia el ${direccion}`)
}

caminar.call(rey, 500, "Sur");

caminar.apply(rey, [800, "Norte"]);


