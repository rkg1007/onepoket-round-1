const tests = require('./test');


function testSumOfNumbers() {
    console.log(`Test 1 :- `, tests.test1() ? 'Passed' : 'Failed');
    console.log(`Test 2 :- `, tests.test2() ? "Passed" : "Failed");
    console.log(`Test 3 :- `, tests.test3() ? "Passed" : "Failed");
}

testSumOfNumbers();
