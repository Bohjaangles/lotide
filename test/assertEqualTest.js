const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

describe('#assertEqual testing grounds', () => {
  it('should pass if inputting two itendtical strings and it treturns true', () => {
    assert.isTrue(assertEqual('name', 'name'), true);
  });
  it('should pass if it returns false when passing two different values( 1, 2)', () => {
    assert.isFalse(assertEqual(1, 2), false);
  });
});


