/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/

const area = function( alt = 11, largura =12) {
  let calcArea = alt * largura
    return calcArea

    
}
let calcu = area(11,12)
console.log(calcu)

/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

const crazySum = function (num1,num2) {
    if(num1 !== num2){
        let sum = num1 + num2
        return sum

    }else (num1 === num2)
    let sumMult3 = (num1 +num2)* 3
    return sumMult3
    
}

let operation = crazySum(2,2)
console.log (operation)


/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/
/*const crazyDiff = function (number){
    let diference = Math.abs(number - 19)

    if (diference > 19){
        return diference * 3
    }else{
    return Math.abs(number - 19)
    }
}

let operationCrazy = crazyDiff (20)


console.log (operationCrazy)
*/

/* const crazyDiff = function (number){
    if number >19{
        let triple = 3 * (number -19)
        return triple
    } else ( num < 19){
        let diference = number - 19
        return diference
    }
}

function crazyDiff(num) {
    if (num > 19) {
      return Math.abs(num - 19) * 3;
    } else {
      return Math.abs(num - 19);
    }
  }

let operationCrazy = crazyDiff (20)


console.log (operationCrazy)
*/


/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/

const boundary = function (intNumber){
    if ((intNumber > 20 && intNumber <= 100)){
        return true
    } if (intNumber === 400){
        return true
    } else{
        return false
    }
}



let testNumber = boundary(500)
console.log (testNumber)

/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

const strivify = function (string){
    if ( string.startsWith("Strive"))
    return string
   else{
       return "Strive " + string
   }
}
let expression = strivify ( "school")
console.log (expression)


/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

function check3and7 (positiveNumber){
    if (positiveNumber >= 0 && ( positiveNumer  % 3  === 0 || positiveNumber % 7 === 0)){
        return true

    } else{
        return false
    }

}

/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/


/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/

function upperFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  /* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

function cutString(str) {
    return str.slice(1, str.length - 1);
  }

  /* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

function giveMeRandom(n) {
    const arr = [];
    for (let i = 0; i <= n; i++) {
      arr.push(Math.floor(Math.random() * 10));
    }
    return arr
}