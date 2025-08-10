// ให้ Chatgpt เจนโจทย์
// โจทย์ 1: สร้างอาร์เรย์ผสมข้อมูลหลายชนิด
// สร้างตัวแปรชื่อ mixData ซึ่งเก็บข้อมูลดังนี้:
// ตัวเลข 3 ตัว
// สตริง 2 ตัว
// boolean 1 ตัว
// อ็อบเจกต์ 1 ตัว {name: "JS"}
// อาร์เรย์อีก 1 อัน [1, 2]

const mixData = [1,2,3,"a","b",true,{name: "JS"},[1,2]]


// โจทย์ 2: ตรวจสอบและแสดงผล
// แสดงความยาวของอาร์เรย์ mixData
// แสดงค่าตัวแรก และค่าตัวสุดท้าย
// แสดงค่าตรงกลางของ array (index กลาง)
// ใช้ typeof ในการแสดงชนิดของข้อมูลในแต่ละตำแหน่งของ mixData ด้วย for loop

console.log(mixData.length)
console.log(mixData[0])
console.log(mixData[(mixData.length)-1])
console.log(mixData[(mixData[0]+(mixData.length-1))/2]) //มันหาตำแหน่ง 4.5 ไม่เจอ เลยเป็น undefined

for (let i=0;i<mixData.length;i++){
    console.log(typeof mixData[i])
}

// //โจทย์ 3: จัดการข้อมูลในอาร์เรย์
// เพิ่มข้อมูล "new item" ไปที่ตำแหน่งสุดท้าย
// เพิ่มข้อมูล false ไปที่ตำแหน่งแรก
// ลบข้อมูลตัวที่ 2 และแสดงค่าที่ลบออกมา
// ใช้ .splice() เพื่อลบข้อมูล 2 ตัวจาก index ที่ 3
mixData.push(["new item"])
console.log(mixData)
mixData.splice(0,0,false) // .splice (index เริ่มต้น, จำนวนที่จะลบ ถ้าไม่ลบให้ใส่ 0, item1,item2,.....) index 0 = ตัวที่ 1 , index 1 = ตัวที่ 2 , index n = n+1
console.log(mixData)

let remove = mixData.splice(1,1) 
console.log(remove)
console.log(mixData)

mixData.splice(3,2) 
console.log(mixData)

