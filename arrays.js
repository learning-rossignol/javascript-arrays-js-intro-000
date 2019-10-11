var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

addElementToBeginningOfArray = (arr, x) => [x, ...arr]


destructivelyAddElementToBeginningOfArray = (arr, x) => {
  arr.unshift(x); return arr;
}

addElementToEndOfArray = (arr, x) => [...arr, x];

destructivelyAddElementToEndOfArray = (arr, x) => {
  arr.push(x); return arr;
}

accessElementInArray = (arr, i) => arr[i];

destructivelyRemoveElementFromBeginningOfArray = (arr) => {
  arr.shift(); return arr;
}

removeElementFromBeginningOfArray = (arr) => arr.slice(1);

destructivelyRemoveElementFromEndOfArray = (arr) => {
  arr.pop();
  return arr;
}
removeElementFromEndOfArray = (arr) => arr.slice(0, arr.length - 1);

myArray = [1,2,3];
console.log([...myArray, 4,5,6, ...myArray]);

const letters = ["alpha", "gamma", "delta"];
console.log([...letters.slice(0,1), "beta", ...letters.slice(1)])
