/*
Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.

Example::

let arr = [1, 1, 0, -1, -1]

There are 5 elements: two positive, two negative and one zero. Their ratios are 2/5, 2/5 and 1/5 . Results are printed as: 
0.400000
0.400000
0.200000
*/

function plusMinus(arr) {
   let total = arr.length
   let pos = 0, neg = 0, zero = 0;
 
   arr.map(item => item > 0 ? pos++ : item === 0 ? zero++ : neg++)
   
   let results = [pos, neg, zero]
   results.map(res => console.log((res/total).toFixed(6)))

}
   