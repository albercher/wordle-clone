import { guessStats } from "../functions/guessStats";

export const charStats = function(guesses, solution) {

  let charStats = {};
  let uniqueChars = "";

  // console.log("@ charStats.js - solution: " + solution);


  if (guesses.length > 1) {
    const uniqueSet = new Set(guesses.join('').split(""));
    uniqueChars = [...uniqueSet].join('');
  }
  else if (guesses.length === 1) {
    const uniqueSet = new Set(guesses[0].split(""));
    uniqueChars = [...uniqueSet].join('');
  }

  if (uniqueChars) {
    for (let i = 0; i < uniqueChars.length; i++) {
      charStats[uniqueChars[i]] = 0;
      for (let j = 0; j < (guesses.length); j++) { // loop thru guesses
        for (let k = 0; k < 5; k++) { // loop thru letters in guess
          if (guessStats(guesses[j], solution)[k] > charStats[guesses[j][k]])
          charStats[guesses[j][k]] = guessStats(guesses[j], solution)[k];
        }
      }
    }
  }

  return charStats
}
