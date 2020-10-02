/* EXERCISE 7
Write a function "reverseString" to reverse programmatically a given string (es.: Strive => evirtS).
*/

const reverseString = function(str){
    
    return str.split(" ").reverse().join(" ");

    
}
console.log(reverseString("A M I G O"))