const request = require('superagent');

const baseUrl = '//openlibrary.org';

export const getBooks = (filter) =>
  new Promise((resolve, reject) => {
    return request
      .get(`${baseUrl}/search.json?title=${filter}`)
      .then((res) => {
        resolve(res.body.docs);
      })
      .catch((err) => {
        reject(err);
      });
  });
