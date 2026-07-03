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


students.filter(eh => eh.hobbies.some(e => e.name == "Swimming")).forEach(e => console.log(e.name));

students.filter(e => e.age > 20).forEach(ele =>console.log(ele.name))

students.filter(e=> e.subjects.includes("Geography")).forEach(ele1=> console.log(ele1.name))


students.forEach(e=> {console.log(`Name: ${e.name}   Age: ${e.age}   hobbies: ${e.hobbies.map(e1=> e1.name)}`)})