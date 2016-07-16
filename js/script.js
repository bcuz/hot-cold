
$(document).ready(function(){

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

   var newGame = function() {
   var count = 0
   $("#feedback").text("Make your Guess!")
   $("#userGuess").val("");
   $("#count").text(count);
   $("#guessList").empty();

   var random_number = Math.floor((Math.random() * 10) + 1);

   random_number = 5;

   $("form").submit(function(e) {
     e.preventDefault();
     var user_guess = parseInt($("#userGuess").val());
     // print a number AND NaN number? huh?
     console.log(user_guess);
     if (isNaN(user_guess) === true || user_guess <= 0) {
      $("#feedback").text("Invalid. Pick an integer greater than 0")
      $("#userGuess").val("");
    }
     else if (user_guess !== random_number) {
      $("#feedback").text("Try again")
       count += 1;
       $("#count").text(count)
       $("#guessList").append("<li>" + user_guess + "</li>")
       $("#userGuess").val("");

       if (count === 5) {

         $("#feedback").text("You lose.");

         // starts new game 2 seconds after losing
         setTimeout(func, 2000);
          function func() {
              newGame();
          }

       } else if (Math.abs(user_guess - random_number) > 50 ) {
          $("#feedback").text("Colder than cold.")
       }
     } else {
      $("#feedback").text("Winner winner!")
     }

   })


   }

   newGame();

   $(".new").click(function() {
    // if the button is clicked, the new game
    // function is run again
    // why would that prevent past data from erasing?
    // it does erases visually, but its like the data
    // is still there underneath
      newGame();
   })
});


