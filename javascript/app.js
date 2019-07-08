


var questions = ["question 1", "question 2", "question 3"];

// holding the setInterval
var showQuestion;

// Count will keep track of the index
var count = 0;

// holding the amount of right & wrong answers
var correct = 0;
var incorrect = 0;

// click to run game
$("#start").click(startGame);
$("#stop").click(stopGame);




// This function will replace display whatever image it's given
// in the 'src' attribute of the img tag.
function displayQuestion() {
  $("#questionHolder").html(questions[count]);
}

function nextQuestion() {
  //  TODO: Increment the count by 1.
  count++;

  // TODO: Show the loading gif in the "image-holder" div.
  $("#questionHolder").html("this will be the loading screen");

  // TODO: Use a setTimeout to run displayImage after 1 second.
  setTimeout(displayQuestion, 3000);

  // TODO: If the count is the same as the length of the image array, reset the count to 0.
  if (count === questions.length) {

    clearInterval(showQuestion);
    $("#questionHolder").html("END");

    

  }
}

function startGame() {

  // TODO: Use showImage to hold the setInterval to run nextImage.
  showQuestion = setInterval(nextQuestion, 9000);

}

function stopGame() {

  // TODO: Put our clearInterval here:
  clearInterval(showQuestion);

}

// This will run the display image function as soon as the page loads.
displayQuestion();









