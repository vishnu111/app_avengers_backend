const path = require("path");

//responding the get request for books with json file of books data
exports.getBooks = (req, res, err) => {
  const filePath = path.join(__dirname, "../data/new-books.json");
  res.sendFile(filePath);
};
