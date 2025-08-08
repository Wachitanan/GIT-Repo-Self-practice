function longestWord(sentence) {
  if (typeof(sentence) != "string" || sentence === "") {
    return ""
  } 
  let x = sentence.split(" ") 
  let z = ""
  for (let i of x){
    if (z === "" || i.length > z.length){
      z = i
    }
  }
  return z
  // your code here
}
module.exports = longestWord
