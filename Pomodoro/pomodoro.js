
$(document).ready(function () {
   
    var timeOut;

    //start clock countdown
    function startClock(duration, display) {
        
        var timer = duration, minutes, seconds;
        timeOut = setInterval(function () {
            var minutes = parseInt(timer / 60, 10);
            var seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = minutes + ":" + seconds;
            if (--timer < 0) {
                timer = duration;
            }
        }, 900);
    
    }

    

    $("#start").click(function () {
        var minutes = 60 * parseInt($("#totalTime").text().toString().split(':').splice(0, 1)),
        display = document.querySelector('#totalTime');
        startClock(minutes, display);
    });

    $("#stop").click(function () {
        clearInterval(timeOut);
    });


    $("#reset").click(function () {
        $("#totalTime").text("25:00");
        clearInterval(timeOut);
    });

});