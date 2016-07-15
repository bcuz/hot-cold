
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
   $("#feedback").text("Make your Guess!")
   $("#userGuess").val("");
   $("#count").text(0);
   $("#guessList").empty();

   var random_number = Math.floor((Math.random() * 10) + 1);

   random_number = 5;

   var count = 0
   $("form").submit(function(e) {
     e.preventDefault();
     var user_guess = parseInt($("#userGuess").val());

     if (isNaN(user_guess) === true || user_guess <= 0) {
      $("#feedback").text("Invalid. Pick an integer greater than 0")
    }
     else if (user_guess !== random_number) {
       count += 1;
       $("#count").text(count)
       $("#guessList").append("<li>" + user_guess + "</li>")

       if (Math.abs(user_guess - random_number) > 50 ) {
          $("#feedback").text("Colder than cold.")
       }
     }

   })


   }

   newGame();

   $(".new").click(function() {
      newGame();
   })
});


