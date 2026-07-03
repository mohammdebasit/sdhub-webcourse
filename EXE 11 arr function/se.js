const employees = [
  {
    name: "Riya",
    age: 26,
    department: ["HR", "Recruitment"],
    salary: {
      basic: 32000,
      bonus: 5000
    },
    skills: [
      { name: "Communication", level: "Advanced" },
      { name: "Typing", level: "Intermediate" }
    ]
  },
  {
    name: "Aman",
    age: 29,
    department: ["IT", "Support"],
    salary: {
      basic: 45000,
      bonus: 7000
    },
    skills: [
      { name: "Networking", level: "Advanced" },
      { name: "Troubleshooting", level: "Advanced" }
    ]
  },
  {
    name: "Sara",
    age: 24,
    department: ["Marketing", "Sales"],
    salary: {
      basic: 30000,
      bonus: 4000
    },
    skills: [
      { name: "Public Speaking", level: "Advanced" },
      { name: "Design", level: "Beginner" }
    ]
  },
  {
    name: "Karan",
    age: 31,
    department: ["IT", "Development"],
    salary: {
      basic: 52000,
      bonus: 9000
    },
    skills: [
      { name: "JavaScript", level: "Advanced" },
      { name: "React", level: "Intermediate" }
    ]
  }
];


// 1️⃣ Find employees who work in the IT department
// 2️⃣ Find employees whose age is greater than 25
// 3️⃣ Find employees who have the skill “Public Speaking”
// 4️⃣ Print: Name - Age - Skills, Skills
// 5️⃣ Find total salary (basic + bonus) of each employee and print name with total salary
// 6️⃣ Find employees whose bonus is more than 6000
// 7️⃣ Find employees who have more than one department



// employees.filter(e=> e.department.includes("IT")).forEach(ele=> console.log(ele.name));

// employees.filter(e=> e.age>25).forEach(ele=> console.log(ele.name))

// employees.filter(e=> e.skills.some(e1=> e1.name=="Public Speaking")).forEach(ele=> console.log(ele.name))

// employees.forEach(e=> console.log(`${e.name}  ${e.age} ${e.skills.map(e1=> e1.name+" ")}`))

// employees.forEach(e=> console.log(`${e.name} Total salary ${ e.salary.basic + e.salary.bonus}`));

// employees.filter(e=> (e.salary.bonus)>6000).forEach(ele=> console.log(ele.name));

// employees.filter(e=> e.department.length>=2).forEach(ele=> console.log(ele.name))