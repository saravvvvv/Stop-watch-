let timer;
let isRunning = false;
let elapsedTime = 0;  // Time in seconds
let lapTimes = [];

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById('startStop').innerText = 'Start';
    } else {
        timer = setInterval(updateTime, 1000);
        document.getElementById('startStop').innerText = 'Stop';
    }
    isRunning = !isRunning;
}

function updateTime() {
    elapsedTime++;
    const hours = Math.floor(elapsedTime / 3600);
    const minutes = Math.floor((elapsedTime % 3600) / 60);
    const seconds = elapsedTime % 60;
    document.getElementById('time').innerText = formatTime(hours, minutes, seconds);
}

function formatTime(hours, minutes, seconds) {
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(value) {
    return value < 10 ? '0' + value : value;
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    elapsedTime = 0;
    document.getElementById('time').innerText = '00:00:00';
    document.getElementById('startStop').innerText = 'Start';
    lapTimes = [];
    document.getElementById('lapList').innerHTML = '';
}

function recordLap() {
    if (isRunning) {
        const hours = Math.floor(elapsedTime / 3600);
        const minutes = Math.floor((elapsedTime % 3600) / 60);
        const seconds = elapsedTime % 60;
        const lapTime = formatTime(hours, minutes, seconds);
        lapTimes.push(lapTime);

        const lapList = document.getElementById('lapList');
        const lapItem = document.createElement('li');
        lapItem.innerText =`Lap ${lapTimes.length}: ${lapTime}`;
        lapList.appendChild(lapItem);
    }
}