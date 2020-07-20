// JavaScript Document

if(localStorage.getItem("WORD")) {
	Word = localStorage.getItem("WORD"); 
} 

const canvas = document.querySelector("#hangcanvas");

if(localStorage.getItem("REMOVEDGUESSES")){
	RemovedGuesses = localStorage.getItem("REMOVEDGUESSES").split("");
	localStorage.setItem("WRONGGUESSCOUNTER", localStorage.getItem("WRONGGUESSCOUNTER") - 1);
	PlayHangmanRound("");
}
else StartNewGame();

function StartNewGame(){			
		let Word = WordList[Math.floor(Math.random() * WordList.length)].toUpperCase();
		console.log(Word);
	
		if(localStorage.getItem("REMOVEDGUESSES")) RemovedGuesses = localStorage.getItem("REMOVEDGUESSES");
		else RemovedGuesses = "";

		let BlankWord = "";
		for (let i = 0; i < Word.length; i++) BlankWord += "_"; 
	
		const mystery = document.querySelector("#mysteryBox");
		mystery.innerHTML = BlankWord;
		
		localStorage.setItem("WORD", Word);
		localStorage.setItem("WRONGGUESSCOUNTER", 0);
		localStorage.setItem("BLANKWORD", BlankWord);
		localStorage.setItem("REMOVEDGUESSES", "")
	
		HangMan(6);
  }


function PlayHangmanRound(GuessedLetter){
		let Word = localStorage.getItem("WORD");
		let BlankWord = localStorage.getItem("BLANKWORD");
		let WrongGuessCounter = localStorage.getItem("WRONGGUESSCOUNTER");
		let RemovedGuesses = localStorage.getItem("REMOVEDGUESSES");
		let IsGoodGuess = null;
		let HangArray = Word.split("");
		let BlankArray = BlankWord.split("");

		for (let i = 0; i < BlankWord.length; i++){
			if (HangArray[i] == GuessedLetter){
				IsGoodGuess = true;
				BlankArray[i] = GuessedLetter; 
			}  
		}
	
		if (IsGoodGuess != true){ 
			WrongGuessCounter++; 
			if (WrongGuessCounter > 6) WrongGuessCounter = 6;
			localStorage.setItem("WRONGGUESSCOUNTER", WrongGuessCounter);
		}
			
		const lives = document.querySelector("#lives");
		let LifeCount = (6 - WrongGuessCounter);
		lives.innerHTML = LifeCount;
	
		BlankWord = BlankArray.toString();
		BlankWord = BlankWord.replace(/,/g,"");
		localStorage.setItem("BLANKWORD", BlankWord);
		const mystery = document.querySelector("#mysteryBox");
		mystery.innerHTML = BlankWord;
	
		RemovedGuesses += GuessedLetter;
		RemovedGuesses.replace(/,/g,"");
		localStorage.setItem("REMOVEDGUESSES", RemovedGuesses);
	
		RemovedGuesses = RemovedGuesses.split("");
	
		RemovedGuesses.forEach(L => {
			document.querySelector("#" + L).classList.add("guessed");
			document.querySelector("#" + L).disabled = true;
		});
	
		if (Word == BlankWord && WrongGuessCounter < 6){
		   document.getElementById("result").innerHTML = "YOU WIN!";
		   
		   document.querySelectorAll(".letter").forEach(letter => {
			  letter.disabled = true;
		   });
		}
	
		HangMan(LifeCount);			
 	}	


document.querySelectorAll(".letter").forEach(letter => {
	letter.addEventListener("click", () =>{
		PlayHangmanRound(letter.value);
	});
});


function HangMan(LifeCount){
	let gallows = canvas.getContext("2d");
	gallows.moveTo(190, 555);
	gallows.lineTo(190, 25)
	gallows.lineTo(350, 25);
	gallows.lineWidth = 15;
	gallows.strokeStyle = "#3d2106";
	gallows.stroke();

	let noose = canvas.getContext("2d");
	noose.beginPath();
	noose.moveTo(350, 25);
	noose.lineTo(350, 75);
	noose.lineWidth = 4;
	noose.strokeStyle = "#b2a47b";
	noose.stroke();

	function hangHead(){
	let head = canvas.getContext("2d");
	head.beginPath();
	head.arc(350,125,50,0,2*Math.PI);
	head.closePath;
	head.lineWidth = 6;
	head.strokeStyle = "darksalmon";
	head.stroke();
	head.fillStyle = "#ead9b6";
	head.fill();
	}
	
	function hangBody(){
	let body = canvas.getContext("2d");
	body.beginPath();
	body.moveTo(350, 175);
	body.lineTo(350, 325);
	body.lineWidth = 11;
	body.strokeStyle = "orangered";
	body.stroke();
	}
	
	function hangLeftArm(){
	let lArm = canvas.getContext("2d");
	lArm.beginPath();
	lArm.moveTo(350, 190);
	lArm.lineTo(275, 300);
	lArm.lineWidth = 9;
	lArm.strokeStyle = "orangered";
	lArm.stroke();
	}
	
	function hangRightArm(){
	let rArm = canvas.getContext("2d");
	rArm.beginPath();
	rArm.moveTo(350, 190);
	rArm.lineTo(425, 300);
	rArm.lineWidth = 9;
	rArm.strokeStyle = "orangered";
	rArm.stroke();
	}
	
	function hangLeftLeg(){
	let lLeg = canvas.getContext("2d");
	lLeg.beginPath();
	lLeg.moveTo(350, 325);
	lLeg.lineTo(250, 475);
	lLeg.lineWidth = 10;
	lLeg.strokeStyle = "whitesmoke";
	lLeg.stroke();
	}
	function hangRightLeg(){
	let rLeg = canvas.getContext("2d");
	rLeg.beginPath();
	rLeg.moveTo(350, 325);
	rLeg.lineTo(450, 475);
	rLeg.lineWidth = 10;
	rLeg.strokeStyle = "whitesmoke";
	rLeg.stroke();
	}

	if(LifeCount == "5"){
	hangHead();
	}

	if(LifeCount == "4"){
	hangHead();
	hangBody();
	}

	if(LifeCount == "3"){
	hangHead();
	hangBody();
	hangLeftArm();
	}

	if(LifeCount == "2"){
	hangHead();
	hangBody();
	hangLeftArm();
	hangRightArm();
	}

	if(LifeCount == "1"){
	hangHead();
	hangBody();
	hangLeftArm();
	hangRightArm();
	hangLeftLeg();
	}

	if(LifeCount == "0"){
	hangHead();
	hangBody();
	hangLeftArm();
	hangRightArm();
	hangLeftLeg();
	hangRightLeg();
	const loser = "YOU LOSE";
	document.getElementById("result").innerHTML = loser;
	let Word = localStorage.getItem("WORD");	
	document.querySelector("#mysteryBox").innerHTML = Word;
	document.querySelector("#googleIt").style.display = "inline-block";
		
	document.querySelectorAll(".letter").forEach(letter => {
		letter.disabled = true;
	});
	}
}

document.querySelector("#reset").addEventListener("click", () => {
	localStorage.clear();
	location.reload();
});	


let goog = document.querySelector("#googleIt");
goog.addEventListener("mouseover", () => { document.querySelector("#googleIt").innerHTML = "Look up word"; });
goog.addEventListener("mouseout", () => { document.querySelector("#googleIt").innerHTML = "Huh?"; });
goog.addEventListener("click", () => { 
	googleQuery = "https://www.google.com/search?q=" + document.querySelector("#mysteryBox").innerHTML.toLowerCase() + "+definition";
	window.open(googleQuery);
});