import { solution } from "../constants/Solution";

export const guessStats = function(guess) {

  let sol = solution.toLowerCase();

  let guessStats = {}

  for (let i = 0; i < 5; i++) {
    if (!sol.includes(guess[i])) {
      guessStats[i] = 0;
    }
    else {
      for (let j = 0; j < 5; j++) {
        if (i === j && guess[i] === sol[j]) {
          guessStats[i] = 2;
          sol = sol.replace(guess[i], "_");
        }
        else if (guessStats[i] !== 2) {
          guessStats[i] = 1;
        }
      }
    }
  }

  return guessStats
}
