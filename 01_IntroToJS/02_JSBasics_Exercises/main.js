

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




