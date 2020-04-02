export const mutationNames = {
  SET_BOOKS: 'SET_BOOKS',
  RESET_BOOKS: 'RESET_BOOKS',
  START_LOADING: 'START_LOADING',
  STOP_LOADING: 'STOP_LOADING',
  OPEN_MODAL: 'OPEN_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL',
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

  [mutationNames.OPEN_MODAL](state, data) {
    state.modal.open = true;
    state.modal.data = data;
  },

  [mutationNames.CLOSE_MODAL](state) {
    state.modal.open = false;
    state.modal.data = null;
  },
};
