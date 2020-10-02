/* EXERCISE 3
Write a function "crazyDiff" that computes the 
absolute difference between a given number and 19. 
Returns triple their absolute difference if 
the specified
number is greater than 19.
*/

const crazyDiff = function(diff1, diff2){
    diff2 =19

    if(diff1>diff2){
        return (diff1-diff2) * 3
    }else{
        return diff1 - diff2
    }

    
}
console.log('The Absolute different is greater than 19: '+crazyDiff(25,19));
console.log('The absoulute diff is less than 19: '+crazyDiff(19,19));

