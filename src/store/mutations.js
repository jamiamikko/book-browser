export const mutationNames = {
  SET_BOOKS: 'SET_BOOKS'
};

export default {
  [mutationNames.SET_BOOKS](state, books) {
    state.books = books;
  }
};
