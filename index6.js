/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

const check3and7 = function(positvNum){
    
    if((positvNum%3===0) && (positvNum % 7 ===0)){
        return "Multiple of 3 and 7"
    }else if(positvNum%3===0){

        return "Multiple of 3"
    }else if(positvNum%7===0){
        return "Multiple of 7"

    }else{
        return "Please be realistic!"
    }


    
}
console.log(check3and7(2))
