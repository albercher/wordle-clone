
export const guessStats = function(guess, solution) {

  // console.log("@ guessStats.js - solution: " + solution);


  let sol = solution;

  let guessStats = {}


  for (let i = 0; i < 5; i++) {   // loop through guess
    if (!sol.includes(guess[i])) {  // if the solution does NOT inclued the char guess[i], assign 0
      guessStats[i] = 0;
    }
    else {  // else ( if solution DOES include char)
      if (guess[i] === sol[i]) {  // if the guess character === the solution character at index i
        guessStats[i] = 2;
        sol = sol.replace(guess[i], "_");
      }
    }
  }

  for (let i = 0; i < 5; i++) {
    if (sol.includes(guess[i]) && guessStats[i] !== 2) {
      guessStats[i] = 1;
      sol = sol.replace(guess[i], "_");
    }
    else if (guessStats[i] != 2) {
      guessStats[i] = 0;
    }
  }


  // for (let i = 0; i < 5; i++) {   // loop through guess
  //   if (!sol.includes(guess[i])) {
  //     guessStats[i] = 0;
  //   }
  //   else {
  //     for (let j = 0; j < 5; j++) {
  //       if (i === j && guess[i] === sol[j]) {
  //         guessStats[i] = 2;
  //         sol = sol.replace(guess[i], "_");
  //       }
  //       else if (guessStats[i] !== 2) {
  //         guessStats[i] = 1;
  //         if (sol[j] !== guess[j]) {
  //           // sol = sol.replace(guess[i], "_"); // here
  //         }
  //       }
  //     }
  //   }
  //   console.log("sol: " + sol)
  //   console.log("guessStats: ")
  //   console.log(guessStats)
  // }

  return guessStats
}
