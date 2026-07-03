let display = document.getElementById('timer');
let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');

let timeleft = 1500;
let inp = prompt("Enter a time in seconds")
let pinp = parseInt(inp)

if (pinp !== 0) {
   timeleft= pinp
}

let interval;

const timere = () => {
    const minutes = Math.floor(timeleft / 60);
    const seconds = timeleft % 60;
    display.innerHTML = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
}

const Start = () => {
    interval = setInterval(() => {
        timeleft--
        timere();

        if (timeleft == 0) {
            clearInterval(interval);
            alert(`Time's up`);
            timeleft = 1500;
            timere();
        }
    }, 1000)
}

const Stop = () => clearInterval(interval);

const Reset = () => {
    clearInterval(interval);
    timeleft = 1500;
    timere();
}

start.addEventListener('click', Start);
stop.addEventListener('click', Stop);
reset.addEventListener('click', Reset);