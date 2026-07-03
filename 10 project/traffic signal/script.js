let box1 = document.getElementById('box1');
let box2 = document.getElementById('box2');
let box3 = document.getElementById('box3');
let box4 = document.getElementById('box4');




const traffi = (box) => {
    s1 = box.querySelector('#s1');
    s2 = box.querySelector('#s2');
    s3 = box.querySelector('#s3');


    s1.style.backgroundColor = '#d1d5db';
    s3.style.backgroundColor = '#16a34a';
    setTimeout(() => {
        s3.style.backgroundColor = '#d1d5db';
        s2.style.backgroundColor = '#facc15';
    }, 5000)
    setTimeout(() => {
        s2.style.backgroundColor = 'white';
        s1.style.backgroundColor = '#dc2626';
    }, 7000)

}




traffi(box1)

setTimeout(() => {
    traffi(box2)
}, 9000)

setTimeout(() => {
    traffi(box3)
}, 18000)

setTimeout(() => {
    traffi(box4)
}, 27000)


setInterval(() => {
    traffi(box1)
    setTimeout(() => {
        traffi(box2)
    }, 9000)
    setTimeout(() => {
        traffi(box3)
    }, 18000)
    setTimeout(() => {
        traffi(box4)
    }, 27000)

}, 36000)

