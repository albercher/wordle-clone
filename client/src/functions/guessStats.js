import { solution } from "../constants/Solution";

export const guessStats = function(guess) {

  let sol = solution.toLowerCase();

  let guessStats = {}

  console.log(guess)


  for (let i = 0; i < 5; i++) { // loop through guess chars
    guessStats[i] = 0;
    console.log(sol)
    for (let j = 0; j < 5; j++) { // loop thorugh sol chars
      if (guess[i] === sol[j]) {
        if (i === j) {
          guessStats[i] = 2;
          sol = sol.replace(guess[i], "_")
        }
        else {
          guessStats[i] = 1;
          sol = sol.replace(guess[i], "_")
        }
      }
    }
  }


  return guessStats
}
