const {
  sumOfNumbers,
  INPUT_NOT_ARRAY_ERROR,
  INPUT_NOT_INTEGER_ERROR,
} = require("./sumOfArray");

function test1() {
  try {
    const arr = {};
    const output = sumOfNumbers(arr);
    return false;
  } catch (error) {
    return error.message == INPUT_NOT_ARRAY_ERROR;
  }
}

function test2() {
  try {
    const arr = [1, 2, 3];
    const output = sumOfNumbers(arr);
    return output == 6;
  } catch (error) {
    return false;
  }
}

function test3() {
  try {
    const arr = [1, 2, "not number"];
    const output = sumOfNumbers(arr);
    return false;
  } catch (error) {
    return error.message == INPUT_NOT_INTEGER_ERROR;
  }
}

module.exports = {
  test1,
  test2,
  test3,
};
