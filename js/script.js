
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
   // this isnt working properly
   $("#count").text(count);
   $("#guessList").empty();

   var random_number = Math.floor((Math.random() * 10) + 1);

   random_number = 5;

   $("form").submit(function(e) {
     e.preventDefault();
     var user_guess = parseInt($("#userGuess").val());

     if (isNaN(user_guess) === true || user_guess <= 0) {
      $("#feedback").text("Invalid. Pick an integer greater than 0")
      $("#userGuess").val("");
    }
     else if (user_guess !== random_number) {
       count += 1;
       $("#count").text(count)
       // wiping out the value before it can get to user guess
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
      newGame();
   })
});


