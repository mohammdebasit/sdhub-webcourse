let card = document.getElementById('card-templete')
let image = document.getElementById('image')
let title = document.getElementById('Title')
let description = document.getElementById('description')
let price = document.getElementById('prize')

async function getdata(url) {
    let a = await fetch(url)
    let data = await a.json()

    // console.log(data.products);

    data.products.forEach((e) => {

        clone = card.cloneNode(true)
        clone.classList.remove('hidden')
        clone.querySelector('#image').src = e.thumbnail;
        clone.querySelector('#Title').textContent = e.title;
        clone.querySelector('#description').textContent = e.description
        clone.querySelector('#prize').textContent ='$'+ e.price

        document.body.appendChild(clone)

    })

}


getdata("https://dummyjson.com/products")

// title   description   thumbnail   price

