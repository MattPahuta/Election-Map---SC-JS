// Base Scripts

// var politician = {};
// politician.name = "";
// politician.electionResults = null;
// politician.totalVotes = 0;

var makePolitician = function(name, partyColor){
  var politician = {};
  politician.name = name;
  politician.electionResults = null;
  politician.totalVotes = 0;
  politician.partyColor = partyColor;
  return politician;
}

var jim = makePolitician('James Holden', [132, 17, 11]);
var amos = makePolitician('Amos Burton', [245, 141, 136]);
var winner = "";
// console.log(jim);
// console.log(amos);

var arrayOne = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];
var arrayTwo = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];

jim.electionResults = arrayOne;
amos.electionResults = arrayTwo;

// Result Count Updates
jim.electionResults[9] = 1;
amos.electionResults[9] = 28;

jim.electionResults[4] = 17;
amos.electionResults[4] = 38;

jim.electionResults[43] = 11;
amos.electionResults[43] = 27;

// console.log(jim.electionResults);
// console.log(amos.electionResults);

var setStateResults = function(state){
  theStates[state].winner = null;
  if (jim.electionResults[state] > amos.electionResults[state]){
    theStates[state].winner = jim;
  } else if (amos.electionResults[state] > jim.electionResults[state]){
    theStates[state].winner = amos;
  } 

  var stateWinner = theStates[state].winner;
  
  if (stateWinner !== null) {
    theStates[state].rgbColor = stateWinner.partyColor;
  } else {
    theStates[state].rgbColor = [11,32,57];
  }
}


jim.totalVotes = function() {
  this.totalVotes = 0;
  for (var i=0; i<this.electionResults.length; i++){
    this.totalVotes = this.totalVotes + this.electionResults[i];
  }
  console.log("Jim Holden received " + this.totalVotes + " total votes.");
}

amos.totalVotes = function() {
  this.totalVotes = 0;
  for (var i=0; i<this.electionResults.length; i++){
    this.totalVotes = this.totalVotes + this.electionResults[i];
  }
  console.log("Amos Burton recieved " + this.totalVotes + " total votes.")
}

console.log(jim.totalVotes());
console.log(amos.totalVotes());

if (jim.totalVotes > amos.totalVotes){
  winner = jim.name;
} else if (amos.totalVotes > jim.totalVotes){
  winner = amos.name;
} else {
  winner = "Election is a tie!"
}

console.log("The winner of the election is: " + winner)