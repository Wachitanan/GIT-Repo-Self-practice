// เอาโจทย์ขงอาจารย์มาทำ ให้เเชทช่วยในส่วนที่ทำไม่ได้
//Practice
//Write a function addProperty(obj, key, value) that adds a new
// property to an object and returns the updated object.
// Output
// • console.log(addProperty({ name: 'John' }, 'age', 25))
// { name: 'John', age: 25 }
// • console.log(addProperty({}, 'city', 'New York’))
// { city: 'New York' }
function addProperty(obj,key,value){
    obj[key] = value
    return obj
}

console.log(addProperty({ name: 'John' }, 'age', 25))
console.log(addProperty({}, 'city', 'New York'))

// Write a function mergeObject(obj1, obj2) and return merges two
// objects.
// • Output
// • console.log(mergeObject({ name: 'John', age: 25 }, { city: 'New York' }))
//{ name: 'John', age: 25, city: 'New York' }
// • console.log(mergeObject({ name: 'Jane' }, { age: 30, country: 'USA' }))
//{ name: 'Jane', age: 30, country: 'USA' }

function mergeObject(obj1,obj2){
    combo = {...obj1, ...obj2} //ทีเเรกงงว่าจะเอามารวมกันยังไง เลยใหchat ใบ้ เเชทบอกว่าใช้ spread ได้
    return combo
}

console.log(mergeObject({ name: 'Jane' }, { age: 30, country: 'USA' }))
console.log(mergeObject({ name: 'John', age: 25 }, { city: 'New York' }))

// Write a function getFreqOfWords(sentence) that returns an object with keys representing
// unique words in lowercase and values representing the frequency of occurrences of each
// word with ignore case in the sentence. If the input string is null or undefined, return
// undefined.
// • Output
// • console.log(getFreqOfWords('Today is present and present is your gift'))
//{ today: 1, is: 2, present: 2, and: 1, your: 1, gift: 1 }
// • console.log(getFreqOfWords('Do you best just do it’))
//{ do: 2, you: 1, best: 1, just: 1, it: 1 }
// • console.log(getFreqOfWords(null)) //undefined
// • console.log(getFreqOfWords(undefined)) //undefined

function getFreqOfWords(sentence){
    if (sentence == undefined || sentence == null ){
        return undefined
    } // checkcase เขียนเอง เพราะจจพได้เหมือนเคยเรียน
    const lowerSplit = sentence.toLowerCase().split(" ")
    const freq = {} // ตรงนี้ chat บอกให้สร้างตัวเก็บค่า
    for(const word of lowerSplit){ // ตรง loop ถามchat เพราะเขียรไม่เป็น ให้เเชทใบ้เเรวทางเเต่ไม่ใช่ทั้งหมด เพราะจำได้ว่ามันต้องมี += 1 หรือ = 1
        if (freq[word]){
            freq[word] += 1
        }else {
            freq[word] = 1
        }
    }
    return freq
}
console.log(getFreqOfWords(null)) //undefined
console.log(getFreqOfWords(undefined)) //undefined
console.log(getFreqOfWords('Do you best just do it'))
console.log(getFreqOfWords('Today is present and present is your gift'))

// Write a function extractAndRename(obj) that extracts properties
// name and age from an object, renames them to fullName and
// yearsOld, and returns a new object with these properties.
// • Output
// • console.log(extractAndRename({ name: 'John', age: 25, city: 'New York' }))
// { fullName: 'John', yearsOld: 25 }
// • console.log(extractAndRename({ name: 'Jane', age: 30 }))
// { fullName: 'Jane', yearsOld: 30 }

function extractAndRename(obj){
    const {name, age} = obj
    const setNameOld = {fullName:name , yearsOld:age}
    return setNameOld
}
console.log(extractAndRename({ name: 'Jane', age: 30 }))
console.log(extractAndRename({ name: 'John', age: 25, city: 'New York' }))

// Write a function mergeAndDestructure(obj1, obj2) that merges two
// objects using the spread operator, and then destructures the merged
// object to extract specific properties. Return an object with the extracted
// properties.
// • Output
// • console.log(mergeAndDestructure({ name: 'John', age: 25 }, { city: 'New York' }))
// { name: 'John', age: 25 }
// • console.log(mergeAndDestructure({ name: 'Jane' }, { age: 30, country: 'USA' }))
// { name: 'Jane', age: 30 }

function mergeAndDestructure(obj1,obj2){
    const merge = {...obj1, ...obj2}
    const {name , age} = merge // ให้ chat ช่วยบรรทัดนี้ เพราะว่าตอนกดรัน output มันไม่เหมือนเพราะไม่ได้ destructuring
    return {name,age} // ทีเเรก return เป็น merge มันจะreturn ทั้งหมดไม่ได้เจาะจง
}
console.log(mergeAndDestructure({ name: 'Jane' }, { age: 30, country: 'USA' }))

// Write a function removeDuplicateWords(sentence) that takes a string as input and returns a new
// string with all duplicate words removed, while preserving the order of the first occurrence of
// each word. The function should be case insensitive, but the output should maintain the original
// casing. If the input is null, undefined, or an empty string, return an empty string.
// • Output:
// removeDuplicateWords("This is a test This test is easy.") // "This is a test easy."
// removeDuplicateWords("Hello hello HELLO world!") // "Hello world!"
// removeDuplicateWords("One two two three three three") // "One two three"
// removeDuplicateWords("") // ""
// removeDuplicateWords(null) // ""

function removeDuplicateWords(sentence){ //ข้อนี้คืองงหนักมาก ต้องให้chatช่วยทั้งทางเลย เพราะไม่รู้คำสั่ง has , new Set
    if (!sentence) return ""
    const words = sentence.split(" ")
    const seen = new Set()
    const result = words.filter(word => {
        const lower = word.toLowerCase();
    if (!seen.has(lower)){ //คำที่ยังไม่เคยเจอ
        seen.add(lower) //ให้มัน add เข้าไป
        return true 
    }
    return false
})
    return result.join(" ") // เอาตำมา join กัน
    }

console.log(removeDuplicateWords("This is a test This test is easy.")) // "This is a test easy."
console.log(removeDuplicateWords("Hello hello HELLO world!")) // "Hello world!"
console.log(removeDuplicateWords("One two two three three three")) // "One two three"
console.log(removeDuplicateWords("")) // ""
console.log(removeDuplicateWords(null)) // ""
