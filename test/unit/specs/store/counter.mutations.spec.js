import mutations from '../../../../src/store/counter/counter.mutations';

describe('mutations', () => {
  it('INCREMENT', () => {
    const state = {count: 0};
    mutations.INCREMENT(state);
    expect(state.count).to.equal(1);
  });

  it('INCREMENT by amount', () => {
    const state = {count: 0};
    mutations.INCREMENT(state, 4);
    expect(state.count).to.equal(4);
  });

  it('DECREMENT', () => {
    const state = {count: 0};
    mutations.DECREMENT(state);
    expect(state.count).to.equal(-1);
  });

  it('DECREMENT by amount', () => {
    const state = {count: 0};
    mutations.DECREMENT(state, 4);
    expect(state.count).to.equal(-4);
  });
});
