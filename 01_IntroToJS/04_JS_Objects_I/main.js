/*
// Activity 1
const book = {
    title: "alice au pays",
    author: "tim lee",
    pages: "321",
    isRead: false,
    summary(){
        return `Title: ${title},
            Author: ${author},
            Pages: ${pages},
            Read: ${isRead}
        `
    }
}

console.log(book.summary());
*/
// Activity 2

// Initial array
const fruits = ['apple', 'banana', 'cherry', 'date'];

// Initial object
const person = {
  name: 'John Doe',
  age: 30,
  address: {
    city: 'New York',
    zip: '10001',
  },
};
// Initial function
function displayPerson(person) {
  console.log(`Name: ${person.name}, Age: ${person.age}`);
}

const [fruit1, fruit2] = fruits

console.log(fruit1, fruit2);

const [apple, , cherry] = fruits

console.log(apple, cherry);

const {name, age} = person

console.log(name, age);

const { address: {city}} = person

console.log(city);


