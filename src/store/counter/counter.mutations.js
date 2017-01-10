export default {
  INCREMENT(state, n = 1) {
    state.count += n;
  },
  DECREMENT(state, n = 1) {
    state.count -= n;
  },
};
