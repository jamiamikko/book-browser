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
          covers: {
            thumbnail: book.cover_i
              ? `http://covers.openlibrary.org/b/id/${book.cover_i}-S.jpg`
              : 'https://via.placeholder.com/37x58',
            large: book.cover_i
              ? `http://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
              : null,
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

export default {
  FETCH_BOOKS,
  RESET_BOOKS,
};
