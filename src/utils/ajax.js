const request = require('superagent');

export const getBooks = async (filter) => {
  try {
    const res = await request.get(
      `//openlibrary.org/search.json?title=${filter}`
    );
    return res.body.docs;
  } catch (err) {
    return err;
  }
};
