
$(document).ready(function(){

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

    // why is it refreshing after each submit?
    // something wrong here. strange

   // var newGame = function() {
   $("#userGuess").val("");
   var random_number = Math.floor((Math.random() * 10) + 1);

   var count = 0;
   $("form").submit(function() {
   if ($("#userGuess").val() !== random_number) {
     count += 1;
    $("#count").text(count);
   }

   })


   // }();

   // while (random_number !==  ) {
   // }
   // newGame();

   $(".new").click(function() {
    newGame();
   })
});


