let input = document.getElementById('input');
let addbtn = document.getElementById('add-btn');
let todoList = document.getElementById('todo-list');
let todo = document.getElementById('todos');

const addfunction = () => {
    if (input.value === '') {
        alert('write something')
    }
    else {
        let li = todo.cloneNode(true)
        li.querySelector('p').innerHTML = input.value
        li.classList.remove('hidden')
        todoList.appendChild(li)
    }
    input.value = '';
    savedata()
}


const dele = (btn) => {
    btn.closest('li').remove();
    savedata()

}


todoList.addEventListener('change', (e) => {
    if (e.target.type === 'checkbox') {
        let para = e.target.closest('li').querySelector('p')

        if (e.target.checked) {
            para.style.textDecoration = "line-through";
            savedata()
        } else {
            para.style.textDecoration = "none";
            savedata()
        }
    }
})

// todoList.addEventListener('dblclick', (e) => {
//     e.target.closest('li').querySelector('p') = prompt(change)
// })

// const savedata = (e) => {
//     if (e.target.closest('li')) {
//         let p = e.target.querySelector('p');
//         p = prompt("change your text", p.innerHTML)

//         e.target.querySelector('p') = p
//     }
// }

const savedata = () => {
    localStorage.setItem('data', todoList.innerHTML);
}

const getdata = () => {
    todoList.innerHTML = localStorage.getItem('data');
}

getdata()
