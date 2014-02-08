var playerScore= 0;
var botScore = 0;


document.getElementById('rock').onclick = throwRock;
document.getElementById('paper').onclick = throwPaper;
document.getElementById('scissors').onclick = throwScissors;

function throwRock(){
	console.log('rock thrown');
	playGame(0);
}

function throwPaper(){
	console.log('paper thrown');
	playGame(1);
}

function throwScissors(){
	console.log('scissors thrown');
	playGame(2);
}

function playGame(playerThrow){
	var botThrow = getRobotsThrow();
	console.log("bot: " + botThrow);
	console.log("me: " + playerThrow)
	var outcome = getGameOutcome(playerThrow, botThrow);
	updateScore(outcome);
}

function getGameOutcome(playerThrow, botThrow){
	if (botThrow === playerThrow){
		return 'draw';
	}
	else if ( ((botScore == 2) && (playerScore == 0)) ||
			((botScore == 0) && (playerScore ==1)) || 
			(( botScore == 1) && (playerScore ==2)) ){
		return 'Player wins';
	}
	else {
		return 'Player loses';
	}
}
function updateScore(outcome){
	if (outcome === 'Player wins'){
		playerScore = playerScore + 1;
	}
	else if(outcome === 'Player loses'){
		botScore = botScore + 1;
	}
	document.getElementById('humanScore').innerHTML = playerScore;
	document.getElementById('computerScore').innerHTML = botScore;
}

function getRobotsThrow(){
	return Math.floor(Math.random()*3); 
}

