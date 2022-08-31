let litmusInsect = document.getElementById("catching");
let timer;
let score = 0, 
speed = 3500; 

let txtScore = document.getElementById("score");
let txtStatus = document.getElementById("status");
let divStatus = document.getElementById("banner");

litmusInsect.addEventListener("mousedown", litmusWasp);
document.getElementById("resetScore").addEventListener("click", resetScore);
document.getElementById("resetSpeed").addEventListener("click", resetSpeed);



window.addEventListener("load", function() {
	TMSignOn();
	litmusInsectLocation();
});


function litmusWasp() {

	txtStatus.textContent = "SMASHED!";
	divStatus.style.backgroundColor = "#b56890";
	score ++;
	txtScore.textContent = score;
	speed -= 50;
	
	movelitmusInsect();
}

function movelitmusInsect() {
	let randomx = Math.floor(Math.random() * (500 - 10) + 10);
	let randomy = Math.floor(Math.random() * (300 - 10) + 10);
	litmusInsect.style.left = randomx + "px";
	litmusInsect.style.top = randomy + "px";
}

function resetSpeed() {
	
	txtStatus.textContent = "START!";
	divStatus.style.backgroundColor = "#1ec7b9";
	speed = 3500;
	
	movelitmusInsect();
}

function resetScore() {
	
	txtStatus.textContent = "SCORE RESTORED!";
	divStatus.style.backgroundColor = "#941451";
	score = 0;
	txtScore.textContent = score;
	movelitmusInsect();
}

function litmusInsectLocation() {
	litmusInsect.style.right = 200 + "px";
	litmusInsect.style.bottom = 325 + "px";
}


