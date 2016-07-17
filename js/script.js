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

   var newGame = function() {
   var win = false;
   count = 0
   $("#feedback").text("Make your Guess!")
   $("#userGuess").val("");
   $("#count").text(count);
   $("#guessList").empty();

   var random_number = Math.floor((Math.random() * 10) + 1);

   random_number = 5;

   $("form").submit(function() {
     var user_guess = parseInt($("#userGuess").val());
     console.log(user_guess);
     // this fires off on a win
     if (isNaN(user_guess) === true || user_guess <= 0) {
      $("#feedback").text("Invalid. Pick an integer greater than 0")
      $("#userGuess").val("");
    }
     else if (user_guess !== random_number && count !== 5 && win !== true) {
      $("#feedback").text("Try again")
       count += 1;
       $("#count").text(count)
       $("#guessList").append("<li>" + user_guess + "</li>")
       $("#userGuess").val("");

       if (count === 5) {

         $("#feedback").text("You lose. New game in 2... 1...");

         setTimeout(func, 1250);
          function func() {
              location.reload();
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


   }

   newGame();

   $(".new").click(function() {
    // directions say not to do this
      newGame();
   })
});


