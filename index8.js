/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as parameter
*/

const upperFirst = function(upCase){
    let splitStr = upCase.toLowerCase().split(' ');
   for (let i = 0; i < splitStr.length; i++) {
       
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
   }
   return splitStr.join(' '); 
    
   

    
}
console.log(upperFirst("where are you going"))