/* EXERCISE 4
Write a function "boundary" which accept an integer N and returns true if N is within 20 and 100 (included) or equal to 400.
*/

const boundary = function(N){
    
    if((20 <= N && N <=100) ||( N===400)){
        return true
    }else{
        return false
    }

    
}
console.log(boundary(200))


