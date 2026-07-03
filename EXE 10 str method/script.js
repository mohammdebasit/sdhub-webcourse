const strtransU=(string)=>{
    let a = string.split(" ");
    let newstr = " ";

    for(let i=0; i<a.length; i++){
        let b=a[i].charAt(0).toUpperCase();
        let c=a[i].slice(1).toLowerCase();

        newstr=newstr +(b+c+" ");
    }
    return newstr
}

let string = "hello today is a good day can we have a meal together";
let a = string.split(" ");


console.log(strtransU(string));
