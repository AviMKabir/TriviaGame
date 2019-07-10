// lol holding the questions in an array like this? its working
// i dont know anything about sonic but i needed a theme

var questions = ["WHO IS THE BLUE HEDGEHOG?",
    "WHO IS THE COOLER VERSION OF HIM THAT HAS GUNS?",
    "WHO IS THE MAIN BAD GUY?",
    "HOW MANY CHAOS EMERALDS ARE THERE IN THE OG GAME?"];


// holding the setInterval
var showQuestion;

// Count will keep track of the index
var count = 0;



// holding the amount of right & wrong answers
var correct = 0;
var incorrect = 0;
var unanswered = 0;

// state if the answer is correct or not

var correctState = null;

//gonna hold my stop variable because this decrement is not stopping

var stopVariable = 0;


// TIMER STUFF 
// timer number
var number = 4;

// holding timer setInterval
var intervalId;

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

//  The decrement function.
function decrement() {

    //  Decrease number by one.
    number--;

    //  Show the number in the #show-number tag.
    $("#show-number").html("<h2> timer: " + number + "</h2>");

    // did a little trick so between the questions i just add the seconds in and make it look like 0 if it's over 3 seconds lol
    // yeah I know i could trigger some other function to show a different timer but I really wanted to see if this would work
    // it does

    if (number > 3) {

        $("#show-number").html("<h2> timer: " + "0" + "</h2>");

    }


    else if (number === 1) {

        number += 3

    }

    if (count === questions.length) {



        clearInterval(intervalId);
        stop();
        $("#show-number").html("<h2>timer: " + "" + "</h2>");






    }



}

function stop() {

    //  Clears our intervalId
    //  We just pass the name of the interval
    //  to the clearInterval function.
    clearInterval(intervalId);
}

if (stopVariable = 1) {

    stop();
}


function startGame() {

    $( "#start" ).remove();

    clearInterval(showQuestion);

    // hold the setInterval to run nextquest
    showQuestion = setInterval(nextQuestion, 4000);

}

function stopGame() {


    stop();
    // TODO: Put our clearInterval here:

    clearInterval(showQuestion);
    clearInterval(nextQuestion);
    clearInterval(intervalId);
    clearInterval(decrement);
    clearInterval(run);


}

function restartGame() {

    correct = 0;
    incorrect = 0;
    unanswered = 0;

    // state if the answer is correct or not

    correctState = null;

    // TIMER STUFF 
    // timer number
    number = 4;
    count = 0;

    startGame();
    displayQuestion();
    $( "#restart" ).remove();





}

// click to run game
$("#start").click(startGame);
$("#start").click(displayQuestion);
$("#stop").click(stop);



$("#restart").click(restartGame);





function displayQuestion() {
    $("#questionHolder").html(questions[count]);
    run();


    // displaying questions

    if (count === 3) {


        $("#questionHolder").append(" <form> " +
            "<label>" + "<input type='radio' id='q1_radio_1' name='radiobtn' value = '2' > 4" + "</label>" + "<br>" +
            "<label>" + "<input type='radio' id='q1_radio_2' name='radiobtn' value = '2' > 9" + "</label>" + "<br>" +
            "<label>" + "<input type='radio' id='q1_radio_3' name='radiobtn' value = '1' > 6" + "</label>" + "<br>" + " </form> ");


    }

    else if (count === 2) {


        $("#questionHolder").append(" <form> " +
            "<label>" + "<input type='radio' id='q1_radio_1' name='radiobtn' value = '2' > Shadow" + "</label>" + "<br>" +
            "<label>" + "<input type='radio' id='q1_radio_2' name='radiobtn' value = '1' > Eggman" + "</label>" + "<br>" +
            "<label>" + "<input type='radio' id='q1_radio_3' name='radiobtn' value = '2' > Tails" + "</label>" + "<br>" + " </form> ");


    }

    else if (count === 1) {


        $("#questionHolder").append(" <form> " +
            "<label>" + "<input type='radio' id='q1_radio_1' name='radiobtn' value = '2' > Eggman" + "</label>" + "<br>" +
            "<label>" + "<input type='radio' id='q1_radio_2' name='radiobtn' value = '1' > Shadow" + "</label>" + "<br>" +
            "<label>" + "<input type='radio' id='q1_radio_3' name='radiobtn' value = '2' > Dr. Mario" + "</label>" + "<br>" + " </form> ");


    }

    else if (count === 0) {




        $("#questionHolder").append(" <form> " +
            "<label>" + "<input type='radio' id='q1_radio_1' name='radiobtn' value = '1' > Sonic" + "</label>" + "<br>" +
            "<label>" + "<input type='radio' id='q1_radio_2' name='radiobtn' value = '2' > Knuckles" + "</label>" + "<br>" +
            "<label>" + "<input type='radio' id='q1_radio_3' name='radiobtn' value = '2' > Tails" + "</label>" + "<br>" + " </form> ");






    }

}

function nextQuestion() {

    // these are statements that log correct / incorrect answers


    var answerArr = ["sonic", "shadow", "eggman", "6"];
    var answerVar = answerArr[count];

    var radioValue = $("input[name='radiobtn']:checked").val();

    console.log(radioValue)

    if (radioValue) {

        if (radioValue === "2") {

            incorrect++;
            correctState = 0;
            $("#questionHolder").html("incorrect! the answer was " + answerVar + "<br>" + "correct: " + correct + "<br>" + "incorrect: " + incorrect + "<br>" + "unanswered: " + unanswered);


        }

        else if (radioValue === "1") {

            correct++;
            correctState = 1;
            $("#questionHolder").html("correct! the answer was " + answerVar + "<br>" + "correct: " + correct + "<br>" + "incorrect: " + incorrect + "<br>" + "unanswered: " + unanswered);


        }



    }

    else {

        incorrect++
        unanswered++
        correctState = 0;
        $("#questionHolder").html("incorrect! the answer was " + answerVar + "<br>" + "correct: " + correct + "<br>" + "incorrect: " + incorrect + "<br>" + "unanswered: " + unanswered);

    }





    run();





    //  Increment the count by 1.
    count++;


    // just showing the number as 0 between

    $("#show-number").html("<h2> timer: " + "0" + "</h2>");


    // how long it will be up
    setTimeout(displayQuestion, 1000);



    // right now it ends the game but I can make it loop later with my restart function
    if (count === questions.length) {

        $("#questionHolder").html("FINAL SCORE" + "<br>" + "correct: " + correct + "<br>" + "incorrect: " + incorrect + "<br>" + "unanswered: " + unanswered);

        stopGame();

        $("#restartDiv").append( '<button id= "restart" class = "btn btn-success"> <i class="fa fa-circle-o" style="color:yellow;" aria-hidden="true"></i> RESTART <i class="fa fa-circle-o" style="color:yellow;" aria-hidden="true"></i></button> ' )
        $("#restart").click(restartGame);



    }
}















