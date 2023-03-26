const obj = {
    name: 'zanu',
    contact: '9860175204',
    address: 'boudha'
}

console.log(obj)
console.log(typeof obj)
//yo api ma kam lagxa
//convert obj into json
let json = JSON.stringify(obj)
console.log(json)
console.log(typeof json)

//convert json into obj

const object = JSON.parse(json)
console.log(object);
console.log(typeof obj)



