async function fetchu(url) {

     //here we are fetching the data through url
    let a = await fetch(url)

    //here we are converting the data in usable js format
    let data = await a.json()

    //here we are printing the first and last name
    data.users.forEach((e) => { console.log(`${e.firstName} ${e.lastName}`) });
}

fetchu("https://dummyjson.com/users")
// firstName
// lastName
// maidenName