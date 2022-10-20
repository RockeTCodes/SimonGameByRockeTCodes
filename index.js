var gamePattern = [];
var userClickedPattern = [];
var buttonColours = ["red","blue","green","yellow"];




$(".btn").click(function(){
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  makeSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length);
});
var level = 0 ;
var start = false ;

$(document).on("keydown",function(){

if(start == false ){

$("h1").text("Level "+level);
nextSequence();
start = true;
}

});

function checkAnswer(lastIndex){

  if(userClickedPattern[lastIndex-1] == gamePattern[lastIndex-1]){

   console.log("Success");

   if(userClickedPattern.length == gamePattern.length){
     setTimeout(function(){
       nextSequence();
     },1000);
   }

  }

  else{
    console.log("Wrong")
    makeSound("wrong");
    $("body").addClass("game-over");
    $("h1").text("Game Over, Press any key to restart.")
    setTimeout(function(){
      $("body").removeClass("game-over");
    },200);
    startOver();
  }

}

function animatePress(currentColour){

$("."+currentColour).addClass("pressed");
setTimeout(function(){
  $("."+currentColour).removeClass("pressed");
},100);

}

function makeSound(name){


//This easy method was in answer .

  // var audio = new Audio("sounds/"+name+".mp3");
  // audio.play();


// My method



  switch (name) {

    case "red":
    var audio = new Audio('sounds/red.mp3');
    audio.play();
      break;

    case "blue":
    var audio = new Audio('sounds/blue.mp3');
    audio.play();
    break;

    case "green":
    var audio = new Audio('sounds/green.mp3');
    audio.play();
    break;

    case "yellow":
    var audio = new Audio('sounds/yellow.mp3');
    audio.play();
    break;

    case "wrong":
    var audio = new Audio('sounds/wrong.mp3');
    audio.play();
    break;

    default:

  }




  }

function nextSequence(){
  userClickedPattern = [];
  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  makeSound(randomChosenColour);
  animatePress(randomChosenColour);
  level++;
  $("h1").text("Level "+level);

}

function startOver(){

  level = 0;
  gamePattern=[];
  start = false;

}
