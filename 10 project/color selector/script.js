let a = document.querySelector('input')
let b = document.querySelector('body')

a.addEventListener('input', (e) => {
    console.log(e.target.value)
    b.style.backgroundColor = e.target.value
})

