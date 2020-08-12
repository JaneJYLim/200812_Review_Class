    //Date객체 - 날짜
    var now = new Date();
    var time = now.toLocaleString();
    var dayIdx = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    var day = now.getDay();
    var dayName = dayIdx[day];
    var nowTime = document.getElementById("nowTime");
        nowTime.innerHTML = time + " " + dayName;