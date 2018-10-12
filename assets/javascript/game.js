// Set variable arrays for game number to guess, and values that will randomly be pulled for each gem. also set vars for wins, losses.

var guessNumber = "";
var wins = 0;
var losses = 0;
var counter = 0;
var images = ["./assets/images/emerald.png", "./assets/images/ruby.jpg", "./assets/images/topaz.png", "./assets/images/sapphire.jpg"]

// Create a random number for the guess number between 50 and 100

function randomGuessNumber () {
    guessNumber = Math.floor(Math.random() * 51) + 50;
}

// Develop a function that will randomly assign a value to each gem image
// Will use variable that is set to gem images and will format using jquery attr function

function resetCrystals () {
    for (var i = 0; i < images.length; i++) {
        var crystal = $("<img>");
        crystal.addClass("crystal");
        crystal.attr("src", images[i]);
        crystal.attr("value", (Math.floor(Math.random() * 12) + 1));
        crystal.attr("height", "95");
        crystal.attr("width", "95");
        crystal.attr("margin", "25");
        $(".images").append(crystal);
    }
}

// Starting values for Guess number (randomly generated), reset html, values for images (randomly generated)
randomGuessNumber ();
resetHTML ();
resetCrystals ();


// After image values set, a function so that when each gem is clicked, that gem value counts towards score number. Win if score = guess, and loss if score is > guess
$(document).on("click", ".crystal", crystalClick);

function crystalClick () {
    counter += parseInt($(this).attr("value"));
    $(".scorenumber").html(counter);
    if (counter == guessNumber) {
        wins++;
        totalReset();
    }
    else if (counter > guessNumber) {
        losses++;
        totalReset();
    };
};

// Reset the game back to original values
function resetHTML () {
    $(".target").html(guessNumber);
    $(".wins-losses").html("<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>");
    $(".scorenumber").html(counter);
    $(".images").empty();
}

function totalReset () {
    randomGuessNumber ();
    counter = 0;
    resetHTML ();
    resetCrystals ();
}

