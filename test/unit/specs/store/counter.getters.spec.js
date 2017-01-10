import { expect } from 'chai';
import getters from '../../../../src/store/counter/counter.getters';

describe('getters', () => {
  it('doubleCount of zero', () => {
    const state = {
      count: 0,
    };

    const result = getters.doubleCount(state);

    expect(result).to.deep.equal(0);
  });

  it('doubleCount of one', () => {
    const state = {
      count: 1,
    };

    const result = getters.doubleCount(state);

    expect(result).to.deep.equal(2);
  });

  it('doubleCount of two', () => {
    const state = {
      count: 2,
    };

    const result = getters.doubleCount(state);

    expect(result).to.deep.equal(4);
  });
});
