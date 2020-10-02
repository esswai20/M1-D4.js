/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

const cutString = function(strCut){
    //strCut= "Strive"
     let result = strCut.substring(1,strCut.length-1)
     
     return result
    
 
     
 }
 console.log(cutString("Strive"))
