/*
John and Mike both play basketball on different teams.
In the latest 3 games, John's team scored 89, 120, and 103 points,
while Mike's team scored 116, 94, and 123 points.

1. Calculate the average score for each team.
2. Decide which team wins on average (highest average
score), and print the winner to the console. Also include
the average score in the output.
3. Then change the scores to show different winners. Don't
forget to take into account that there might be a draw (the
same average score).
4. EXTRA: Mary also plays basketball, and her team scored
97, 134, and 105 points. Like before, log the average
winner to the console.
5. Like before, change the scores to generate different
winners, keeping in mind there might be draws.
*/ 

const averageScore = score =>{
  // 3 games total 
  const avgScore = score / 3;
  return score;
}

const whoWon = winner => {
  if(johnsTeamAvgScore > mikesTeamAvgScore)
  {
    console.log("Johns Team Won!");
  }
  else if(mikesTeamAvgScore > johnsTeamAvgScore)
  {
    console.log("Mikes Team Won!");
  }
  else 
  {
    console.log("It's a Tie!");
  }
}

let johnsTeamScore = 89 + 120 + 103;
let mikesTeamScore = 116 + 94 + 123;
let johnsTeamAvgScore = averageScore(johnsTeamScore);
let mikesTeamAvgScore =  averageScore(mikesTeamScore);
whoWon();
johnsTeamScore = 678;
mikesTeamScore = 677;
johnsTeamAvgScore = averageScore(johnsTeamScore);
mikesTeamAvgScore =  averageScore(mikesTeamScore);
whoWon();