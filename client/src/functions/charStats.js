import { solution } from "../constants/Solution";

export const charStats = function(guesses) {
  let charStats = {};
  let uniqueChars = "";
  if (guesses.length > 1) {
    const uniqueSet = new Set(guesses.join('').split(""));
    uniqueChars = [...uniqueSet].join('');
    console.log("uni: " + uniqueChars);
  }
  else if (guesses.length === 1) {
    const uniqueSet = new Set(guesses[0].split(""));
    uniqueChars = [...uniqueSet].join('');
    console.log("uni: " + uniqueChars);
  }

  if (uniqueChars) {
    for (let i = 0; i < uniqueChars.length; i++) {
      if (solution.toLowerCase().includes(uniqueChars[i])) {
        charStats[uniqueChars[i]] = 1;
      }
      else {
        charStats[uniqueChars[i]] = 0;
      }
    }
  }

  console.log("cSolution: ");
  console.log(solution);

  return charStats
}

// export default charStats