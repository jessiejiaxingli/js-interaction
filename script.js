var heading = document.getElementById("title");
var executeButton = document.getElementById("executeButton");
var outputParagraph = document.getElementById("outputText");
var inputElement = document.getElementById("userInput");
var imageElement = document.getElementById("outputImage");

var sharks = ["a Whitetip", "a Whale", "a Basking", 
			  "a Thresher", "a Nurse", "a Tiger", 
			  "an Angel", "a Great White", "a Hammerhead", 
			  "a Ghost", "a Requiem", "a Mako"];
var pics = ["whitetip.jpg", "whale.jpg", "basking.jpg",
			"thresher.jpg", "nurse.jpg", "tiger.jpg",
			"angel.jpg", "greatwhite.jpg", "hammerhead.jpg",
			"ghost.jpg", "requiem.jpg", "mako.jpg"];

executeButton.addEventListener("click", function(){
  var currentInputText = inputElement.value;
  generate(currentInputText);
  restyle();
});

function generate(incUserInput) {
	var index = incUserInput;
	console.log(index);
	var randomIndex = Math.floor(Math.random() * sharks.length);
	console.log(randomIndex)
	outputParagraph.innerText = "You are " + sharks[index] + " shark who's friends with " + sharks[randomIndex] + " shark!";
	imageElement.src = pics[index];
}

function restyle() {
  var randR = Math.random() * 255;
  var randG = Math.random() * 255;
  var randB = 200 + Math.random() * 55;
  var randOutputColor = "rgb("+randR+","+randG+","+randB+")";
  outputParagraph.style.color = randOutputColor;
  outputParagraph.style.textEmphasis = "filled triangle " + randOutputColor;
  outputParagraph.style.fontSize = "3rem";
  outputParagraph.style.paddingTop = "3vmin";
}