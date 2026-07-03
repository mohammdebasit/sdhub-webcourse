const students = [
    {
        name: "Alice",
        age: 20,
        subjects: ["Math", "Science", "History"],
        scores: {
            Math: 85,
            Science: 90,
            History: 78
        },
        hobbies: [
            { name: "Reading", type: "Educational" },
            { name: "Gaming", type: "Entertainment" }
        ]
    },
    {
        name: "Bob",
        age: 22,
        subjects: ["English", "Physics", "Computer Science"],
        scores: {
            English: 88,
            Physics: 76,
            ComputerScience: 92
        },
        hobbies: [
            { name: "Football", type: "Sport" },
            { name: "Photography", type: "Creative" }
        ]
    },
    {
        name: "Charlie",
        age: 21,
        subjects: ["Biology", "Chemistry", "Geography"],
        scores: {
            Biology: 90,
            Chemistry: 85,
            Geography: 80
        },
        hobbies: [
            { name: "Swimming", type: "Sport" },
            { name: "Chess", type: "Mind Game" }
        ]
    }
];


// 1 Find student who knows swimming 
// 2 Find student whose age is greater than 20
// 3 Find student whose subject is geography 
// 4 ' Name - Age-Hobbies,Hobbies'


console.log(students.map((e) => {
    return e.hobbies.some(ite => ite.name == "Swimming") ? `${e.name} know Swimming` : `${e.name} doesnt know Swimming`
}))

console.log(students.map((e) => {
    return e.age > 20 ? `${e.name}'s age is above 20 ` : `${e.name}'s age is 20 or below 20`
}));

console.log(students.map((e) => {
    return e.subjects.includes("Geography") ? `${e.name}'s have geography subject` : `${e.name} does'nt have geography subject`
}));


console.log(students.map((e)=>{
   return `${e.name} - ${e.age} - ${e.hobbies.map((e1)=> e1.name)}`
}))