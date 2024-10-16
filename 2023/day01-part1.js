import formatTextToArrayOfStrings from './formatTextToArrayOfStrings.js';

const adventOfCodeInput = formatTextToArrayOfStrings('./inputDay1.txt');
// console.log('length: ', adventOfCodeInput.length);

function calculateCalibrationSum(inputList) {
  let sum = 0;

  // Loop through each line in the input list
  inputList.forEach((line) => {
    let firstDigit = null;
    let lastDigit = null;

    // Find the first digit in the string
    for (let char of line) {
      if (/\d/.test(char)) {
        firstDigit = char;
        break;
      }
    }

    // Find the last digit in the string (iterate backwards)
    for (let i = line.length - 1; i >= 0; i--) {
      if (/\d/.test(line[i])) {
        lastDigit = line[i];
        break;
      }
    }

    // If both first and last digits were found, combine them into a two-digit number
    if (firstDigit !== null && lastDigit !== null) {
      let calibrationValue = parseInt(firstDigit + lastDigit);
      sum += calibrationValue;
    }
  });

  return sum;
}

console.log('result: ', calculateCalibrationSum(adventOfCodeInput));
