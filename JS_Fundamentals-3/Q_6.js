function reverseString(str){
    return str.split("").reverse().join("");
}

let originalString = "Hello Students!!!";
let reversedString = reverseString(originalString);
console.log(reversedString);