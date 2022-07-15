//Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

var summation = function (num) {
    let foo = []
    for (let i = 0; i <= num; i++) {
       foo.push(i)
    }
    return foo.reduce((acc,el)=>acc+el, 0)
}
console.log(summation(8))