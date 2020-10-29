//Name Inputs:
var name1 = prompt("Enter name of Player 1");
var name2 = prompt("Enter name of Player 2");
document.querySelectorAll("p")[0].innerHTML = "<strong>"+name1+"</strong>";
document.querySelectorAll("p")[1].innerHTML = "<strong>"+name2+"</strong>";

//Button Click
document.querySelector(".btn").addEventListener("click",function(){
  //Sound
  var rollingSound = new Audio("sounds/RollDice.mp3");
  rollingSound.play();
  //DICE 1
  var randomNumber1 = Math.floor(Math.random() * 6)+1;
  var diceImg1 = "images/dice"+randomNumber1+".png";
  document.querySelector(".img1").src = diceImg1;

  //DICE 2
  var randomNumber2 = Math.floor(Math.random() * 6)+1;
  var diceImg2 = "images/dice"+randomNumber2+".png";
  document.querySelector(".img2").src = diceImg2;

  //Winner Announcemnt
  if(randomNumber1>randomNumber2){
    document.querySelector(".container h1").innerHTML = "🏁"+document.querySelectorAll("p")[0].innerHTML+" Wins!";
  }
  else if(randomNumber1<randomNumber2){
    document.querySelector(".container h1").innerHTML = document.querySelectorAll("p")[1].innerHTML+" Wins!🏁";
  }
  else{
    document.querySelector(".container h1").innerHTML = "🏁Draw!🏁";
  }

});
