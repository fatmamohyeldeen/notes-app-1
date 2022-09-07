/**
 * Object / Json
 */

const car = {
    name:'BMW',
    color:'Black'
}
console.log(car)
console.log(car.name)

// stringfy --> convert object to json
const carJson = JSON.stringify(car)
// console.log(carJson)
// console.log(carJson.name) // error ? bec u cannot access json

// // parse --> convert json to object

// const carObject = JSON.parse(carJson)
// console.log(carObject)
///////////////////////////////////////////////////////////////
const fs = require('fs')
fs.writeFileSync('test.json',carJson)
console.log(fs.readFileSync('test.json').toString())

///////////////////////////////////////////////////////////////////////

/**
 * Task
 * create object person name age
 * change object to json
 * write file json 
 * read file
 * json to object
 * change inside object
 * object --> json
 * write
 */

const person = {
    name:'Osama',
    age:40
}

const personJson = JSON.stringify(person)

fs.writeFileSync('person.json',personJson)

const dataJson = fs.readFileSync('person.json').toString()
console.log(dataJson)

const obj = JSON.parse(dataJson)
obj.name = 'Amer'
obj.age = 60

const newJson = JSON.stringify(obj)
fs.writeFileSync('person.json',newJson)


