const request = require('superagent');

export const getBooks = (filter) =>
  new Promise((resolve, reject) => {
    return request
      .get(`//openlibrary.org/search.json?title=${filter}`)
      .then((res) => {
        resolve(res.body.docs);
      })
      .catch((err) => {
        reject(err);
      });
  });
