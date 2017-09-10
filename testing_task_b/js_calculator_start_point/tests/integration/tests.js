var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

  it('should update disply on operation click', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_add')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('4')
  })

  it('can chain multiple operations together', function(){
    running_total = element(by.css('#running_total'))
    var twoBtn = element(by.css('#number2'));

    twoBtn.click();
    element(by.css('#operator_add')).click();
    twoBtn.click();
    element(by.css('#operator_subtract')).click();
    twoBtn.click();
    element(by.css('#operator_multiply')).click();
    twoBtn.click();
    element(by.css('#operator_divide')).click();
    twoBtn.click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

  it('can use large numbers', function(){
    running_total = element(by.css('#running_total'));
    var nineBtn = element(by.css('#number9'));

    for(let j=0; j<5; j++){
      nineBtn.click();
    }
    element(by.css('#operator_multiply')).click();
    for(let j=0; j<5; j++){
      nineBtn.click();
    }

    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('9999800001');
  })

  it('can calculate deciamals', function(){
    running_total = element(by.css('#running_total'));

    element(by.css('#number3')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_equals')).click();

    expect(running_total.getAttribute('value')).to.eventually.equal('1.5');
  })

  it('can calculate negative numbers', function(){
    running_total = element(by.css('#running_total'));

    element(by.css('#number1')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number9')).click();
    element(by.css('#operator_equals')).click();

    expect(running_total.getAttribute('value')).to.eventually.equal('-8');
  })

  it('should clear input if dividing by zero (on equals press)', function(){
    running_total = element(by.css('#running_total'));

    element(by.css('#number2')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_equals')).click();

    expect(running_total.getAttribute('value')).to.eventually.equal('0');
  })

  it('should clear input if dividing by zero (on operator press)', function(){
    running_total = element(by.css('#running_total'));

    element(by.css('#number2')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_add')).click();

    expect(running_total.getAttribute('value')).to.eventually.equal('0');
  })

});
