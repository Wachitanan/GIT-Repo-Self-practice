//shallow equality
//ให้เเชทเจนโจทย์ แบ้วดูวิธีการทำบางส่วน แล้วจึงเริ่มเขียนเองตามความเข้าใจ ถ้าไม่ได้ก็ดูเฉลยจากเเชทแล้วทำความเข้าใจ

const obj1 = {a: 1};
const obj2 = {a: 1};

function isShallowEqual (obj1,obj2){
    if (obj1 === obj2){
        return true;
    }
    if (typeof obj1 !== 'object' || obj1 === null ||
        typeof obj2 !== 'object' || obj2 === null
    ){
        return false
    }
    const key1 = Object.keys(obj1);
    const key2 = Object.keys(obj2);

    if (key1.length !== key2.length) {
        return false
    }
    for (let key of key1){
        if (!obj2.hasOwnProperty(key) || obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}
// console.log(isShallowEqual(obj1,obj2));


const obj1 = { a: 1, b: 2 };
const obj2 = { b: 2, a: 1 };

function isShallowEqualIgnoreKeyOrder (obj1,obj2){
    if (obj1 === obj2) return true;

    if (typeof obj1 !== 'object' || obj1 == null ||
        typeof obj2 !== 'object' || obj2 == null
    ) {
        return false
    }
    const keys1 = Object.keys(obj1)
    const keys2 = Object.keys(obj2)

    if (keys1.length !== keys2.length){
        return false
    }
    for (let key of keys1){
        if (!obj2.hasOwnProperty(key) || obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true
}
// console.log(isShallowEqualIgnoreKeyOrder(obj1, obj2));