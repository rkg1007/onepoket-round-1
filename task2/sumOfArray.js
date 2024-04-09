const INPUT_NOT_ARRAY_ERROR =
  "Invalid input :- Input of type array is expected.";
const INPUT_NOT_INTEGER_ERROR =
  "Invalid input :- Array should contains only integers";

function sumOfNumbers(arr) {
  // check if given input is array or not
  if (!Array.isArray(arr)) {
    throw new Error(INPUT_NOT_ARRAY_ERROR);
  }

  const arrLength = arr.length;
  let sum = 0;

  for (let i = 0; i < arrLength; i++) {
    const num = Number(arr[i]);

    // element present in array should be numbers to get the final sum
    if (Number.isNaN(num)) {
      throw new Error(INPUT_NOT_INTEGER_ERROR);
    }

    sum += num;
  }

  return sum;
}

module.exports = {
  sumOfNumbers,
  INPUT_NOT_ARRAY_ERROR,
  INPUT_NOT_INTEGER_ERROR,
};
