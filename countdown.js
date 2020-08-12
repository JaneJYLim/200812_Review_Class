
number = 1000;
countdownStop = "";
function fnstart() {
    countdownStop = setInterval(countdown, 100);
}

function fnstop() {
    clearInterval(countdownStop);
}
function countdown() {
    if (number == 0) {
        fnstop();
    } else {
        number--;
    }
    var countdown = document.getElementById("countdown");
    countdown.innerHTML = number;
}