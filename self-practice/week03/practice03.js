//เรียนย้อนหลัง เอาโจทย์จากที่เรียนมาทำความเข้าใจและฝึกเขียน
function sameCount(sentence) {
    if(!sentence)return undefined
    const words = sentence.toLowerCase().split(" ")
    return words.reduce((acc,cur) => {
        acc[cur] = (acc[cur] || 0) +1
        return acc
    },{})

}

console.log(sameCount('Today is present and present is your gif'))
console.log(sameCount('Do you best just do it'))
console.log(sameCount(null))
console.log(sameCount(undefined))


function sum(a,b) {
    return a+b
} 
function sum2(sum) {
    return sum
}
let result = sum(1,2)
console.log(result)

function Test(x){
    return x
}
function Test2(x){
    return x + 50
}
console.log(Test(Test2)(10))

const sum = (a,b) => a + b
console.log(sum(5,2))

// ARRAY LITERALS

let a = [1,2,3]
let b = [0,...a,4]
console.log(b)

let c = [5,10,15]
let d = [...c]
d[0] = 10
console.log(`d: hello javis ${d}`)

let j = Array.of(1,2,3)
console.log(j)

let letters = [...'Hello word']
function returnValue(letters){
    return letters[0]
}
console.log(returnValue(letters))

const person = {
    id:1000,
    firstname: "Somsak",
    lastname: "Jaidee",
    getFullname : function () {
        return this.firstname + " " + this.lastname
    }
}
console.log(person.getFullname())

const person = {personID:101 , firstname:"Jame"}
const student = Object.create(person)
student.studentID = 671305000
console.log(student)
console.log(student.personID)

const square = {
    side : 10,
    area : function () {return this.side * this.side}
}
console.log(square.area())
square2 = Object.create(square)
square2.side = 20
console.log(square2.area())

function distance(p1,p2) {
    return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2)
}
console.log (distance({x:1, y:1}, {x:2 , y:2}))

function sayGoodBye () {
    return 'Good bye'
}
function doSomething() {
    return sayGoodBye
}
let doIt = doSomething()
console.log(doIt())