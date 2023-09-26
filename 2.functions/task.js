function getArrayParams(...arr) {
  if (arr.length != 0) {
    let min = arr[0];
    let max = arr[0];
    let sum = arr[0];

    min = Math.min(...arr);
    max = Math.max(...arr);
    sum = arr.reduce((arrSum, currentSum) => arrSum + currentSum, 0);

    let avg = +(sum / arr.length).toFixed(2);

    return { min: min, max: max, avg: avg };
  } else {
    return 0;
  }
}

function summElementsWorker(...arr) {
  if (arr.length != 0) {
    let sum = arr.reduce((arrSum, currentSum) => arrSum + currentSum, 0);

    return sum;
  } else {
    return 0;
  }
}

function differenceMaxMinWorker(...arr) {
  if (arr.length != 0) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let difference = max - min;

    return difference;
  } else {
    return 0;
  }
}

function differenceEvenOddWorker(...arr) {
  if (arr.length != 0) {
    let sumEvenElement = 0;
    let sumOddElement = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 = 0) {
        sumEvenElement += arr[i];
      } else {
        sumOddElement += arr[i];
      }
    }

    return sumEvenElement - sumOddElement;
  } else {
    return 0;
  }
}

function averageEvenElementsWorker(...arr) {
  if (arr.length != 0) {
    let sumEvenElement = 0;
    let countEvenElement = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 = 0) {
        sumEvenElement += arr[i];
        countEvenElement += 1;
      }
    }

    return sumEvenElement / countEvenElement;
  } else {
    return 0;
  }
}

function makeWork (arrOfArr, func) {

}
