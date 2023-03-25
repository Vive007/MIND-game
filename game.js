var selectedPattern=[];
 var gamePattern=[];
var buttonColor=["red", "blue", "green", "yellow" ];
var flag=true;
//nextSequence();
// console.log(randomChooseColor);
// gamePattern.push(randomChooseColor);
// var searchId="#"+gamePattern;
// splash(randomChooseColor);

function splash(selectedColor)
{
    var searchIdd="#"+selectedColor;
    $(searchIdd).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    var dir="sounds/"+selectedColor+".mp3";
    makenoise(dir);
   // makenoise(selectedColor);

}
function makenoise(fileName)
{
    console.log(fileName);
var music=new Audio(fileName);
music.play();
}

function nextSequence()
{
    $("h2").html(" ");
selectedPattern=[];
level++;
    $("h1").html("level: "+level);
var randomNumber=(Math.floor(Math.random()*4));
console.log(randomNumber);
var randomChooseColor=buttonColor[randomNumber];
splash(randomChooseColor);
gamePattern.push(randomChooseColor);
animatePress(randomChooseColor);
flag=false;

}
function animatePress(buttonClickcolor)
{
    var clr="#"+buttonClickcolor;
    $(clr).addClass("pressed");
    setTimeout(function()
    {
        $(clr).removeClass("pressed");
    },100)
    
}
// adding lisner
var level=0;
$(".btn").click(function()
{
var obj =this;
var colorId=obj.id;
selectedPattern.push(colorId);
splash(colorId);
animatePress(colorId);
checkAnswer(selectedPattern.length-1);

})

$(document).keydown(startGame);
function startGame()
{
    //var randomNumberst=(Math.floor(Math.random()*6));
//console.log(randomNumber);
//var randomChooseColor=buttonColor[randomNumber];

    // randomNumberst-=1;
 if(flag)  
nextSequence();
//randomNumberst-=1;
//randomNumberst-=1;
//randomNumberst--;
}


function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === selectedPattern[currentLevel]) {
      if (selectedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
      //playSound("wrong");
      makenoise("sounds/wrong.mp3");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      startOver();
    }
}
function startOver() {
    $("h2").html("Total :"+level);
    level = 0;
    gamePattern = [];
    flag = true;;
  }
  


