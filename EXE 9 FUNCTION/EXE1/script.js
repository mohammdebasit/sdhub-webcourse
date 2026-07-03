//01 is even or odd using function 



// first approuch using two functions
// function definition
function iseven(params) {
    if (params % 2 == 0) {
        return true
    }
}
function log(value) {
    if (value == true) {
        console.log("even");
    } else {
        console.log("odd");
    }
}



// fuction call
let a = iseven(12);
log(a)
let b = iseven(13);
log(b)
let c = iseven(116);
log(c)



// second approuch uing single function
// function definition
function isEven(num){
    num%2==0?console.log("even"):console.log("odd");
}

// fuction call
isEven(12)
isEven(13)
isEven(15)