import { solution } from "../constants/Solution";

export const charStats = function(guesses) {

  let charStats = {};
  let uniqueChars = "";
  let sol = solution.toLowerCase();

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

  // if (uniqueChars) {
  //   for (let i = 0; i < uniqueChars.length; i++) {
  //     if (solution.toLowerCase().includes(uniqueChars[i])) {
  //       console.log("guesses[guesses.length - 1][i]: " + guesses[guesses.length - 1][i])
  //       console.log("solution[i]: " + solution[i])
  //       console.log("guesses: ")
  //       console.log(guesses)
  //       if (guesses[guesses.length - 1][i] === solution[i].toLowerCase()) {
  //         charStats[uniqueChars[i]] = 2;
  //       }
  //       else {
  //       charStats[uniqueChars[i]] = 1;
  //       }
  //     }
  //     else {
  //       charStats[uniqueChars[i]] = 0;
  //     }
  //   }
  // }

  if (uniqueChars) {  // if uniqueChars exists, i.e. if guess is submitted
    for (let i = 0; i < uniqueChars.length; i++) { // loop thorugh uniqueChars str
      for (let j = 0; j < 5; j++) { // loop through solution chars
        if (uniqueChars[i] === sol[j]) {
          console.log("uniqueChars[i]: " + uniqueChars[i])
          console.log("sol[j]: " + sol[j])
          charStats[uniqueChars[i]] = 1;

          for (let k = 0; k < 5; k++) {
            if (guesses[guesses.length - 1][k] === sol[j] && j === k) {
              charStats[uniqueChars[i]] = 2;
            }
            else {
              if (charStats[uniqueChars[i]] !== 2) {
                charStats[uniqueChars[i]] =  1;
              }
            }
          }
        }
        else {
          if (charStats[uniqueChars[i]] !== 2 && (charStats[uniqueChars[i]] !== 1)) {
            charStats[uniqueChars[i]] = 0;
          }
        }
      }
    }
  }

  return charStats
}

// export default charStats