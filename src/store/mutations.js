export const mutationNames = {
  SET_BOOKS: 'SET_BOOKS',
  RESET_BOOKS: 'RESET_BOOKS',
  START_LOADING: 'START_LOADING',
  STOP_LOADING: 'STOP_LOADING',
};

export default {
  [mutationNames.SET_BOOKS](state, books) {
    state.books = books;
  },

  [mutationNames.RESET_BOOKS](state) {
    state.books = [];
  },

  [mutationNames.START_LOADING](state) {
    state.loading = true;
  },

  [mutationNames.STOP_LOADING](state) {
    state.loading = false;
  },
};
