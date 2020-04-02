import { getBooks } from '../utils/ajax';

class LibraryService {
  getBooksByFilter = filter =>
    new Promise((resolve, reject) => {
      getBooks(filter)
        .then(res => resolve(res))
        .catch(err => reject(err));
    });
}

export default new LibraryService();
