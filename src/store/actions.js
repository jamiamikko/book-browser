import { mutationNames } from './mutations';
import { getBooks } from '../utils/ajax';

const GET_BOOKS = ({ commit }) => {
  console.log('Yep');

  getBooks('Great').then(res => {
    commit(mutationNames.SET_BOOKS, res);
  });
};

export default {
  GET_BOOKS
};
