/*Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

Example
let arr = [1, 3, 5, 7, 9]
The minimum sum is 
   1 + 3 + 5 + 7 = 16 
and the maximum sum is 
   3 + 5 + 7 + 9 = 24 

The function prints 16 24
*/

function miniMaxSum(arr) {
   let currSum = 0
   let minSum = 0
   let maxSum = 0 
   
   for(let pos = 0; pos < arr.length; pos++){
       for(let i = 0; i < arr.length; i++){
           if(i === pos){continue;}
           currSum += arr[i]
       }
       if(pos === 0){
           maxSum = minSum = currSum
       } else{
           if(currSum > maxSum){
               maxSum = currSum
           }
           if(currSum < minSum){
               minSum = currSum
           }
       }
       currSum = 0
       
   }
   
   console.log(minSum + " " + maxSum)

}

miniMaxSum([3, 6, 2, 9, 6])
miniMaxSum([56, 23, 90, 1, 21])
miniMaxSum([1, 2, 3, 4, 5])
miniMaxSum([5, 5, 5, 5, 5])