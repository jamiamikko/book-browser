import { mutationNames } from './mutations';
import { getBooks } from '../utils/ajax';

const FETCH_BOOKS = ({ commit }, payload) => {
  commit(mutationNames.START_LOADING);

  getBooks(payload.filter)
    .then((res) => {
      const filteredBooks = res.map((book) => {
        return {
          key: book.key,
          title: book.title_suggest,
          authors: book.author_name,
          year: book.first_publish_year,
          covers: {
            thumbnail: book.cover_i
              ? `//covers.openlibrary.org/b/id/${book.cover_i}-S.jpg`
              : '//via.placeholder.com/37x58',
            large: book.cover_i
              ? `//covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
              : '//via.placeholder.com/333/500',
          },
        };
      });

      commit(mutationNames.SET_BOOKS, filteredBooks);
      commit(mutationNames.STOP_LOADING);
    })
    .catch(() => {
      commit(mutationNames.STOP_LOADING);
    });
};

const RESET_BOOKS = ({ commit }) => {
  commit(mutationNames.RESET_BOOKS);
};

const OPEN_MODAL = ({ commit }, payload) => {
  commit(mutationNames.OPEN_MODAL, payload);
};

const CLOSE_MODAL = ({ commit }) => {
  commit(mutationNames.CLOSE_MODAL);
};

export default {
  FETCH_BOOKS,
  RESET_BOOKS,
  OPEN_MODAL,
  CLOSE_MODAL,
};
