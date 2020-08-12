
num = 1000;
countdownStop = "";
function fnStart() {
    countdownStop = setInterval(countdown, 100);
}

function fnStop() {
    clearInterval(countdownStop);
}
function countdown() {
    if (num == 0) {
        fnStop();
    } else {
        num--;
    }
    var countdown = document.getElementById("countdown");
    countdown.innerHTML = num;
}