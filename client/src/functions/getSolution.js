import { shortList } from "../constants/ShortList";

export const getSolution = function() {
  const solution = shortList[Math.floor(Math.random() * shortList.length)];

  return solution
}
