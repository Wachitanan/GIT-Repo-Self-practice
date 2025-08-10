//1. Create array with many data type
const z = [10,20,30,true,"string"] //สร้าง array ที่มีหลายประเภทข้อมูล
//2. print array size
console.log(z.length)  //แสดงขนาด array
//3. print the first item
console.log(z[0])  //สมาชิกตัวแรก
//4. print the last item
console.log(z[(z.length)-1]) //ตัวสุดท้าย
//5.add two more at the end of array with object and array data type respectively
z.push(['ffe'])  //เพิ่มข้อมูลตัวที่ท้าย array
console.log(z)
//6. print every item in the array
for(let i = 0 ; i < z.length ; i++)
    console.log(z)  //เเสดงสมาชิกใน array
//7.
console.log(z.splice(3))  //ใช้ splice เพื่อลบข้อมูล
//8. apply spread on string 
let str =('Cwebdeedee')
const strCH = [...str]
console.log(strCH)  //ใช้ spread กับ string
//9. create array with new constructor
const arr1 = new Array() //สร้าง array ว่าง
console.log(arr1)
const arr2 = new Array(5)  //สร้าง array ที่มีขนาด 5 ตำแหน่ง
console.log(arr2)
const arr3 = new Array(1,2,3,4)  //สร้าง array
console.log(arr3)
const arr4 = new Array(1,2,3,4)
console.log(arr4)
const str2 = Array.from(str)
console.log(str2)

