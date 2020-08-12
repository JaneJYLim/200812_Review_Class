    var now = new Date();
    var nowDate = document.getElementById("now");
    var absTM_now = now.getTime();
    nowDate.innerHTML = absTM_now;

    var future = new Date(2020,11,31);
    var futureDate = document.getElementById("future");
    var absTM_future = future.getTime();
    futureDate.innerHTML = absTM_future;

    var remainTM = absTM_future - absTM_now;
    var remainDate = remainTM/(24*60*60*1000);
    document.getElementById("remain").innerHTML = Math.ceil(remainDate);

