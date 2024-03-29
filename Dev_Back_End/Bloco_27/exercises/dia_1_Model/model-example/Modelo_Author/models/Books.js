const connection = require('./connection');

const getAllBooks = async () => {
  const [books] = await connection.execute(
'SELECT * FROM model_example.books'
);
    return books.map(({ id, title, author_id}) => ({
      id,
      title,
      author_Id: author_id,
    }));
};

module.exports  = [
  getAllBooks,
];