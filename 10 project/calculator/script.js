let current = '';

let buttons = document.querySelectorAll('button');
let display = document.querySelector('input')


Array.from(buttons).forEach((buttons) => {
    buttons.addEventListener('click', (e) => {

        if (e.target.innerHTML === 'AC') {
            current = '';
            display.value = current

        } else if (e.currentTarget.id === 'btn') {
            current = current.slice(0, -1)
            // display.value.slice(0,-1);
            display.value = current

        } else if (e.target.innerHTML === '=') {
            current = eval(display.value)
            display.value = current
       
        }
        else {
            current = current + e.target.innerHTML;
            display.value = current;
        }
    })
})