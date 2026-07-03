let p = document.createElement("p")
p.textContent = "i am a paragraph "

let h1 = document.createElement("h1")
h1.textContent = "i am heading 1"

document.querySelector('#box').appendChild(p)
document.querySelector('#box').appendChild(h1)

let btn = document.createElement('button')
btn.textContent = "submit me"

document.body.appendChild(btn)

btn.addEventListener('click', () => {
    if (document.body.style.backgroundColor == 'green') {
        document.body.style.backgroundColor = "red"
    } else {
        document.body.style.backgroundColor = "green"
    }
})