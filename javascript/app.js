// lol holding the questions in an array like this? it working
var questions = ["question 1", "question 2", "question 3", "question 4"];

// holding the setInterval
var showQuestion;

// Count will keep track of the index
var count = 0;

// holding the amount of right & wrong answers
var correct = 0;
var incorrect = 0;

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

    if (number === 1) {

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




// This function will replace display whatever image it's given
// in the 'src' attribute of the img tag.
function displayQuestion() {
    $("#questionHolder").html(questions[count]);
    run();


}

function nextQuestion() {

    run();


    //  TODO: Increment the count by 1.
    count++;

    // TODO: Show the loading gif in the "image-holder" div.
    $("#questionHolder").html("this will be the loading screen");
    $("#show-number").html("<h2>" + "0" + "</h2>");


    // TODO: Use a setTimeout to run displayImage after 1 second.
    setTimeout(displayQuestion, 1000);



    // TODO: If the count is the same as the length of the image array, reset the count to 0.
    if (count === questions.length) {

        $("#questionHolder").html("END GAME");
        stopGame();




    }
}

function startGame() {
    clearInterval(showQuestion);

    // TODO: Use showImage to hold the setInterval to run nextImage.
    showQuestion = setInterval(nextQuestion, 4000);

}

function stopGame() {

    // TODO: Put our clearInterval here:
    
    clearInterval(showQuestion);
    
    showQuestion = setInterval(nextQuestion, 4000);
    


}

// This will run the display image function as soon as the page loads.










