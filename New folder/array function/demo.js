hobbies = [
    { name: "Football", type: "Sport" },
    { name: "Photography", type: "Creative" }
]

console.log(hobbies.map((e)=>{
    if(e.name=="Photography"){
        return "he knows"
    }
}))