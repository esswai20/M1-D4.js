/* EXERCISE 2
Write a function "crazySum" which receives two given integers. If the two values are same, then returns triple their sum.
*/

const crazySum = function(num1, num2){
    let num3=num1

    if(num1===num2){
        return num1+num2+num3
    }else{
        return num1 + num2
    }

    
}
console.log('The sum are the same: '+crazySum(3,3));
console.log('The sum are different: '+crazySum(3,2));
