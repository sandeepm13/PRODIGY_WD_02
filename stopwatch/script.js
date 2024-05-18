let ms = 0, s = 0, m = 0, h = 0;
let timer;
let lapCount = 0;

const display = document.querySelector(".timer-Display");
const lapsContainer = document.querySelector(".laps");

function start() {
    if (!timer) {
        timer = setInterval(run, 10);
    }
}

function run() {
    display.innerHTML = getTimer();
    ms++;
    if (ms == 100) {
        ms = 0;
        s++;
    }
    if (s == 60) {
        s = 0;
        m++;
    }
    if (m == 60) {
        m = 0;
        h++;
    }
    if (h == 13) {
        h = 1;
    }
}

function getTimer() {
    return (h < 10 ? "0" + h : h) + " : " + (m < 10 ? "0" + m : m) + " : " + (s < 10 ? "0" + s : s) + " : " + (ms < 10 ? "0" + ms : ms);
}

function pause() {
    stopTimer();
}

function stopTimer() {
    clearInterval(timer);
    timer = false;
}

function reset() {
    stopTimer();
    ms = 0;
    s = 0;
    m = 0;
    h = 0;
    lapCount = 0;
    display.innerHTML = getTimer();
    resetLap();
}

function restart() {
    if (timer) {
        reset();
        start();
    }
}

function lap() {
    if (timer) {
        lapCount++;
        const li = document.createElement("li");
        li.innerHTML = `<span>Lap ${lapCount}</span> ${getTimer()}`;
        lapsContainer.appendChild(li);
        
        // Scroll to the bottom to keep the latest lap visible
        lapsContainer.scrollTop = lapsContainer.scrollHeight;

        // Decrease the size and move up the heading
        const heading = document.querySelector(".heading");
        heading.style.fontSize = "40px";
        heading.style.marginTop = "50px";
    }
}

function resetLap() {
    lapsContainer.innerHTML = "";
    lapCount = 0;
}
