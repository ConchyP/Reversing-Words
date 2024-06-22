function reverseWords (str) {

    let words = str.trim().split(" ")
    return words.reverse().join(" ")
    
}

let string1 = "Hello World";
let string2 = "Hi There";
let string3 = "I'm a coffee lover";

console.log(reverseWords(string1));
console.log(reverseWords(string2));
console.log(reverseWords(string3));