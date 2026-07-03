// add function
function sum(num1, num2, num3, num4, num5) {
    return (num1 + num2 + num3 + num4 + num5)
}

// substraction function
function diff(num1, num2, num3, num4, num5) {
    return (num1 - num2 - num3 - num4 - num5)
}

//average function
function avg(num1, num2, num3, num4, num5) {
    return (num1 + num2 + num3 + num4 + num5) / 5
}

//function that finds maximum value
function max(num1, num2, num3, num4, num5) {
    return Math.max(num1, num2, num3, num4, num5)
}

//function that find minimum value
function min(num1, num2, num3, num4, num5) {
    return Math.min(num1, num2, num3, num4, num5)
}



//function that display every addition , substraction , average ,maximum value and minimum value
function calcu(num1, num2, num3, num4, num5) {
    console.log(` Entered numbers are 
 ${num1},${num2},${num3},${num4},${num5},
 
 The sum is : ${sum(num1, num2, num3, num4, num5)}
 The difference is : ${diff(num1, num2, num3, num4, num5)}
 The average is : ${avg(num1, num2, num3, num4, num5)}
 The maximum number is : ${max(num1, num2, num3, num4, num5)}
 The minimun number is : ${min(num1, num2, num3, num4, num5)}`);

}


//function call
calcu(1, 2, 3, 4, 5)
calcu(12,23,33,21,12)



// note that all functions have 5 parameters 