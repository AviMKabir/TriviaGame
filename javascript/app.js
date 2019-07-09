// lol holding the questions in an array like this? its working
// i dont know anything about sonic but i needed a theme

var questions = ["question 1: who is the blue hedgehog?",
    "question 2: who is the cooler/darker version of him that uses guns?",
    "question 3: who is the main bad guy in the sonic world?",
    "how many chaos emeralds are there in the original game?"];

// holding the setInterval
var showQuestion;

// Count will keep track of the index
var count = 0;

// holding the amount of right & wrong answers
var correct = 0;
var incorrect = 0;
var unanswered = 0;

// state if the answer is correct or not

var correctState = true

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
    $("#show-number").html("<h2>" + number + "</h2>");

    // did a little trick so between the questions i just add the seconds in and make it look like 0 if it's over 30 seconds lol
    // yeah I know i could trigger some other function to show a different timer but I really wanted to see if this would work
    // it does

    if (number > 3) {

        $("#show-number").html("<h2>" + "0" + "</h2>");

    }


    else if (number === 1) {

        number += 3

    }

}

function stop() {

    //  Clears our intervalId
    //  We just pass the name of the interval
    //  to the clearInterval function.
    clearInterval(intervalId);
}



// click to run game
$("#start").click(startGame);
$("#start").click(displayQuestion);









$("#stop").click(stopGame);
$("#stop").click(stop);





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


    

        var radioValue = $("input[name='radiobtn']:checked").val();

        console.log(radioValue)

        if (radioValue) {

            if (radioValue === "2") {

                incorrect++;
                correctState = false;


            }

            else if (radioValue === "1") {

                correct++;
                correctState = true;

            }



        }

        else {

            incorrect++
            unanswered++
            correctState = false;

        }


    


    run();

       // showing the results page
       $("#questionHolder").html("correct: " + correct + "<br>" + "incorrect: " + incorrect + "<br>" + "unanswered: " + unanswered);

    //  Increment the count by 1.
    count++;




 





    $("#show-number").html("<h2>" + "0" + "</h2>");


    // how long it will be up
    setTimeout(displayQuestion, 1000);



    // right now it ends the game but I can make it loop later
    if (count === questions.length) {

        count = 0;



    }
}



function startGame() {
    clearInterval(showQuestion);

    // hold the setInterval to run nextquest
    showQuestion = setInterval(nextQuestion, 4000);

}

function stopGame() {

    // TODO: Put our clearInterval here:

    clearInterval(showQuestion);

    showQuestion = setInterval(nextQuestion, 4000);



}











