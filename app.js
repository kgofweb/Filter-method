let products = [
   { id: 1, name: 'PC', price: 1000, description: 'PC HP 1T 16GB RAM' },
   { id: 2, name: 'Voiture', price: 800, description: 'Astion Villa' },
   { id: 3, name: 'Balle de tenis', price: 15, description: 'Verte pour terrain gazon' }
]

const deleteProduct = (name) => {
   products = products.filter(product => product.name !== name);
}

deleteProduct('Voiture');
// console.log(products);

// Find Method
const numbers = [5, 12, 8, 130, 44];

const found = numbers.find(number => {
   return number > 13;
});

console.log(found);

const people = [
   { name: 'Jonh Doe', occupation: 'Front end Developer' },
   { name: 'Marie Smith', occupation: 'Full statck Developer' },
   { name: 'Kevin McTomminy', occupation: 'Engire Software' },
   { name: 'Mervy Dev', occupation: 'Full statck JavaScript' },
   { name: 'Brad Traversy', occupation: 'Full statck developer' }
]

const foundPeople = people.find(person => person.name === 'Jonh Doe');
console.log(foundPeople);