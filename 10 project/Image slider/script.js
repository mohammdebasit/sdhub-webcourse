let right = document.getElementById('rightbt');
let left = document.getElementById('leftbt');
let box = document.querySelector('.box');
let imag = document.querySelectorAll('.box img');
let slide = 0;

right.addEventListener('click', () => {
  if (slide < imag.length) {
    slide++
    box.style.transform = `translateX(${-800 * (slide - 1)}px)`

  } else {
    slide = 1
    box.style.transform = `translateX(${800 * (slide - 1)}px)`
  }
})

left.addEventListener('click', () => {
  if (slide > 0) {
    slide--
    box.style.transform = `translateX(-${slide * 800}px)`
  } else {
    slide = imag.length - 1
    box.style.transform = `translateX(-${slide * 800}px)`
  }
})