// Build a politician function
const makePolitician = function(name, partyColor){
  const politician = {};
  politician.name = name;
  politician.electionResults = null;
  politician.totalVotes = 0;
  politician.partyColor = partyColor;

  politician.electionResultsTotal = function(){
    this.totalVotes = 0;
    for (let i=0; i<this.electionResults.length; i++){
      this.totalVotes = this.totalVotes + this.electionResults[i];
    }
  }

  return politician;
}
// Determine State Results Function
const setStateResults = function(state){
  theStates[state].winner = null;

  if (jim.electionResults[state] > amos.electionResults[state]){
    theStates[state].winner = jim;
  } else if (amos.electionResults[state] > jim.electionResults[state]){
    theStates[state].winner = amos;
  } 

  const stateWinner = theStates[state].winner;
  
  if (theStates[state].winner !== null) {
    theStates[state].rgbColor = stateWinner.partyColor;
  } else {
    theStates[state].rgbColor = [11,32,57];
  }
  // State Table Results 
  const statesTable = document.getElementById('stateResults'); // States Table
  const header = statesTable.children[0].children[0];
  const stateName = header.children[0]
  stateName.innerText = theStates[state].nameFull;
  const stateAbbrev = header.children[1];
  stateAbbrev.innerText = theStates[state].nameAbbrev;
  
  const statesRow = statesTable.children[1];
  // Candidate 1
  const name1 = statesRow.children[0].children[0];
  name1.innerText = jim.name;
  const results1 = statesRow.children[0].children[1];
  results1.innerText = jim.electionResults[state];
  // Candidate 2
  const name2 = statesRow.children[1].children[0];
  name2.innerText = amos.name;
  const results2 = statesRow.children[1].children[1];
  results2.innerText = amos.electionResults[state];
  // State Winner
  const winnerName = statesRow.children[2].children[1];
  if (stateWinner !== null){
    winnerName.innerText = stateWinner.name;
  } else {
    winnerName.innerText = "DRAW";
  }

}

const jim = makePolitician('James Holden', [132, 17, 11]);
const amos = makePolitician('Amos Burton', [245, 141, 136]);
let winner = null;

jim.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];
amos.electionResults  = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];

// Result Count Updates
jim.electionResults[9] = 1;
amos.electionResults[9] = 28;

jim.electionResults[4] = 17;
amos.electionResults[4] = 38;

jim.electionResults[43] = 11;
amos.electionResults[43] = 27;

jim.electionResultsTotal();
amos.electionResultsTotal();

// Determine the winner 
if (jim.totalVotes < amos.totalVotes){
  winner = amos.name;
} else if (amos.totalVotes < jim.totalVotes){
  winner = jim.name;
} else {
  winner = "Election is a tie!"
}

// Country Table Results
const countryResultsTable = document.getElementById("countryResults");
const row = countryResultsTable.children[0].children[0];

// Populate the Country Table
row.children[0].innerText = jim.name;
row.children[1].innerText = jim.totalVotes;
row.children[2].innerText = amos.name;
row.children[3].innerText = amos.totalVotes;
row.children[5].innerText = winner;


// console.log("The winner of the election is: " + winner)