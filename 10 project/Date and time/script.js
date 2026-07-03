let date2 = document.getElementById('date');
let time = document.getElementById('time');

let date = new Date
let year = date.getFullYear()
let month = date.getMonth() + 1
let date1 = date.getDate()

if (month == 1) {
    month = 'January'
} else if (month == 2) {
    month = 'feb'
} else if (month == 3) {
    month = 'mar'
} else if (month == 4) {
    month = 'apr'
} else if (month == 5) {
    month = 'may'
} else if (month == 6) {
    month = 'jun'
} else if (month == 7) {
    month = 'july'
} else if (month == 8) {
    month = 'aug'
} else if (month == 9) {
    month = 'sep'
} else if (month == 10) {
    month = 'oct'
} else if (month == 11) {
    month = 'nov'
} else if (month == 12) {
    month = 'dec'
}

date2.innerHTML = `${date1} ${month} ${year}`;

setInterval(() => {
    date = new Date
    time.innerHTML = date.toLocaleTimeString();
}, 1000)

