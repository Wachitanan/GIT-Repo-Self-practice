//ให้ chatGPT คิดโจทย์ง่ายๆให้ครับ
// ข้อที่ 1: การใช้ .map()
// ให้เขียนฟังก์ชันที่รับอาร์เรย์ของตัวเลข แล้วคืนค่าเป็นอาร์เรย์ใหม่ที่มีค่าทุกตัว คูณด้วย 2
// input: [1, 2, 3, 4]
// output: [2, 4, 6, 8]
const numbers = [1,2,3,4]
const result = numbers.map(function(number){
    return number * 2
})
console.log(result) //[ 2, 4, 6, 8 ]

//ลองฝึกใช้ arrow
const result1 = numbers.map((number) =>{
    return number * 2
})
console.log("Arrow" +" "+ result1)

// ข้อที่ 2: การใช้ .filter()
// ให้เขียนฟังก์ชันที่รับอาร์เรย์ของตัวเลข แล้วคืนค่าเฉพาะเลขที่เป็น จำนวนคู่
// input: [1, 2, 3, 4, 5, 6]
// output: [2, 4, 6]
const numbers2 = [1,2,3,4,5,6]
const result2 = numbers2.filter(returnSum => {
    return returnSum % 2 === 0
})
console.log(result2)

// ข้อที่ 3: การใช้ .reduce()
// ให้เขียนฟังก์ชันที่รับอาร์เรย์ของตัวเลข แล้วคืนค่าเป็น ผลรวมทั้งหมด
// input: [10, 20, 30]
// output: 60

const numbers3 = [10,20,30]
const result3 = numbers3.reduce((arr,cur) => arr + cur , 0)
console.log(result3)

const result03 = numbers3.reduce(function(arr,cur){
    return arr + cur
})
console.log(result3) //ลองเขียน 2 เเบบ จะได้ทวนด้วย

// ข้อที่ 4: ใช้ .find()
// ให้เขียนฟังก์ชันที่รับอาร์เรย์ของชื่อ (string) แล้วคืนค่าเป็นชื่อแรกที่มีความยาวมากกว่า 5 ตัวอักษร
// input: ["Ann", "Peter", "John", "Somsak"]
// output: "Peter"

const string = ["Ann", "Peter", "John", "Somsak"]
const str = string.find(returnStr => returnStr.length > 5)
console.log(str)

const str2 = string.find(function(element){
    return element.length > 5
})
console.log(str)

// ข้อที่ 5: รวมคะแนนนักเรียน
// มีอาร์เรย์ของนักเรียน แต่ละคนมีชื่อกับคะแนน
// ให้เขียนโค้ดที่คืนค่าเป็น ออบเจ็กต์ที่เก็บผลรวมคะแนนทั้งหมด
const students = [
    { name: "A", score: 10 },
    { name: "B", score: 15 },
    { name: "C", score: 20 }
  ];
const SumScore = students.reduce((arr2,student) => {
    return arr2 + student.score
},0)
console.log(SumScore)
  // expected output: 45
  
const SumScore2 = students.map(student => student.score).reduce((arr3,cur3) => arr3 + cur3,0)
console.log(SumScore2)//45 // ใช้ map มาเกี่ยวข้อง

const SumScore3 = students.reduce((arr4,student) => arr4 + student.score , 0)
console.log(SumScore3) //45 ใช้ reduce อย่างเดียว

// ข้อที่ 6: นับจำนวนคำซ้ำ
// ให้เขียนฟังก์ชันที่รับอาร์เรย์ของคำ (string) แล้วคืนค่าเป็น ออบเจ็กต์นับจำนวนครั้งที่คำแต่ละคำปรากฏ
// expected output: { apple: 3, banana: 2, orange: 1 }
const words = ["apple", "banana", "apple", "orange", "banana", "apple"];
const countWords = words.reduce((arr5,word) => {
    if (arr5[word]){
        arr5[word] =+ 1
    }else {
        arr5[word] = 1
    }
    return arr5
},{})
console.log(countWords)
//ข้อนี้ทำอยู่นาน อาจารย์สอนไปแล้วแต่จำไม่ได้ ข้อนี้ให้ chatGPT เฉลย แล้วมาทำความเข้าใจ