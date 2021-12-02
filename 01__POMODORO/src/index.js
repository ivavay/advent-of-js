const startingMinutes = 25;
let time = startingMinutes * 60;

const countDown = document.getElementById("countdown")

setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(time/60)
    countDown.textContent = `${minutes}`
    if (minutes <= 0){
        countDown.textContent = "Break!"
        min.textContent = " ";
    } else {
        time--;
    }
}
