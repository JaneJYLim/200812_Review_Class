//순환구조(Rotation, 로테이션) 만들기
num = 0;
numCnt = 3;
rotation = "" ;

function fnStart() {
    rotation = setInterval(rotate, 1000);
}

function fnStop() {
    clearInterval(rotation);
}

function rotate() {

    if (num == numCnt) {
        num = 1;
    } else {
        num++;
    }
        var res = document.getElementById("rotation");
        res.innerHTML = num;
}