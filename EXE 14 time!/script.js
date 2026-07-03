let b = setTimeout(() => {
    console.log("Hello world")
}, 2000)
clearTimeout(b)


let i = 1;
let a = setInterval(() => {
    console.log("I am gonna print for every 1 seconds for 10 seconds", i++);
}, 1000)

setTimeout(() => {
    console.log("Time interval is cleared",);
    clearInterval(a)
}, 10000)