$(document).ready(function(){

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

   var count;
   var user_guess;
   var win;
   var random_number;

   var newGame = function() {
   win = false;
   user_guess = 0;
   count = 0
   $("#feedback").text("Make your Guess!")
   $("#userGuess").val("");
   $("#count").text(count);
   $("#guessList").empty();

   random_number = Math.floor((Math.random() * 10) + 1);

   random_number = 5;

   }

   newGame();

   $("form").submit(function() {
     user_guess = parseInt($("#userGuess").val());

     if (win !== true && isNaN(user_guess) === true || user_guess <= 0 ) {
      $("#feedback").text("Invalid. Pick an integer greater than 0")
      $("#userGuess").val("");
    }
     else if (user_guess !== random_number && count !== 5 && win !== true) {
      $("#feedback").text("Try again")
       count += 1;
       console.log(count);
       $("#count").text(count)
       $("#guessList").append("<li>" + user_guess + "</li>")
       $("#userGuess").val("");

       if (count === 5) {

         $("#feedback").text("You lose. New game in 2... 1...");

         setTimeout(func, 1250);
          function func() {
              newGame();
          }

       } else if (Math.abs(user_guess - random_number) > 50 ) {
          $("#feedback").text("Colder than cold.")
       }
     } else if (win === true ) {
      $("#feedback").text("Ya already won")
     } else if (random_number === user_guess) {
      // put this stuff in function perhaps
      count += 1;
     $("#count").text(count)
     $("#guessList").append("<li>" + user_guess + "</li>")
     $("#userGuess").val("");
      $("#feedback").text("Winner winner!")
      win = true;
     }

     return false;

   })

   $(".new").click(function() {
      newGame();
   })
});


