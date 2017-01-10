import { expect } from 'chai';
import actions from '../../../../src/store/counter/counter.actions';

const testAction = (action, payload, state, expectedMutations, done) => {
  let count = 0;

  // mock commit
  const commit = (type, payload) => {
    const mutation = expectedMutations[count];
    expect(mutation.type).to.equal(type);
    if (payload) {
      expect(mutation.payload).to.deep.equal(payload)
    }
    count++;
    if (count >= expectedMutations.length) {
      done()
    }
  };

  // call the action with mocked store and arguments
  action({commit, state}, payload);
  // check if no mutations should have been dispatched
  if (expectedMutations.length === 0) {
    expect(count).to.equal(0);
    done();
  }
};

describe('actions', () => {
  it('Should commit INCREMENT', (done) => {
    const state = { count: 0 };
    const expectedMutations = [{ type: 'INCREMENT' }];
    testAction(actions.increment, null, state, expectedMutations, done);
  });

  it('Should commit INCREMENT by amount', (done) => {
    const state = { count: 0 };
    const amount = 4; // TODO: check that state is 4
    const expectedMutations = [{ type: 'INCREMENT', payload: amount }];
    testAction(actions.increment, amount, state, expectedMutations, done);
  });

  it('Should commit DECREMENT', (done) => {
    const state = { count: 0 };
    const expectedMutations = [{ type: 'DECREMENT' }];
    testAction(actions.decrement, null, state, expectedMutations, done);
  });

  it('Should commit DECREMENT', (done) => {
    const state = { count: 0 };
    const amount = 4; // TODO: check that state is 4
    const expectedMutations = [{ type: 'DECREMENT', payload: amount }];
    testAction(actions.decrement, amount, state, expectedMutations, done);
  });
});
