function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = arr[0];

  min = Math.min(...arr);
  max = Math.max(...arr);
  sum = arr.reduce((arrSum, currentSum) => arrSum + currentSum, 0);

  let avg = +(sum / arr.length).toFixed(2)

  return { min: min, max: max, avg: avg };
}




function summElementsWorker(...arr) {

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
