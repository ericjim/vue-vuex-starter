export default {
  increment(context) {
    context.commit('INCREMENT');
  },
  decrement({ commit }) {
    commit('DECREMENT');
  },
};
