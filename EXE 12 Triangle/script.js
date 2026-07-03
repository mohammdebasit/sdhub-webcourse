let inp = prompt("enter a number");
let a = parseInt(inp);
let c = " * ";
let b = " ";

for (let i = 0; i < a; i++) {
    b = b + " "
}

for (let i = 0; i < a; i++) {
    let d =""
    console.log(d, c)
    c = " * " + c
    d = b.slice(0,-1);
}
// let a= "hello world"
// console.log(a.slice(0,-1));
