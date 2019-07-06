var time = 30;


var intervalId;


function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function decrement() {

    time--;

    $("#timerDiv").html(time);

    if (time === 0) {


        stop();

    }
}

function stop() {

    
    clearInterval(intervalId);
  }

run();


