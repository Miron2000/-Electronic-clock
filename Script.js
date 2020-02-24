window.onload = function() {
    const result = document.getElementById("clock");

    function getInterval() {
        const data = new Date();
        let hours = data.getHours();
        let minutes = data.getMinutes();
        let seconds = data.getSeconds();
        if (hours < 10) {
            hours = `0${hours}`
        }
        if (minutes < 10) {
            minutes = `0${minutes}`
        }
        if (seconds < 10) {
            seconds = `0${seconds}`
        }
        result.innerHTML = `${hours}:${minutes}:${seconds}`;
    }
    setInterval(getInterval, 1000);
}