/* Function Challenge 1 */
const getCelcius  = (f) => (f  - 32) * (5/9);
console.log(getCelcius(100)); // 37.7 repeating

/* Function Challenge 2  - minMax arrow function*/
const minMax = (nums) => {console.log(nums); const x = {min: Math.min(...nums), max: Math.max(...nums)}; console.log(x); return x;}
minMax([1, 2, 3, 4, 5, 6]);

/* Function Challenge 3 - IIFE print area of rect based on w, l */
(function (w,l) {
    console.log(w*l);
})(5,6);
