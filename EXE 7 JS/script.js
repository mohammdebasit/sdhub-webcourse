//01. Check if the number is even or odd.
let num=12;

if(num%2==0){
    console.log("The number is even");
} else{
    console.log("The number is odd");
}


//02. take 3 numbers and display the largest.
let num1=4;
let num2=5;
let num3=10;

if(num1 >= num2 && num1 >= num3){
    console.log(num1," is the largest");
}else if(num2 >= num3){
    console.log(num2," is the largest");
} else{
    console.log(num3," is the largest"); 
}


//03.check if the student is eligible for voting from the object given below.

let student={
    name:"ali",
    age:20,
    grade:"B"
}

if(student.age>=20){
    console.log("Student is eligible for voting");
}else{
    console.log("Student is not eligible for voting");
}