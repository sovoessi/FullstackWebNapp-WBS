/*
// Activity 1

let age = 25
const birthYyear = 1999
let name = "John Doe"
const isStudent = true

const student = {
     age,
    birthYyear,
    name,
    isStudent
}


console.log({...student});

student.favoriteColor = "blue"

console.log({...student});

student.favoriteColor = "green"

console.log({...student});



// Activity 2

const num1 = 42
const letter = "five"

console.log(num1 + letter);
console.log(letter - num1);
console.log(letter * 3);
console.log(2 % 1);
console.log(2 % 5);
console.log(5 % 2);
console.log(5 % letter);
console.log(1203 % 26774);
console.log(7 % 14);

// Activity 3

console.log('5 == "5": ', 5 == '5'); // Simple Equality, should be true
console.log('5 === "5": ', 5 === '5');
console.log('10 != "10": ', 10 != '10');
console.log('10 !=="10": ', 10 !== '10');
console.log('10 !=="10": ', 10 !== '10');
console.log('5 >= "5": ', 5  >= "5");
console.log('"10" <= "20": ', "10" <= "20");

// Activity 4

const temperature = 24;

if(temperature < 15) {
    console.log("Get a coat");
}else if(temperature >= 15 && temperature < 25) {
    console.log("Get a sweater");
}else {
    console.log("Get a t-shirt");
}

switch (temperature) {
    case 10:
        console.log("Get a coat");
        break;
    case 20:
        console.log("Get a sweater");
        break;
    case 30:
        console.log("Get a t-shirt");
        break;
    default:
        console.log("Don't know what to say");
        break;
}

// Activity 5

const animals = ['lion', 'tiger', 'bear', 'giraffe', 'zebra', 'monkey'];

let sum = animals.length; 
console.log("sum of animals: ", sum);

let arr_size = animals.length
let index = 0
const result_arr = []
while (arr_size > 0) {
    if(animals[index].length > 5) {
        result_arr.push(animals[index])
    }
    ++index
    --arr_size
}

console.log(`animals > 5: ${result_arr}`);

let res = animals.filter(a => a.length > 5).length
console.log(`filter animals > 5: ${result_arr}`);


index = 0
arr_size = animals.length
do {
    if(animals[index].startsWith('m')){
        console.log(animals[index]);
        break;
    }
    ++index
    --arr_size
}while(arr_size > 0)

console.log('animals start with "m": ', animals.filter(a => a.startsWith('m')));

*/

// Activity 6

const greet = (name = 'world') => {
    console.log(`Hello ${name}`);
}

greet()
greet('sam')

const square = (num) => {
    return num * num
}

const res = square(5)
console.log('square(5): ', res);


const getDayName = (num = 0) => {
    switch (num) {
        case 0:
            console.log('Sunday');
            break;
        case 1:
            console.log('Monday');
            break;
        case 2:
            console.log('Tuesday');
            break;
        case 3:
            console.log('Wesnesday');
            break;
        case 4:
            console.log('Thursday');
            break;
        case 5:
            console.log('Friday');
            break;
        case 6:
            console.log('Saturday');
            break;
        default:
            console.log("Dunno!!!");
            break;
    }
}

getDayName(3)

// var user = 'Bob'
let user = 'Bob'

function save() {
    var user = 'Antoine'
    //let user = 'Antoine'
    console.log(user);    
}

const save2 = () => { 
    var user = 'Julia';
    //let user = 'Julia' 
    console.log(user);
}

console.log(user);


save()
save2()