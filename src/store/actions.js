import { mutationNames } from './mutations';
import { getBooks } from '../utils/ajax';

const FETCH_BOOKS = ({ commit }, payload) => {
  commit(mutationNames.START_LOADING);

  getBooks(payload.filter)
    .then(res => {
      commit(mutationNames.SET_BOOKS, res);
      commit(mutationNames.STOP_LOADING);
    })
    .catch(() => {
      commit(mutationNames.STOP_LOADING);
    });
};

export default {
  FETCH_BOOKS
};
