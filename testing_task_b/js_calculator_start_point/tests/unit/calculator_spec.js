var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  it("can add the previous total with a given number", () => {
    calculator.previousTotal = 10;
    calculator.add(5);

    var expected = 15;
    var result = calculator.runningTotal;
    assert.strictEqual(result, expected);
  });

  it("can subtract the previous total with a given number", () => {
    calculator.previousTotal = 10;
    calculator.subtract(5);

    var expected = 5;
    var result = calculator.runningTotal;
    assert.strictEqual(result, expected);
  });

  it("can multiply the previous total with a given number", () => {
    calculator.previousTotal = 10;
    calculator.multiply(5);

    var expected = 50;
    var result = calculator.runningTotal;
    assert.strictEqual(result, expected);
  });

  it("can divide the previous total with a given number", () => {
    calculator.previousTotal = 10;
    calculator.divide(5);

    var expected = 2;
    var result = calculator.runningTotal;
    assert.strictEqual(result, expected);
  });

  it("can click number and append current input", () => {
    calculator.numberClick(3);
    var expected = 3;
    var result = calculator.runningTotal;
    assert.strictEqual(result, expected);

    calculator.numberClick(6);
    var expected = 36;
    var result = calculator.runningTotal;
    assert.strictEqual(result, expected);

    calculator.numberClick(9);
    var expected = 369;
    var result = calculator.runningTotal;
    assert.strictEqual(result, expected);
  });

  it("can clear input", () => {
    calculator.numberClick(3);
    calculator.operatorClick("*");
    calculator.numberClick(5);
    calculator.clearClick();

    var expected = 0;
    var result = calculator.runningTotal;
    assert.strictEqual(result, expected);
  });

  it("can multiply 3x5 and get 15", function(){

    calculator.numberClick(3);
    calculator.operatorClick("*");
    calculator.numberClick(5);
    calculator.operatorClick("=");

    var expected = 15;
    var result = calculator.runningTotal;
    assert.strictEqual(result, expected);
  });

  it("can divide 21/7 and get 3", function(){

    calculator.numberClick(21);
    calculator.operatorClick("/");
    calculator.numberClick(7);
    calculator.operatorClick("=");

    var expected = 3;
    var result = calculator.runningTotal;
    assert.strictEqual(result, expected);
  });

  it("can add 1+4 and get 5", function(){

    calculator.numberClick(1);
    calculator.operatorClick("+");
    calculator.numberClick(4);
    calculator.operatorClick("=");

    var expected = 5;
    var result = calculator.runningTotal;
    assert.strictEqual(result, expected);
  });

  it("can subtract 7-4 and get 3", function(){

    calculator.numberClick(7);
    calculator.operatorClick("-");
    calculator.numberClick(4);
    calculator.operatorClick("=");

    var expected = 3;
    var result = calculator.runningTotal;
    assert.strictEqual(result, expected);
  });

  it("can concatenate multiple number button clicks", function(){

    calculator.numberClick(7);
    calculator.numberClick(4);
    calculator.numberClick(9);
    calculator.numberClick(2);

    var expected = 7492;
    var result = calculator.runningTotal;
    assert.strictEqual(result, expected);
  });

  it("can chain multiple operations together", function(){

    calculator.numberClick(1);
    calculator.operatorClick("+");
    calculator.numberClick(4);
    calculator.numberClick(7);
    calculator.operatorClick("-");
    calculator.numberClick(4);
    calculator.operatorClick("=");

    var expected = 44;
    var result = calculator.runningTotal;
    assert.strictEqual(result, expected);
  });

  it("can clear the running total without affecting the calculation", function(){

    calculator.numberClick(1);
    calculator.operatorClick("+");
    calculator.numberClick(4);
    calculator.operatorClick("-");
    calculator.numberClick(4);
    calculator.numberClick(5);

    calculator.clearClick();
    calculator.numberClick(4);

    calculator.operatorClick("=");

    var expected = 1;
    var result = calculator.runningTotal;
    assert.strictEqual(result, expected);
  });

	//
	//

});
