import store from '../store/store';

class LibraryService {
  getBooksData() {
    this.store = store;

    console.log(store);
  }
}

export default new LibraryService();
