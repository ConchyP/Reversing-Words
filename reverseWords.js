function reverseWords (str) {

    let words = str.trim().split(" ")
    return words.reverse().join(" ")
    
}

let string1 = "Hello World";
let string2 = "Hi There";
let string3 = "I'm a coffee lover";  //cadena más larga para comprobar que se sigue ejecutando con más de 2 palabras

console.log(reverseWords(string1));
console.log(reverseWords(string2));
console.log(reverseWords(string3)); 