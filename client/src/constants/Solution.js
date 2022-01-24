import { shortList } from "../constants/ShortList";
// import the shortList

// randomly select a word from the short list:
export const solution = shortList[Math.floor(Math.random() * shortList.length)].toUpperCase();

// needed to create this file to avoid calculating a new solution 
// every time a useState was updated in the game container

// could have maybe moved the code outside of the function in game container
// but this lets us clean up a bit of the clutter there,  especially
// if we decide to get a word of the day